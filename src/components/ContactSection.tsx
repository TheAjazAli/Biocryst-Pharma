import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Building,
  Globe,
  MessageSquare
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Headquarters",
      details: ["123 Biocryst Avenue", "Medical District", "Boston, MA 02101", "United States"],
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["Main: +1 (555) 123-4567", "Sales: +1 (555) 123-4568", "Support: +1 (555) 123-4569", "Emergency: +1 (555) 123-4570"],
      color: "text-accent"
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["info@biocrystpharma.com", "sales@biocrystpharma.com", "support@biocrystpharma.com", "partnerships@biocrystpharma.com"],
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed", "Emergency Support: 24/7"],
      color: "text-accent"
    }
  ];

  const offices = [
    {
      location: "North America",
      address: "123 Biocryst Avenue, Boston, MA 02101",
      phone: "+1 (555) 123-4567",
      email: "americas@biocrystpharma.com"
    },
    {
      location: "Europe",
      address: "456 Medical Center, London, UK SW1A 1AA",
      phone: "+44 20 7123 4567",
      email: "europe@biocrystpharma.com"
    },
    {
      location: "Asia Pacific",
      address: "789 Healthcare Plaza, Singapore 018989",
      phone: "+65 6123 4567",
      email: "apac@biocrystpharma.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Contact our expert team for product information, partnership opportunities, 
              or any questions about our pharmaceutical solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-medical animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-foreground flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 mr-2 text-primary" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="Message subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="How can we help you?"
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground py-6 text-lg font-semibold shadow-soft transition-all group"
                    >
                      <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-medical transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">{info.title}</h4>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground text-sm">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Google Map Embed */}
          <Card className="mb-16 animate-fade-in">
            <CardContent className="p-0">
              <div className="h-64 md:h-80 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120726.33744706571!2d73.03195504429985!3d18.988938318600884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e83e1f23f23d%3A0xe3a106c431e3fd0a!2sPanvel%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1754061447856!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Biocryst Pharma Headquarters Location"
                  className="rounded-lg"
                ></iframe>
              </div>
            </CardContent>
          </Card>

          {/* Global Offices */}
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-foreground text-center mb-12">
              Our <span className="text-primary">Global Offices</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <Card 
                  key={index} 
                  className="text-center hover:shadow-medical transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <Globe className="h-8 w-8 text-primary-foreground" />
                    </div>
                    
                    <h4 className="text-xl font-bold text-foreground mb-4">{office.location}</h4>
                    
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="flex items-start justify-center">
                        <Building className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{office.address}</span>
                      </div>
                      
                      <div className="flex items-center justify-center">
                        <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{office.phone}</span>
                      </div>
                      
                      <div className="flex items-center justify-center">
                        <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{office.email}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
