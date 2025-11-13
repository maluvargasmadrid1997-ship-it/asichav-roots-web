import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Videos = () => {
  const videos = [
    {
      titulo: "Técnicas de Cultivo Orgánico",
      descripcion: "Aprende las mejores prácticas para cultivos orgánicos",
      duracion: "15:30"
    },
    {
      titulo: "Sistema de Riego por Goteo",
      descripcion: "Instalación y mantenimiento de sistemas de riego",
      duracion: "12:45"
    },
    {
      titulo: "Producción de Compost",
      descripcion: "Cómo producir fertilizante orgánico de calidad",
      duracion: "10:20"
    },
    {
      titulo: "Testimonio de Asociados",
      descripcion: "Experiencias de éxito de nuestros miembros",
      duracion: "8:15"
    },
    {
      titulo: "Día de Campo ASICHAV",
      descripcion: "Resumen del evento anual de capacitación",
      duracion: "20:00"
    },
    {
      titulo: "Control Biológico de Plagas",
      descripcion: "Alternativas naturales para el control de plagas",
      duracion: "14:30"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Videos
        </h1>
        <p className="text-center text-muted-foreground mb-12">
          Material audiovisual sobre nuestras actividades y técnicas agrícolas
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">▶️</div>
                  <span className="text-sm bg-black/50 text-white px-3 py-1 rounded">
                    {video.duracion}
                  </span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{video.titulo}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{video.descripcion}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Videos;
