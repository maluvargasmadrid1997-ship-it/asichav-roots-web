import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Galeria = () => {
  const imagenes = [
    { titulo: "Cultivo de Tomate", categoria: "Cultivos" },
    { titulo: "Cosecha de Hortalizas", categoria: "Cosecha" },
    { titulo: "Sistema de Riego", categoria: "Infraestructura" },
    { titulo: "Capacitación", categoria: "Formación" },
    { titulo: "Maquinaria Agrícola", categoria: "Equipamiento" },
    { titulo: "Productos Orgánicos", categoria: "Productos" },
    { titulo: "Trabajo en Equipo", categoria: "Comunidad" },
    { titulo: "Plantación", categoria: "Cultivos" },
    { titulo: "Fertilizante Orgánico", categoria: "Insumos" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Galería de Imágenes
        </h1>
        <p className="text-center text-muted-foreground mb-12">
          Conoce nuestro trabajo a través de imágenes
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {imagenes.map((imagen, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center p-4">
                  <p className="text-6xl mb-2">📸</p>
                  <p className="font-semibold text-foreground">{imagen.titulo}</p>
                </div>
              </div>
              <div className="p-4 bg-muted">
                <span className="text-sm text-muted-foreground">{imagen.categoria}</span>
              </div>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Galeria;
