import { Zap, Beaker } from "lucide-react";
import { Card } from "@/components/ui/card";

const ModesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section header */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              Two Modes for <span className="bg-gradient-hero bg-clip-text text-transparent">Every Baker</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you're just starting out or pushing the boundaries of baking innovation
            </p>
          </div>
          
          {/* Mode cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Basic Mode */}
            <Card className="p-8 hover:shadow-feature transition-all duration-300 group animate-fade-in-up bg-card border-2" style={{ animationDelay: "0.1s" }}>
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">Basic Mode</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Just set your amounts and size, then start baking immediately. 
                    <span className="block mt-2 font-semibold text-foreground">
                      No complexity, no guesswork - just perfect results, fast.
                    </span>
                  </p>
                </div>
                
                <div className="pt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Instant setup</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Perfect for beginners</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Guaranteed success</span>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Advanced Mode */}
            <Card className="p-8 hover:shadow-feature transition-all duration-300 group animate-fade-in-up bg-card border-2" style={{ animationDelay: "0.2s" }}>
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                  <Beaker className="h-8 w-8 text-white" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">Advanced Mode</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Unleash your creativity. Experiment freely and craft your own recipes with complete control over every parameter. 
                    <span className="block mt-2 font-semibold text-foreground">
                      Perfect for bakers who want to push boundaries and innovate.
                    </span>
                  </p>
                </div>
                
                <div className="pt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>Full parameter control</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>Unlimited experimentation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>Professional precision</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModesSection;
