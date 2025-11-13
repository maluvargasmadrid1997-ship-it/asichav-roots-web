import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import logo from "@/assets/asichav-logo.png";
import { CartDrawer } from "@/components/CartDrawer";

const Navbar = () => {
  const menuItems = [
    { name: "Inicio", path: "/" },
    { name: "Historia", path: "/historia" },
    { name: "Misión y Visión", path: "/mision-vision" },
    { name: "Organigrama", path: "/organigrama" },
    { name: "Proyectos", path: "/proyectos" },
    { name: "Servicios", path: "/servicios" },
    { name: "Productos", path: "/productos" },
    { name: "Galería", path: "/galeria" },
    { name: "Videos", path: "/videos" },
    { name: "Blog", path: "/blog" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 rounded">
            <img src={logo} alt="ASICHAV Logo" className="h-12 w-12 object-contain rounded-full" />
            <span className="text-2xl font-bold">ASICHAV</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="hover:text-accent transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <CartDrawer />
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-lg hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
