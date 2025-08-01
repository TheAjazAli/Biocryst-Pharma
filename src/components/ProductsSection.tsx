import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Check } from "lucide-react";
import productsHero from "@/assets/products-hero.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "BioCryst-Pain Relief",
      category: "Analgesics",
      image: product1,
      description: "Advanced pain management formula with extended release technology for chronic pain conditions.",
      features: ["24-hour relief", "Minimal side effects", "Non-addictive formula"],
      dosage: "10mg - 20mg tablets",
    },
    {
      id: 2,
      name: "BioCryst-Cardio Plus",
      category: "Cardiovascular",
      image: product2,
      description: "Comprehensive cardiovascular support with proven efficacy in clinical trials.",
      features: ["Heart health support", "Blood pressure regulation", "Cholesterol management"],
      dosage: "Injectable 5ml vials",
    },
    {
      id: 3,
      name: "BioCryst-Immune Boost",
      category: "Immunology",
      image: product3,
      description: "Immune system enhancement therapy for patients with compromised immunity.",
      features: ["Enhanced immunity", "Rapid onset", "Long-lasting protection"],
      dosage: "Capsules 250mg",
    },
  ];

  const handleDownload = (productName: string) => {
    // Simulate PDF download
    const link = document.createElement('a');
    link.href = '#';
    link.download = `${productName.replace(/\s+/g, '-')}-info.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Products</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Discover our comprehensive range of pharmaceutical solutions, 
              each designed to meet specific therapeutic needs with excellence.
            </p>
            
            {/* Hero Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-medical mb-12">
              <img 
                src={productsHero} 
                alt="Pharmaceutical Products" 
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="overflow-hidden hover:shadow-floating transition-all duration-500 hover:-translate-y-2 animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {product.category}
                      </span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <CardTitle className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {product.name}
                  </CardTitle>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-muted/50 rounded-lg p-3">
                    <span className="text-sm font-medium text-foreground">Dosage: </span>
                    <span className="text-sm text-muted-foreground">{product.dosage}</span>
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <Button 
                    className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-soft transition-all group"
                    onClick={() => handleDownload(product.name)}
                  >
                    <Download className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                    Download Info
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 p-8 bg-gradient-primary rounded-2xl shadow-medical animate-fade-in">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Need More Information?
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Our medical team is ready to provide detailed product information 
              and answer any questions about our pharmaceutical solutions.
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Medical Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;