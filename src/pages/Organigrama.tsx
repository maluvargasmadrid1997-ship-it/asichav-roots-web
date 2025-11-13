import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Organigrama = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Organigrama
        </h1>
        <Card className="max-w-5xl mx-auto">
          <CardContent className="p-8">
            <div className="space-y-8">
              {/* Asamblea General */}
              <div className="text-center">
                <div className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg">
                  <h3 className="font-bold text-lg">Asamblea General</h3>
                  <p className="text-sm">Máximo órgano de decisión</p>
                </div>
              </div>

              {/* Junta Directiva */}
              <div className="flex justify-center">
                <div className="border-l-2 border-primary h-8"></div>
              </div>
              <div className="text-center">
                <div className="inline-block bg-secondary text-secondary-foreground px-8 py-4 rounded-lg">
                  <h3 className="font-bold text-lg">Junta Directiva</h3>
                  <p className="text-sm">Órgano ejecutivo</p>
                </div>
              </div>

              {/* Comités */}
              <div className="flex justify-center">
                <div className="border-l-2 border-primary h-8"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-accent text-accent-foreground px-6 py-4 rounded-lg">
                    <h4 className="font-semibold">Comité de Producción</h4>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-accent text-accent-foreground px-6 py-4 rounded-lg">
                    <h4 className="font-semibold">Comité de Comercialización</h4>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-accent text-accent-foreground px-6 py-4 rounded-lg">
                    <h4 className="font-semibold">Comité de Formación</h4>
                  </div>
                </div>
              </div>

              {/* Asociados */}
              <div className="flex justify-center">
                <div className="border-l-2 border-primary h-8"></div>
              </div>
              <div className="text-center">
                <div className="inline-block bg-muted text-muted-foreground px-8 py-4 rounded-lg border-2 border-primary">
                  <h3 className="font-bold text-lg">Asociados</h3>
                  <p className="text-sm">Miembros activos</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Organigrama;
