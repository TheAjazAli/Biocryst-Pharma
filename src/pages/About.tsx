import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Microscope, Heart, Globe, Lightbulb, Users, Award, Shield, TrendingUp } from "lucide-react";
import aboutResearch from "@/assets/about-research.jpg";
import heroLab from "@/assets/hero-lab.jpg";

const About = () => {
  const values = [
    {
      icon: Microscope,
      title: "Scientific Excellence",
      description: "Committed to rigorous research and evidence-based medicine with cutting-edge technology",
    },
    {
      icon: Heart,
      title: "Patient-Centered",
      description: "Every decision is made with patient welfare as our priority, ensuring safe and effective treatments",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Making healthcare accessible worldwide through innovation and strategic partnerships",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pioneering breakthrough therapies for tomorrow's challenges with advanced research",
    },
  ];

  const achievements = [
    {
      icon: Users,
      number: "500+",
      title: "Research Scientists",
      description: "World-class team of researchers and medical professionals",
    },
    {
      icon: Award,
      number: "50+",
      title: "Patents Awarded",
      description: "Innovative pharmaceutical solutions and breakthrough discoveries",
    },
    {
      icon: Shield,
      number: "25+",
      title: "Years Experience",
      description: "Decades of expertise in pharmaceutical development and manufacturing",
    },
    {
      icon: TrendingUp,
      number: "100+",
      title: "Countries Served",
      description: "Global reach with medicines distributed worldwide",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              About <span className="text-accent">Biocryst Pharma</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed animate-fade-in">
              Transforming healthcare through innovative pharmaceutical solutions since 1999
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="animate-scale-in">
                <img 
                  src={aboutResearch} 
                  alt="Research Facility" 
                  className="w-full rounded-2xl shadow-medical"
                />
              </div>
              
              <div className="space-y-8 animate-fade-in">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Mission</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    At Biocryst Pharma, we strive to discover, develop, and deliver innovative medicines 
                    that address unmet medical needs. Our commitment to scientific excellence drives us 
                    to push the boundaries of what's possible in pharmaceutical research, ensuring that 
                    every breakthrough brings us closer to a healthier world.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Vision</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To be a global leader in pharmaceutical innovation, creating breakthrough therapies 
                    that transform patient outcomes and improve quality of life for millions worldwide. 
                    We envision a future where advanced medicine is accessible to all, regardless of 
                    geographic or economic barriers.
                  </p>
                </div>
              </div>
            </div>

            {/* Quality Commitment */}
            <div className="bg-primary/10 rounded-2xl p-8 mb-20">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-primary mb-4">Our Commitment to Quality</h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Every product undergoes rigorous testing and meets the highest international 
                  standards for safety, efficacy, and quality assurance. We maintain certifications 
                  from leading regulatory bodies worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                These principles guide every decision we make and every innovation we pursue
              </p>
            </div>
            
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

      {/* Achievements Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Achievements
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Measurable impact in advancing global healthcare
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{achievement.number}</div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">{achievement.title}</h4>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Excellence */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  Research Excellence
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our state-of-the-art research facilities house cutting-edge equipment and 
                  world-renowned scientists working on the next generation of pharmaceutical 
                  breakthroughs. We invest heavily in R&D to ensure we remain at the forefront 
                  of medical innovation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Advanced molecular research laboratories</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Clinical trial coordination centers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Quality assurance and testing facilities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Collaborative research partnerships</span>
                  </div>
                </div>
              </div>
              
              <div className="animate-scale-in">
                <img 
                  src={heroLab} 
                  alt="Research Laboratory" 
                  className="w-full rounded-2xl shadow-medical"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;