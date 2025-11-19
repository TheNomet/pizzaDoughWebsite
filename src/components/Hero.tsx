import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download } from "lucide-react";
import heroImage from "@/assets/hero-pizza.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      
      {/* Hero content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <Badge className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 text-sm font-semibold">
              Backed by Science
            </Badge>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Stop Guessing,
                </span>
                <br />
                <span className="text-foreground">Start Baking</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                The Only Calculator for All Your Baked Goods
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-hero hover:opacity-90 transition-opacity text-lg px-8 py-6 shadow-soft"
                asChild
              >
                <a href="https://apps.apple.com/app/pizza-dough/id6753921204" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Download on App Store
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 border-2 hover:bg-secondary transition-colors"
                asChild
              >
                <a href="#learn-more" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('learn-more')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Learn More
                </a>
              </Button>
            </div>
          </div>
          
          {/* Right column - Hero image */}
          <div className="relative animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-feature">
              <img 
                src={heroImage} 
                alt="Artisan pizza dough being crafted" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Decorative gradient overlay */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-accent opacity-20 blur-3xl rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
