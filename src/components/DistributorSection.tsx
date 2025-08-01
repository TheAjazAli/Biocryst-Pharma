import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Users, Building, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DistributorSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    country: "",
    region: "",
    businessType: "",
    yearsInBusiness: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.companyName || !formData.contactPerson || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Inquiry Submitted Successfully!",
      description: "Our business development team will contact you within 24 hours.",
    });

    // Reset form
    setFormData({
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      country: "",
      region: "",
      businessType: "",
      yearsInBusiness: "",
      message: ""
    });
  };

  const benefits = [
    {
      icon: MapPin,
      title: "Global Network",
      description: "Join our worldwide distribution network spanning 50+ countries"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "24/7 support team to help you succeed in your market"
    },
    {
      icon: Building,
      title: "Premium Products",
      description: "Access to our complete portfolio of high-quality pharmaceuticals"
    }
  ];

  return (
    <section id="distributor" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              <span className="text-primary">Distributor</span> Partnership Inquiry
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Partner with Biocryst Pharma to bring innovative pharmaceutical solutions 
              to your market. Join our global network of trusted distributors.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Benefits */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">Partnership Benefits</h3>
              
              {benefits.map((benefit, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-medical transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <div className="bg-primary/10 rounded-lg p-6 mt-8">
                <h4 className="text-lg font-semibold text-primary mb-3">Requirements</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Valid pharmaceutical distribution license</li>
                  <li>• Minimum 3 years industry experience</li>
                  <li>• Established distribution network</li>
                  <li>• Financial stability and references</li>
                  <li>• Commitment to quality standards</li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-medical animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-foreground">
                    Submit Your Inquiry
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="companyName">Company Name *</Label>
                        <Input
                          id="companyName"
                          placeholder="Your Company Name"
                          value={formData.companyName}
                          onChange={(e) => handleInputChange("companyName", e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="contactPerson">Contact Person *</Label>
                        <Input
                          id="contactPerson"
                          placeholder="Full Name"
                          value={formData.contactPerson}
                          onChange={(e) => handleInputChange("contactPerson", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
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
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Select onValueChange={(value) => handleInputChange("country", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="ca">Canada</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="de">Germany</SelectItem>
                            <SelectItem value="fr">France</SelectItem>
                            <SelectItem value="jp">Japan</SelectItem>
                            <SelectItem value="au">Australia</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="region">Region/State</Label>
                        <Input
                          id="region"
                          placeholder="Your Region or State"
                          value={formData.region}
                          onChange={(e) => handleInputChange("region", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="businessType">Business Type</Label>
                        <Select onValueChange={(value) => handleInputChange("businessType", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Business Type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="distributor">Pharmaceutical Distributor</SelectItem>
                            <SelectItem value="wholesaler">Wholesaler</SelectItem>
                            <SelectItem value="retailer">Retail Chain</SelectItem>
                            <SelectItem value="hospital">Hospital Group</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="yearsInBusiness">Years in Business</Label>
                        <Select onValueChange={(value) => handleInputChange("yearsInBusiness", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Experience" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-3">1-3 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="5-10">5-10 years</SelectItem>
                            <SelectItem value="10+">10+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your distribution network, target markets, and why you'd like to partner with Biocryst Pharma..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground py-6 text-lg font-semibold shadow-soft transition-all group"
                    >
                      <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      Submit Partnership Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DistributorSection;