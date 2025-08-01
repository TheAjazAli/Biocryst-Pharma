import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Award, 
  Clock, 
  Users, 
  Microscope, 
  Globe,
  Heart,
  CheckCircle
} from "lucide-react";

const WhyChooseSection = () => {
  const advantages = [
    {
      icon: Shield,
      title: "FDA Approved",
      description: "All our products meet stringent FDA regulations and international quality standards",
      color: "text-primary"
    },
    {
      icon: Award,
      title: "Award-Winning Research",
      description: "Recognized globally for breakthrough innovations in pharmaceutical development",
      color: "text-accent"
    },
    {
      icon: Clock,
      title: "25+ Years Experience",
      description: "Decades of expertise in pharmaceutical research, development, and manufacturing",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Leading scientists, researchers, and medical professionals driving innovation",
      color: "text-accent"
    },
    {
      icon: Microscope,
      title: "Advanced R&D",
      description: "State-of-the-art laboratories and cutting-edge research methodologies",
      color: "text-primary"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving healthcare providers and patients across 50+ countries worldwide",
      color: "text-accent"
    }
  ];

  const certifications = [
    "FDA Approved",
    "GMP Certified",
    "ISO 9001:2015",
    "WHO Prequalified",
    "ICH Guidelines Compliant",
    "Clinical Trial Certified"
  ];

  return (
    <section id="why-choose" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose <span className="text-primary">Biocryst Pharma</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our commitment to excellence, innovation, and patient safety makes us 
              the trusted choice for healthcare professionals worldwide.
            </p>
          </div>

          {/* Advantages Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {advantages.map((advantage, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-floating transition-all duration-500 hover:-translate-y-2 animate-scale-in border-0 shadow-soft"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <advantage.icon className={`h-8 w-8 text-primary-foreground`} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <CheckCircle className="h-4 w-4 text-accent-foreground" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {advantage.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="bg-gradient-subtle rounded-2xl p-8 md:p-12 mb-16 animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Trusted by Healthcare Leaders
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Our pharmaceutical solutions are trusted by leading healthcare institutions, 
                  regulatory bodies, and medical professionals around the world. We maintain 
                  the highest standards of quality, safety, and efficacy.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Heart className="h-6 w-6 text-accent mr-3" />
                    <span className="text-foreground font-medium">Patient-Centric Approach</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-6 w-6 text-primary mr-3" />
                    <span className="text-foreground font-medium">Uncompromising Safety Standards</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-6 w-6 text-accent mr-3" />
                    <span className="text-foreground font-medium">Industry Recognition</span>
                  </div>
                </div>
              </div>

              {/* Right Content - Certifications */}
              <div>
                <h4 className="text-2xl font-bold text-foreground mb-6">
                  Certifications & Compliance
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div 
                      key={index} 
                      className="bg-background rounded-lg p-4 text-center shadow-soft hover:shadow-medical transition-shadow group"
                    >
                      <CheckCircle className="h-6 w-6 text-accent mx-auto mb-2 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium text-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-gradient-primary rounded-2xl p-8 md:p-12 shadow-medical animate-fade-in">
            <h3 className="text-3xl font-bold text-primary-foreground mb-4">
              Ready to Partner with Excellence?
            </h3>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of healthcare professionals who trust Biocryst Pharma 
              for their pharmaceutical needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors shadow-soft"
                onClick={() => document.querySelector('#distributor')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Become a Distributor
              </button>
              <button 
                className="border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-colors"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;