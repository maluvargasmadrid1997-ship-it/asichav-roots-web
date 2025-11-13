import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";

const Blog = () => {
  const articulos = [
    {
      titulo: "Beneficios de la Agricultura Orgánica",
      autor: "María González",
      fecha: "15 Marzo 2024",
      categoria: "Sostenibilidad",
      extracto: "La agricultura orgánica no solo beneficia al medio ambiente, sino que también produce alimentos más saludables y nutritivos..."
    },
    {
      titulo: "Cómo Implementar un Sistema de Riego Eficiente",
      autor: "Carlos Ramírez",
      fecha: "10 Marzo 2024",
      categoria: "Tecnología",
      extracto: "El uso eficiente del agua es crucial para la agricultura moderna. Aquí te mostramos las mejores prácticas..."
    },
    {
      titulo: "La Importancia del Compostaje",
      autor: "Ana Martínez",
      fecha: "5 Marzo 2024",
      categoria: "Suelos",
      extracto: "El compostaje es una técnica fundamental para mejorar la fertilidad del suelo de manera natural y sostenible..."
    },
    {
      titulo: "Rotación de Cultivos: Guía Práctica",
      autor: "Juan Pérez",
      fecha: "28 Febrero 2024",
      categoria: "Técnicas",
      extracto: "La rotación de cultivos es esencial para mantener la salud del suelo y prevenir enfermedades..."
    },
    {
      titulo: "Control Natural de Plagas",
      autor: "María González",
      fecha: "20 Febrero 2024",
      categoria: "Manejo",
      extracto: "Existen múltiples alternativas naturales para controlar plagas sin usar químicos dañinos..."
    },
    {
      titulo: "El Futuro de la Agricultura Sostenible",
      autor: "Carlos Ramírez",
      fecha: "15 Febrero 2024",
      categoria: "Innovación",
      extracto: "Las nuevas tecnologías y prácticas agrícolas están transformando el sector hacia un modelo más sostenible..."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Blog ASICHAV
        </h1>
        <p className="text-center text-muted-foreground mb-12">
          Artículos y noticias sobre agricultura sostenible
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {articulos.map((articulo, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl">{articulo.titulo}</CardTitle>
                  <Badge variant="secondary">{articulo.categoria}</Badge>
                </div>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{articulo.autor}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{articulo.fecha}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{articulo.extracto}</p>
                <button className="text-primary hover:underline mt-4 font-semibold">
                  Leer más →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
