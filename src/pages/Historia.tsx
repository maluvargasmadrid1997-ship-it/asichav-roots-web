import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Historia = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Nuestra Historia
        </h1>
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="space-y-6 text-muted-foreground">
              <p>
                ASICHAV fue fundada en el año [año] con el objetivo de unir a los campesinos
                de la región y promover el desarrollo sostenible de la agricultura local.
              </p>
              <p>
                Desde nuestros inicios, hemos trabajado incansablemente por mejorar las
                condiciones de vida de nuestros asociados y sus familias, implementando
                prácticas agrícolas sostenibles y promoviendo la agricultura orgánica.
              </p>
              <p>
                A lo largo de los años, hemos logrado importantes avances en la mecanización
                agrícola, la gestión eficiente del agua, y la producción de alimentos
                orgánicos de alta calidad.
              </p>
              <p>
                Hoy en día, ASICHAV es reconocida como una organización líder en el sector
                agrícola de la región, comprometida con el desarrollo rural sostenible y
                el bienestar de las comunidades campesinas.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Historia;
