import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle, MessageCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      category: "General Information",
      questions: [
        {
          question: "What is Biocryst Pharma?",
          answer: "Biocryst Pharma is a leading pharmaceutical company dedicated to developing innovative medicines that address unmet medical needs. We focus on research, development, and manufacturing of high-quality pharmaceutical products for various therapeutic areas."
        },
        {
          question: "Where are your products manufactured?",
          answer: "Our products are manufactured in state-of-the-art facilities that comply with FDA, GMP, and international quality standards. We have manufacturing partnerships across multiple countries to ensure global supply chain reliability."
        },
        {
          question: "Are your products FDA approved?",
          answer: "Yes, all our marketed products have received appropriate regulatory approvals including FDA approval where applicable. We maintain strict compliance with all regulatory requirements in the markets where we operate."
        }
      ]
    },
    {
      category: "Products & Safety",
      questions: [
        {
          question: "How do I know if a Biocryst product is right for me?",
          answer: "Our products are prescription medications that should only be used under the guidance of a qualified healthcare professional. Please consult with your doctor or pharmacist to determine if any of our products are appropriate for your specific condition."
        },
        {
          question: "What safety measures are in place for your products?",
          answer: "We implement comprehensive safety protocols including rigorous clinical trials, post-market surveillance, adverse event monitoring, and continuous quality assurance. All our products undergo extensive testing before market approval."
        },
        {
          question: "How should I store Biocryst pharmaceutical products?",
          answer: "Storage instructions vary by product and are clearly indicated on each package label. Generally, most products should be stored at room temperature, away from moisture and direct sunlight. Always follow the specific storage instructions provided."
        }
      ]
    },
    {
      category: "Distribution & Partnership",
      questions: [
        {
          question: "How can I become a distributor for Biocryst Pharma?",
          answer: "We welcome qualified distributors to join our global network. Requirements include valid pharmaceutical distribution licenses, industry experience, established distribution networks, and commitment to our quality standards. Please fill out our distributor inquiry form to begin the process."
        },
        {
          question: "What support do you provide to distributors?",
          answer: "We provide comprehensive support including product training, marketing materials, technical assistance, regulatory guidance, and dedicated account management. Our goal is to ensure our partners have everything needed for success."
        },
        {
          question: "In which countries are your products available?",
          answer: "Our products are available in over 50 countries worldwide. Availability varies by product and regulatory approval status in each market. Contact us to learn about availability in your specific region."
        }
      ]
    },
    {
      category: "Quality & Compliance",
      questions: [
        {
          question: "What quality certifications does Biocryst Pharma hold?",
          answer: "We hold multiple quality certifications including FDA approval, GMP certification, ISO 9001:2015, WHO prequalification, and ICH guidelines compliance. Our facilities undergo regular inspections by regulatory authorities."
        },
        {
          question: "How do you ensure product quality throughout the supply chain?",
          answer: "We maintain cold chain integrity, implement serialization and track-and-trace systems, conduct regular quality audits, and work only with certified logistics partners. Quality control checkpoints are established at every stage of the supply chain."
        }
      ]
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our products, services, and partnership opportunities.
            </p>
          </div>

          {/* FAQ Content */}
          <div className="space-y-8">
            {faqs.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="shadow-soft animate-scale-in" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
                      <HelpCircle className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{category.category}</h3>
                  </div>

                  <Accordion type="single" collapsible className="space-y-2">
                    {category.questions.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`${categoryIndex}-${index}`}
                        className="border border-border rounded-lg px-4 hover:shadow-soft transition-shadow"
                      >
                        <AccordionTrigger className="text-left hover:no-underline py-4">
                          <span className="text-lg font-medium text-foreground pr-4">
                            {faq.question}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact CTA */}
          <Card className="mt-16 bg-gradient-primary shadow-medical animate-fade-in">
            <CardContent className="p-8 text-center">
              <MessageCircle className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Still Have Questions?
              </h3>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Our expert team is here to help. Contact us for personalized assistance 
                with any questions about our products or services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors shadow-soft"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contact Support Team
                </button>
                <button 
                  className="border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-colors"
                  onClick={() => document.querySelector('#distributor')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Partnership Inquiry
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;