import { Badge } from "@/components/ui/badge";

interface AppScreenshot {
  src: string;
  alt: string;
}

interface AppShowcaseProps {
  screenshots?: AppScreenshot[];
}

const AppShowcase = ({ screenshots = [] }: AppShowcaseProps) => {
  // Default placeholder screenshots if none provided
  const defaultScreenshots: AppScreenshot[] = screenshots.length > 0 
    ? screenshots 
    : [
        { src: "/placeholder-app-1.png", alt: "Pizza&Dough app interface - Recipe view" },
        { src: "/placeholder-app-2.png", alt: "Pizza&Dough app interface - Calculator view" },
        { src: "/placeholder-app-3.png", alt: "Pizza&Dough app interface - Timeline view" },
      ];

  return (
    <section id="download-app" className="py-5 bg-[#fbf8f6] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - App showcase image */}
          <div className="relative animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex justify-center">
              <div className="relative rounded-2xl overflow-hidden max-w-full w-full">
                <img
                  src="/app-showcase-1.png"
                  alt="Pizza&Dough app screenshots showing recipe calculator, timeline, and customization features"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
          
          {/* Right side - CTA content */}
          <div className="text-center lg:text-left space-y-12 animate-fade-in-up max-w-xl lg:max-w-none mx-auto lg:mx-0">
            <Badge className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 text-sm font-semibold">
              Backed by Science
            </Badge>
            {/* Headline */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Ready to Master <br />
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Perfect Dough?
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                The Only Calculator for All Your Baked Goods
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
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
            </div>
            
            {/* Stats/Social proof
            <div className="grid md:grid-cols-3 gap-8 pt-12">
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
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;

