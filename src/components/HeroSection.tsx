import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Award } from "lucide-react";
import heroLab from "@/assets/hero-lab.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroLab} 
          alt="Biocryst Pharma Laboratory" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight">
            Advancing Healthcare
            <span className="block text-accent-light">Through Science</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Biocryst Pharma is dedicated to developing cutting-edge pharmaceutical solutions 
            that improve lives and transform healthcare worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-light text-accent-foreground px-8 py-6 text-lg font-semibold shadow-floating transition-bounce group"
              onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Products 
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-6 text-lg font-semibold transition-bounce"
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-primary-foreground/20">
            <div className="text-center space-y-2 animate-scale-in">
              <Shield className="h-8 w-8 text-accent-light mx-auto" />
              <h3 className="text-2xl font-bold text-primary-foreground">25+ Years</h3>
              <p className="text-primary-foreground/80">Industry Experience</p>
            </div>
            
            <div className="text-center space-y-2 animate-scale-in">
              <Users className="h-8 w-8 text-accent-light mx-auto" />
              <h3 className="text-2xl font-bold text-primary-foreground">50M+ Patients</h3>
              <p className="text-primary-foreground/80">Lives Improved</p>
            </div>
            
            <div className="text-center space-y-2 animate-scale-in">
              <Award className="h-8 w-8 text-accent-light mx-auto" />
              <h3 className="text-2xl font-bold text-primary-foreground">100+ Awards</h3>
              <p className="text-primary-foreground/80">Recognition Received</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
