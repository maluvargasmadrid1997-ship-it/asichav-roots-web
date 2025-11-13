import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Loader2 } from "lucide-react";
import { PRODUCT_QUERY, storefrontApiRequest } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

const ProductoDetalle = () => {
  const { handle } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!handle) return;
      
      try {
        const data = await storefrontApiRequest(PRODUCT_QUERY, {
          handle
        });
        
        const productData = data.data.productByHandle;
        setProduct(productData);
        setSelectedVariant(productData.variants.edges[0].node);
      } catch (error) {
        console.error('Error fetching product:', error);
        toast.error("Error al cargar el producto");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [handle]);

  const handleAddToCart = () => {
    if (!product || !selectedVariant) return;

    const cartItem = {
      product: { node: product },
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions
    };
    
    addItem(cartItem);
    toast.success("Producto agregado al carrito", {
      description: product.title
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

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Producto no encontrado</h1>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg bg-secondary/10">
                {product.images.edges[0]?.node && (
                  <img
                    src={product.images.edges[0].node.url}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.edges.slice(1, 5).map((image: any, index: number) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-lg bg-secondary/10">
                    <img
                      src={image.node.url}
                      alt={`${product.title} ${index + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
                <p className="text-3xl font-bold text-primary mb-6">
                  {selectedVariant?.price.currencyCode} ${parseFloat(selectedVariant?.price.amount || 0).toFixed(2)}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {product.options.length > 0 && product.options[0].values.length > 1 && (
                <div className="space-y-4">
                  {product.options.map((option: any) => (
                    <div key={option.name}>
                      <label className="text-sm font-semibold mb-2 block">
                        {option.name}
                      </label>
                      <div className="flex gap-2 flex-wrap">
                        {option.values.map((value: string) => (
                          <Button
                            key={value}
                            variant={selectedVariant?.selectedOptions.some(
                              (opt: any) => opt.name === option.name && opt.value === value
                            ) ? "default" : "outline"}
                            onClick={() => {
                              const variant = product.variants.edges.find((v: any) =>
                                v.node.selectedOptions.some(
                                  (opt: any) => opt.name === option.name && opt.value === value
                                )
                              );
                              if (variant) setSelectedVariant(variant.node);
                            }}
                          >
                            {value}
                          </Button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <Button 
                onClick={handleAddToCart}
                size="lg"
                className="w-full"
                disabled={!selectedVariant?.availableForSale}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                {selectedVariant?.availableForSale ? "Agregar al Carrito" : "No Disponible"}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductoDetalle;
