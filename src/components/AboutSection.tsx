import { Card, CardContent } from "@/components/ui/card";
import { Microscope, Heart, Globe, Lightbulb } from "lucide-react";
import aboutResearch from "@/assets/about-research.jpg";

const AboutSection = () => {
  const values = [
    {
      icon: Microscope,
      title: "Scientific Excellence",
      description: "Committed to rigorous research and evidence-based medicine",
    },
    {
      icon: Heart,
      title: "Patient-Centered",
      description: "Every decision is made with patient welfare as our priority",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Making healthcare accessible worldwide through innovation",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pioneering breakthrough therapies for tomorrow's challenges",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">Biocryst Pharma</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Founded with a vision to transform healthcare through innovative pharmaceutical solutions, 
              we are dedicated to improving lives across the globe.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="animate-scale-in">
              <img 
                src={aboutResearch} 
                alt="Research Facility" 
                className="w-full rounded-2xl shadow-medical"
              />
            </div>

            {/* Content */}
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-3xl font-bold text-foreground">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Biocryst Pharma, we strive to discover, develop, and deliver innovative medicines 
                that address unmet medical needs. Our commitment to scientific excellence drives us 
                to push the boundaries of what's possible in pharmaceutical research.
              </p>
              
              <h3 className="text-3xl font-bold text-foreground pt-6">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be a global leader in pharmaceutical innovation, creating breakthrough therapies 
                that transform patient outcomes and improve quality of life for millions worldwide.
              </p>

              <div className="bg-primary/10 rounded-lg p-6 mt-8">
                <h4 className="text-xl font-semibold text-primary mb-3">Quality Commitment</h4>
                <p className="text-muted-foreground">
                  Every product undergoes rigorous testing and meets the highest international 
                  standards for safety, efficacy, and quality assurance.
                </p>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-medical transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;