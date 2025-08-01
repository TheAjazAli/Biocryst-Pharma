import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Linkedin,
  Twitter,
  Facebook,
  Instagram
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Why Choose Us", href: "#why-choose" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" }
  ];

  const businessLinks = [
    { label: "Distributor Inquiry", href: "#distributor" },
    { label: "Career Opportunities", href: "#" },
    { label: "Quality Assurance", href: "#" },
    { label: "Regulatory Affairs", href: "#" },
    { label: "Clinical Trials", href: "#" },
    { label: "News & Updates", href: "#" }
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Regulatory Information", href: "#" },
    { label: "Product Safety", href: "#" },
    { label: "Adverse Event Reporting", href: "#" },
    { label: "Accessibility", href: "#" }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">BP</span>
                </div>
                <span className="text-xl font-bold">Biocryst Pharma</span>
              </div>
              
              <p className="text-background/80 leading-relaxed">
                Leading pharmaceutical innovation to improve lives worldwide through 
                cutting-edge research and development of innovative medicines.
              </p>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-background/80">
                    <p>123 Biocryst Avenue</p>
                    <p>Boston, MA 02101, United States</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-background/80">+1 (555) 123-4567</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-background/80">info@biocrystpharma.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="h-auto p-0 text-background/80 hover:text-primary hover:bg-transparent justify-start"
                    onClick={() => scrollToSection(link.href)}
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Business */}
            <div>
              <h3 className="text-lg font-bold mb-6">Business</h3>
              <div className="space-y-3">
                {businessLinks.map((link, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="h-auto p-0 text-background/80 hover:text-accent hover:bg-transparent justify-start"
                    onClick={() => link.href.startsWith('#') ? scrollToSection(link.href) : null}
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Legal & Compliance */}
            <div>
              <h3 className="text-lg font-bold mb-6">Legal & Compliance</h3>
              <div className="space-y-3">
                {legalLinks.map((link, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="h-auto p-0 text-background/80 hover:text-background hover:bg-transparent justify-start"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Button>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-sm font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="icon"
                      className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <social.icon className="h-5 w-5" />
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-background/20" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-background/80 text-sm">
                © 2024 Biocryst Pharma. All rights reserved.
              </p>
              <p className="text-background/60 text-xs mt-1">
                Biocryst Pharma is a registered trademark. All product names are trademarks of their respective owners.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-background/80">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                FDA Approved
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                GMP Certified
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                ISO 9001:2015
              </span>
            </div>
          </div>
        </div>

        {/* Emergency Contact Bar */}
        <div className="bg-destructive/20 rounded-t-lg p-4 -mb-4">
          <div className="text-center">
            <p className="text-sm font-medium text-background">
              <strong>Medical Emergency Hotline:</strong> Available 24/7 at{" "}
              <a href="tel:+15551234570" className="text-accent hover:underline">
                +1 (555) 123-4570
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;