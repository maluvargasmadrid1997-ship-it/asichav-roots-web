import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Loader2 } from "lucide-react";
import { STOREFRONT_QUERY, storefrontApiRequest, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

const Productos = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await storefrontApiRequest(STOREFRONT_QUERY, {
          first: 50,
          query: null
        });
        setProducts(data.data.products.edges);
      } catch (error) {
        console.error('Error fetching products:', error);
        toast.error("Error al cargar los productos");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product: ShopifyProduct) => {
    const variant = product.node.variants.edges[0].node;
    const cartItem = {
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions
    };
    
    addItem(cartItem);
    toast.success("Producto agregado al carrito", {
      description: product.node.title
    });
  };

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Nuestros Productos Orgánicos
            </h1>
            <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto">
              Productos frescos cultivados con amor y respeto por la tierra
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            {products.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h2 className="text-2xl font-semibold mb-2">No hay productos disponibles</h2>
                <p className="text-muted-foreground">
                  Pronto tendremos productos disponibles para ti
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <Card key={product.node.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <Link to={`/producto/${product.node.handle}`}>
                      <div className="aspect-square overflow-hidden bg-secondary/10">
                        {product.node.images.edges[0]?.node && (
                          <img
                            src={product.node.images.edges[0].node.url}
                            alt={product.node.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        )}
                      </div>
                    </Link>
                    <CardHeader>
                      <CardTitle className="line-clamp-2">
                        <Link to={`/producto/${product.node.handle}`} className="hover:text-primary transition-colors">
                          {product.node.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {product.node.description}
                      </p>
                      <p className="text-2xl font-bold text-primary mt-4">
                        {product.node.priceRange.minVariantPrice.currencyCode} ${parseFloat(product.node.priceRange.minVariantPrice.amount).toFixed(2)}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        onClick={() => handleAddToCart(product)}
                        className="w-full"
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Agregar al Carrito
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Productos;
