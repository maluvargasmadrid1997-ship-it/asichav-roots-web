import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Proyectos = () => {
  const proyectos = [
    {
      titulo: "Agricultura Sostenible 2024",
      estado: "En curso",
      descripcion: "Implementación de técnicas de agricultura sostenible en 100 hectáreas de cultivo, incluyendo rotación de cultivos, compostaje y control biológico de plagas.",
      objetivos: [
        "Mejorar la calidad del suelo",
        "Reducir el uso de químicos",
        "Aumentar la productividad"
      ],
      beneficiarios: "50 familias campesinas"
    },
    {
      titulo: "Sistemas de Riego Tecnificado",
      estado: "En curso",
      descripcion: "Instalación de sistemas de riego por goteo en las parcelas de los asociados para optimizar el uso del agua y mejorar la eficiencia del riego.",
      objetivos: [
        "Reducir el consumo de agua en 40%",
        "Mejorar la distribución del agua",
        "Aumentar la productividad de cultivos"
      ],
      beneficiarios: "35 familias campesinas"
    },
    {
      titulo: "Capacitación Campesina",
      estado: "Permanente",
      descripcion: "Programa continuo de formación para agricultores en nuevas técnicas de cultivo orgánico, gestión empresarial y buenas prácticas agrícolas.",
      objetivos: [
        "Fortalecer capacidades técnicas",
        "Mejorar gestión administrativa",
        "Promover asociatividad"
      ],
      beneficiarios: "Todos los asociados"
    },
    {
      titulo: "Producción de Fertilizante Orgánico",
      estado: "Completado",
      descripcion: "Establecimiento de una planta de producción de fertilizante orgánico a partir de residuos agrícolas y estiércol, reduciendo costos y mejorando la sostenibilidad.",
      objetivos: [
        "Reducir costos de producción",
        "Aprovechar residuos orgánicos",
        "Producir abono de calidad"
      ],
      beneficiarios: "Todos los asociados"
    }
  ];

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case "En curso":
        return "bg-primary";
      case "Completado":
        return "bg-secondary";
      case "Permanente":
        return "bg-accent";
      default:
        return "bg-muted";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Nuestros Proyectos
        </h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Conoce los proyectos que estamos desarrollando para fortalecer la agricultura sostenible
          y mejorar la calidad de vida de nuestras comunidades campesinas.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {proyectos.map((proyecto, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl">{proyecto.titulo}</CardTitle>
                  <Badge className={getEstadoColor(proyecto.estado)}>
                    {proyecto.estado}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{proyecto.descripcion}</p>
                
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Objetivos:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {proyecto.objetivos.map((objetivo, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>{objetivo}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-2 border-t">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Beneficiarios:</strong> {proyecto.beneficiarios}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Proyectos;
