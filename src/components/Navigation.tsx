import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Home", href: "/", type: "page" },
    { label: "About", href: "/about", type: "page" },
    { label: "Products", href: "#products", type: "section" },
    { label: "Testimonials", href: "#testimonials", type: "section" },
    { label: "Why Choose Us", href: "#why-choose", type: "section" },
    { label: "Distributor Inquiry", href: "#distributor", type: "section" },
    { label: "FAQ", href: "#faq", type: "section" },
    { label: "Contact", href: "#contact", type: "section" },
  ];

  const handleNavigation = (href: string, type: string) => {
    if (type === "page") {
      navigate(href);
    } else {
      // If we're not on the home page, navigate to home first
      if (location.pathname !== "/") {
        navigate("/" + href);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">BP</span>
            </div>
            <span className="text-xl font-bold text-primary">Biocryst Pharma</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className="text-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
                onClick={() => handleNavigation(item.href, item.type)}
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-medical animate-fade-in">
            <div className="py-4 px-4 space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  className="w-full justify-start text-foreground hover:text-primary hover:bg-primary/10"
                  onClick={() => handleNavigation(item.href, item.type)}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;