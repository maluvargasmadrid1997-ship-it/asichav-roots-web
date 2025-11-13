import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sprout, Tractor, GraduationCap, Handshake, ShoppingCart, Droplets } from "lucide-react";

const Servicios = () => {
  const servicios = [
    {
      icon: Sprout,
      titulo: "Asesoría Técnica Agrícola",
      descripcion: "Acompañamiento técnico especializado en cultivos orgánicos, manejo de suelos y control integrado de plagas."
    },
    {
      icon: Tractor,
      titulo: "Mecanización Agrícola",
      descripcion: "Servicio de maquinaria agrícola para preparación de tierras, siembra y cosecha a precios preferenciales para asociados."
    },
    {
      icon: GraduationCap,
      titulo: "Capacitación y Formación",
      descripcion: "Programas de formación continua en agricultura sostenible, buenas prácticas agrícolas y gestión empresarial."
    },
    {
      icon: Handshake,
      titulo: "Comercialización Conjunta",
      descripcion: "Apoyo en la comercialización de productos agrícolas con mejores condiciones y acceso a nuevos mercados."
    },
    {
      icon: ShoppingCart,
      titulo: "Insumos Agrícolas",
      descripcion: "Venta de insumos orgánicos, semillas certificadas y herramientas agrícolas a precios competitivos."
    },
    {
      icon: Droplets,
      titulo: "Sistemas de Riego",
      descripcion: "Diseño, instalación y mantenimiento de sistemas de riego tecnificado para optimizar el uso del agua."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Nuestros Servicios
        </h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Ofrecemos una amplia gama de servicios para apoyar el desarrollo y fortalecimiento
          de la actividad agrícola de nuestros asociados.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {servicios.map((servicio, index) => {
            const Icon = servicio.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Icon className="h-12 w-12 text-primary mb-3" />
                  <CardTitle>{servicio.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{servicio.descripcion}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Servicios;
