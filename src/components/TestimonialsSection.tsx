import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote, Stethoscope, Shield, Award, Users } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Mitchell",
      role: "Chief Medical Officer",
      organization: "Metropolitan Health System",
      content: "Biocryst Pharma's innovative solutions have transformed our patient care. The quality and efficacy of their products consistently exceed our expectations.",
      rating: 5,
      avatar: "SM"
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      role: "Director of Cardiology",
      organization: "University Medical Center",
      content: "We've seen remarkable improvements in patient outcomes since incorporating Biocryst's cardiovascular medications. Their research-backed approach is impressive.",
      rating: 5,
      avatar: "MC"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      role: "Pharmacy Director",
      organization: "Regional Medical Group",
      content: "The partnership with Biocryst Pharma has been exceptional. Their commitment to quality and patient safety aligns perfectly with our values.",
      rating: 5,
      avatar: "ER"
    },
    {
      id: 4,
      name: "Dr. James Thompson",
      role: "Pain Management Specialist",
      organization: "Advanced Pain Care Center",
      content: "Biocryst's pain relief formulations have provided our patients with effective, long-lasting relief. The non-addictive properties are particularly valuable.",
      rating: 5,
      avatar: "JT"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Count up hooks for stats
  const satisfactionCount = useCountUp({ end: 98, duration: 2500 });
  const partnersCount = useCountUp({ end: 500, duration: 3000, delay: 200 });
  const patientsCount = useCountUp({ end: 50, duration: 2800, delay: 400 });
  const countriesCount = useCountUp({ end: 25, duration: 2200, delay: 600 });

  return (
    <section id="testimonials" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Healthcare Professionals <span className="text-primary">Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Trusted by medical professionals worldwide, our pharmaceutical solutions 
              consistently deliver exceptional results and improve patient outcomes.
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div 
            className="relative" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <Card className="max-w-4xl mx-auto shadow-medical">
                      <CardContent className="p-8 md:p-12">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                          {/* Avatar */}
                          <div className="flex-shrink-0">
                            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center">
                              <span className="text-2xl font-bold text-primary-foreground">
                                {testimonial.avatar}
                              </span>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1 text-center md:text-left">
                            <Quote className="h-8 w-8 text-primary mb-4 mx-auto md:mx-0" />
                            
                            <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                              "{testimonial.content}"
                            </blockquote>

                            {/* Rating */}
                            <div className="flex justify-center md:justify-start mb-4">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 text-accent fill-current" />
                              ))}
                            </div>

                            {/* Author Info */}
                            <div>
                              <h4 className="text-lg font-semibold text-foreground">{testimonial.name}</h4>
                              <p className="text-primary font-medium">{testimonial.role}</p>
                              <p className="text-muted-foreground text-sm">{testimonial.organization}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background shadow-soft"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background shadow-soft"
              onClick={nextSlide}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary w-8' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

          {/* Stats with count animation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
            <div className="text-center animate-scale-in group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 ref={satisfactionCount.ref} className="text-3xl font-bold text-primary mb-2 font-sf-pro">
                {satisfactionCount.count}%
              </h3>
              <p className="text-muted-foreground font-medium">Satisfaction Rate</p>
            </div>
            <div className="text-center animate-scale-in group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 ref={partnersCount.ref} className="text-3xl font-bold text-primary mb-2 font-sf-pro">
                {partnersCount.count}+
              </h3>
              <p className="text-muted-foreground font-medium">Healthcare Partners</p>
            </div>
            <div className="text-center animate-scale-in group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 ref={patientsCount.ref} className="text-3xl font-bold text-primary mb-2 font-sf-pro">
                {patientsCount.count}M+
              </h3>
              <p className="text-muted-foreground font-medium">Patients Served</p>
            </div>
            <div className="text-center animate-scale-in group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 ref={countriesCount.ref} className="text-3xl font-bold text-primary mb-2 font-sf-pro">
                {countriesCount.count}+
              </h3>
              <p className="text-muted-foreground font-medium">Countries Reached</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;