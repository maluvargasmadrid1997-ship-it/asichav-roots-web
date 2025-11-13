import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Sprout, Tractor, Leaf, Droplets, Mountain, Users, FolderKanban } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Sprout,
      title: "Fertilizante Orgánico",
      description: "Productos naturales para un suelo saludable"
    },
    {
      icon: Tractor,
      title: "Mecanización Agrícola",
      description: "Tecnología moderna para la agricultura"
    },
    {
      icon: Leaf,
      title: "Vegetales Orgánicos",
      description: "Cultivos libres de químicos dañinos"
    },
    {
      icon: Droplets,
      title: "Gestión del Agua",
      description: "Uso eficiente y sostenible del recurso hídrico"
    },
    {
      icon: Mountain,
      title: "Suelo Puro Fabricado",
      description: "Sustrato de alta calidad para cultivos"
    }
  ];

const crops = [
  { name: "Cacao", image: "🍫" },       // Representado por chocolate
  { name: "Aguacate", image: "🥑" },    // Aguacate tiene emoji directo
  { name: "Yuca", image: "🌱" },        // No hay emoji específico, se usa brote
  { name: "Ñame", image: "🥔" },        // Similar a papa, se mantiene
  { name: "Maíz", image: "🌽" },        // Emoji directo
  { name: "Plátano", image: "🍌" }
];


  const directiva = [
    { cargo: "Presidente", nombre: "Juan Pérez" },
    { cargo: "Vicepresidente", nombre: "María González" },
    { cargo: "Secretario", nombre: "Carlos Ramírez" },
    { cargo: "Tesorero", nombre: "Ana Martínez" },
  ];

  const proyectos = [
    {
      titulo: "Agricultura Sostenible 2024",
      descripcion: "Implementación de técnicas de agricultura sostenible en 100 hectáreas"
    },
    {
      titulo: "Sistemas de Riego",
      descripcion: "Instalación de sistemas de riego por goteo para optimizar el uso del agua"
    },
    {
      titulo: "Capacitación Campesina",
      descripcion: "Programa de formación para agricultores en nuevas técnicas de cultivo"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Carousel */}
      <section className="bg-muted py-8">
        <div className="container mx-auto px-4">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <div className="relative h-[400px] bg-primary/20 rounded-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
                      Bienvenidos a ASICHAV
                    </h1>
                    <p className="text-xl text-muted-foreground">
                      Asociación Campesina por un futuro sostenible
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative h-[400px] bg-secondary/20 rounded-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
                      Agricultura Orgánica
                    </h2>
                    <p className="text-xl text-muted-foreground">
                      Comprometidos con el medio ambiente
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative h-[400px] bg-accent/20 rounded-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">
                      Desarrollo Rural
                    </h2>
                    <p className="text-xl text-muted-foreground">
                      Impulsando las comunidades campesinas
                    </p>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Características */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Nuestras Características
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold mb-2 text-card-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Alimentos que Cultivamos */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Alimentos que Cultivamos
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {crops.map((crop, index) => (
              <Card key={index} className="hover:scale-105 transition-transform">
                <CardContent className="p-6 text-center">
                  <div className="text-6xl mb-3">{crop.image}</div>
                  <h3 className="font-semibold text-card-foreground">{crop.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Junta Directiva */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Users className="h-16 w-16 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Junta Directiva
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {directiva.map((miembro, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-card-foreground">{miembro.cargo}</h3>
                  <p className="text-muted-foreground">{miembro.nombre}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <FolderKanban className="h-16 w-16 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Nuestros Proyectos
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {proyectos.map((proyecto, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-card-foreground">{proyecto.titulo}</h3>
                  <p className="text-muted-foreground mb-4">{proyecto.descripcion}</p>
                  <Button variant="outline" className="w-full">
                    Ver Más
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
