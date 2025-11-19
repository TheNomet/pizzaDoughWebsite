import { Sparkles, Pizza, ChefHat } from "lucide-react";
import crownIcon from "@/assets/crown-icon.png";

const WhySection = () => {
  return (
    <section id="learn-more" className="py-24 bg-gradient-warm relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12 animate-fade-in-up">
          {/* Section header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <img src={crownIcon} alt="Crown icon" className="h-24 w-24" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Pizza&Dough
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              One App to <span className="bg-gradient-hero bg-clip-text text-transparent">Bake Them All</span>
            </h2>
          </div>
          
          {/* First message */}
          <div className="text-lg md:text-xl text-muted-foreground">
            <p className="leading-relaxed">
              Go beyond a simple calculator, <span className="font-semibold text-foreground">take control of your baking.</span>
            </p>
          </div>
          
          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="space-y-3 group hover:scale-105 transition-transform">
              <div className="w-16 h-16 mx-auto bg-gradient-hero rounded-2xl flex items-center justify-center shadow-soft">
                <Pizza className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg">Perfect Pizza</h3>
              <p className="text-sm text-muted-foreground">Every style, every time</p>
            </div>
            
            <div className="space-y-3 group hover:scale-105 transition-transform">
              <div className="w-16 h-16 mx-auto bg-gradient-accent rounded-2xl flex items-center justify-center shadow-soft">
                <ChefHat className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg">Professional Control</h3>
              <p className="text-sm text-muted-foreground">Science-backed precision</p>
            </div>
            
            <div className="space-y-3 group hover:scale-105 transition-transform">
              <div className="w-16 h-16 mx-auto bg-gradient-hero rounded-2xl flex items-center justify-center shadow-soft">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg">Consistent Results</h3>
              <p className="text-sm text-muted-foreground">No more guesswork</p>
            </div>
          </div>
          
          {/* Main message */}
          <div className="text-lg md:text-xl text-muted-foreground pt-8">
            <p className="leading-relaxed">
              Everything you need to bake in one place. From preferment optimisation to pizza, 
              tray recipes, sweet doughs, and bread - we ensure you get <span className="font-semibold text-foreground">perfect results every single time.</span>
            </p>
          </div>
          
          {/* Closing statement */}
          <div className="pt-8">
            <hr className="border-t border-muted-foreground/20 my-8 max-w-md mx-auto" />
            <p className="text-2xl md:text-2xl font-medium italic text-muted-foreground leading-relaxed">
              You deserve to eat good pizza, and we help you deliver.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
