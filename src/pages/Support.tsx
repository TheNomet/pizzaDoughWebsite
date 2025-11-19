import { Mail, HelpCircle, Bug, Lightbulb, Info, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Support = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-secondary/30">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              🆘 DoughApp Support
            </h1>
            <p className="text-muted-foreground mt-2 text-lg">
              Get help with your dough calculations and app features
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Contact Section */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <CardTitle>📧 Contact Us</CardTitle>
              </div>
              <CardDescription>Get in Touch</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Need help? Have questions? We're here for you!
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <strong>Email:</strong>
                  <a 
                    href="mailto:pizzadough.app@gmail.com"
                    className="text-primary hover:underline"
                  >
                    pizzadough.app@gmail.com
                  </a>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Response Time:</strong> We typically respond within 24 hours
                </p>
              </div>
              <Button asChild className="mt-4">
                <a href="mailto:pizzadough.app@gmail.com?subject=Support Request">
                  Send us an Email
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary" />
                <CardTitle>❓ Frequently Asked Questions</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
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
            </CardContent>
          </Card>

          {/* Report Bug Section */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Bug className="h-5 w-5 text-primary" />
                <CardTitle>🐛 Report a Bug</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Found a bug? We'd love to fix it! Please email us at{" "}
                <a 
                  href="mailto:pizzadough.app@gmail.com?subject=Bug Report"
                  className="text-primary hover:underline"
                >
                  pizzadough.app@gmail.com
                </a>{" "}
                with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Description of the issue</li>
                <li>Steps to reproduce the problem</li>
                <li>Your device model and iOS version</li>
                <li>Screenshots if applicable</li>
              </ul>
              <Button variant="outline" asChild>
                <a href="mailto:pizzadough.app@gmail.com?subject=Bug Report">
                  Report a Bug
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Feature Requests Section */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                <CardTitle>💡 Feature Requests</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Have an idea for a new feature? We'd love to hear it! Email us at{" "}
                <a 
                  href="mailto:pizzadough.app@gmail.com?subject=Feature Request"
                  className="text-primary hover:underline"
                >
                  pizzadough.app@gmail.com
                </a>{" "}
                with your suggestions.
              </p>
              <Button variant="outline" asChild>
                <a href="mailto:pizzadough.app@gmail.com?subject=Feature Request">
                  Suggest a Feature
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* App Information Section */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <CardTitle>📱 App Information</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>App Name:</strong> DoughApp (Pizza&Dough)
                </div>
                <div>
                  <strong>Version:</strong> 1.0
                </div>
                <div>
                  <strong>Developer:</strong> Pizza&Dough Team
                </div>
                <div>
                  <strong>Bundle ID:</strong> com.pizzadough.app
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Support;

