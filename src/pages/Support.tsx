import { useEffect } from "react";
import { Mail, HelpCircle, Bug, Lightbulb, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const Support = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header Section */}
      <section className="py-24 bg-gradient-warm relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Pizza&Dough <span className="bg-gradient-hero bg-clip-text text-transparent">Support</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Get help with your dough calculations and app features
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-warm relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto space-y-12">

            {/* Section header */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-hero rounded-2xl flex items-center justify-center shadow-soft">
                <HelpCircle className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Frequently Asked <span className="bg-gradient-hero bg-clip-text text-transparent">Questions</span>
              </h2>
            </div>

            {/* FAQ Accordion */}
            <Card className="p-8 bg-card border">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="yeast-calculation">
                  <AccordionTrigger>How does the yeast calculation work?</AccordionTrigger>
                  <AccordionContent>
                    DoughApp uses advanced algorithms for optimal yeast calculations, taking into account temperature, time, and dough characteristics to give you the perfect amount of yeast for your recipe.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="custom-recipes">
                  <AccordionTrigger>Can I save custom recipes?</AccordionTrigger>
                  <AccordionContent>
                    Yes! Premium users can save unlimited custom recipes with cloud sync. Your recipes will be available across all your devices.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="live-timers">
                  <AccordionTrigger>How do the live timers work?</AccordionTrigger>
                  <AccordionContent>
                    DoughApp uses Live Activities to show fermentation timers in your Dynamic Island and Lock Screen. You'll get notifications when it's time for the next step.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="dough-types">
                  <AccordionTrigger>What types of dough are supported?</AccordionTrigger>
                  <AccordionContent>
                    DoughApp supports pizza (Neapolitan, Roman, Contemporary), bread (Sourdough, Ciabatta, Baguette), sweet doughs (Brioche, Panettone), and tray baking (Focaccia, Pizza in Teglia).
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="pre-ferments">
                  <AccordionTrigger>How do I use pre-ferments?</AccordionTrigger>
                  <AccordionContent>
                    DoughApp supports poolish, biga, levain, and sponge pre-ferments. The app will automatically calculate the correct amounts and timing for your chosen pre-ferment.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="units">
                  <AccordionTrigger>Can I use different units (metric/imperial)?</AccordionTrigger>
                  <AccordionContent>
                    Yes! DoughApp supports both metric and imperial units. You can switch between them in the settings.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          </div>
        </div>
      </section>

      {/* Report Bug & Feature Requests Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="grid md:grid-cols-3 gap-8 justify-items-center">
              {/* Report Bug Card */}
              <Card className="p-8 bg-card border hover:shadow-feature transition-all group flex flex-col h-full w-full max-w-sm">
                <div className="flex flex-col h-full space-y-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform mx-auto">
                    <Bug className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-4 flex-grow">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors text-center">
                      Report a Bug
                    </h3>
                    <p className="text-muted-foreground text-center">
                      Found a bug? We'd love to fix it! Please email us with:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm text-center">
                      <li>Description of the issue</li>
                      <li>Steps to reproduce the problem</li>
                      <li>Your device model and iOS version</li>
                      <li>Screenshots if applicable</li>
                    </ul>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-2 hover:bg-secondary transition-colors mt-auto"
                    asChild
                  >
                    <a href="mailto:pizzadough.app@gmail.com?subject=Bug Report">
                      Report a Bug
                    </a>
                  </Button>
                </div>
              </Card>

              {/* Feature Requests Card */}
              <Card className="p-8 bg-card border hover:shadow-feature transition-all group flex flex-col h-full w-full max-w-sm">
                <div className="flex flex-col h-full space-y-6">
                  <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform mx-auto">
                    <Lightbulb className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-4 flex-grow">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors text-center">
                      Feature Requests
                    </h3>
                    <p className="text-muted-foreground text-center">
                      Have an idea for a new feature? We'd love to hear it! Email us with your suggestions.
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-2 hover:bg-secondary transition-colors mt-auto"
                    asChild
                  >
                    <a href="mailto:pizzadough.app@gmail.com?subject=Feature Request">
                      Suggest a Feature
                    </a>
                  </Button>
                </div>
              </Card>

              {/* Contact Us Card */}
              <Card className="p-8 bg-card border hover:shadow-feature transition-all group flex flex-col h-full w-full max-w-sm">
                <div className="flex flex-col h-full space-y-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform mx-auto">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-4 flex-grow">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors text-center">
                      Contact Us
                    </h3>
                    <p className="text-muted-foreground text-center">
                      Need help? Have questions? We're here for you!
                    </p>
                    <div className="text-center space-y-2">
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm">
                        <strong>Email:</strong>
                        <a 
                          href="mailto:pizzadough.app@gmail.com"
                          className="text-primary hover:underline font-semibold"
                        >
                          pizzadough.app@gmail.com
                        </a>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        <strong>Response Time:</strong> We typically respond within 24 hours
                      </p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-2 hover:bg-secondary transition-colors mt-auto"
                    asChild
                  >
                    <a href="mailto:pizzadough.app@gmail.com?subject=Support Request">
                      Send us an Email
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Support;

