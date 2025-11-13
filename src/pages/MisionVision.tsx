import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye } from "lucide-react";

const MisionVision = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Misión y Visión
        </h1>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Target className="h-10 w-10 text-primary" />
                <CardTitle className="text-2xl">Misión</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Promover el desarrollo sostenible de la agricultura en nuestra región,
                mediante la implementación de prácticas agrícolas orgánicas y tecnologías
                apropiadas, fortaleciendo las capacidades de nuestros asociados y
                contribuyendo a la seguridad alimentaria y el bienestar de las comunidades
                campesinas.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Eye className="h-10 w-10 text-primary" />
                <CardTitle className="text-2xl">Visión</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Ser reconocidos como la organización campesina líder en agricultura
                sostenible y orgánica a nivel regional, siendo referente en innovación
                agrícola, gestión ambiental y desarrollo comunitario, mejorando
                constantemente la calidad de vida de nuestros asociados y sus familias.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-4xl mx-auto mt-12">
          <CardHeader>
            <CardTitle className="text-2xl">Nuestros Valores</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Sostenibilidad:</strong> Compromiso con prácticas agrícolas que preserven el medio ambiente</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Solidaridad:</strong> Apoyo mutuo entre los miembros de la asociación</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Innovación:</strong> Adopción de nuevas tecnologías y métodos de cultivo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Transparencia:</strong> Gestión honesta y clara de los recursos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Compromiso Social:</strong> Dedicación al bienestar de las comunidades rurales</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default MisionVision;
