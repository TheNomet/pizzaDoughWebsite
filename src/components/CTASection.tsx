import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12 animate-fade-in-up">
          {/* Headline */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Ready to Master <br />
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Perfect Dough?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Join thousands of bakers who've transformed their baking with Pizza&Dough - 
              achieving consistent, professional results every time.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://apps.apple.com/app/pizza-dough/id6753921204" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-90 transition-opacity inline-block"
            >
              <img 
                src="/iosdownload.png" 
                alt="Download on the App Store" 
                className="h-40 w-auto max-w-[200px]"
              />
            </a>
            
            <a 
              href="https://play.google.com/store/apps/details?id=com.pizzadough.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-90 transition-opacity inline-block"
            >
              <img 
                src="/androiddownload.png" 
                alt="Get it on Google Play" 
                className="h-40 w-auto max-w-[200px] scale-[1.15]"
              />
            </a>
            
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-10 py-7 border-2 hover:bg-secondary transition-colors group"
              asChild
            >
              <Link to="/support">
                <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Get Support
              </Link>
            </Button>
          </div>
          
          {/* Stats/Social proof */}
          <div className="grid md:grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                10,000+
              </div>
              <div className="text-sm text-muted-foreground">
                Active Bakers
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                50,000+
              </div>
              <div className="text-sm text-muted-foreground">
                Recipes Created
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                4.9★
              </div>
              <div className="text-sm text-muted-foreground">
                App Store Rating
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
