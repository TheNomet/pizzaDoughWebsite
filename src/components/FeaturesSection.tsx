import { 
  Gauge, 
  Clock, 
  FlaskConical, 
  BookOpen, 
  TrendingUp, 
  PieChart, 
  Layers, 
  Thermometer 
} from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Clock,
    title: "Real-Time Fermentation Timeline & Timers",
    description: "Never miss a step with live activity timers that guide you through every stage of fermentation",
    gradient: "from-pizza-orange to-golden",
  },
  {
    icon: Thermometer,
    title: "Temperature-Based Timing",
    description: "Smart fermentation timing that automatically adapts to your environment - no more guessing, just perfect timing",
    gradient: "from-accent to-pizza-orange",
  },
  {
    icon: TrendingUp,
    title: "Fine Tune Your Yeast",
    description: "Need more rise? Perfect your fermentation with precise control over raising conditions - get exactly the dough you want",
    gradient: "from-pizza-orange to-pizza-red",
  },
  {
    icon: Gauge,
    title: "Two Modes for Every Baker",
    description: "Jump in with Basic mode: set your amounts and start baking instantly. Or dive deep with Advanced mode: experiment and craft your own recipes with complete control",
    gradient: "from-pizza-red to-pizza-orange",
  },
  {
    icon: FlaskConical,
    title: "Science-Backed Calculations",
    description: "Advanced yeast and preferment calculations powered by scientific models and real-world empirical data for guaranteed accuracy",
    gradient: "from-pizza-red to-accent",
  },
  {
    icon: BookOpen,
    title: "Save Your Own Recipes",
    description: "Build your personal recipe collection with unlimited custom recipes that sync seamlessly across all your devices",
    gradient: "from-accent to-golden",
  },
  {
    icon: PieChart,
    title: "Precision Baker's Percentage",
    description: "Master professional techniques with visual breakdowns and calculations that ensure consistent, perfect results",
    gradient: "from-golden to-accent",
  },
  {
    icon: Layers,
    title: "Comprehensive Recipe Support",
    description: "From Neapolitan pizza to sourdough bread, brioche to focaccia - every baked good you love, all in one powerful app",
    gradient: "from-pizza-red to-pizza-orange",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Section header */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              Powerful Features, <span className="bg-gradient-hero bg-clip-text text-transparent">Perfect Results</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to transform from home baker to artisan professional
            </p>
          </div>
          
          {/* Features grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isLastTwo = index >= features.length - 2;
              return (
                <Card 
                  key={index}
                  className={`p-6 hover:shadow-feature transition-all duration-300 group bg-card border animate-fade-in-up ${
                    isLastTwo ? 'lg:hidden' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
          {/* Centered wrapper for last two cards on large screens */}
          <div className="hidden lg:flex lg:justify-center lg:gap-8">
            {features.slice(-2).map((feature, index) => {
              const Icon = feature.icon;
              const actualIndex = features.length - 2 + index;
              return (
                <Card 
                  key={actualIndex}
                  className="p-6 hover:shadow-feature transition-all duration-300 group bg-card border animate-fade-in-up lg:max-w-sm"
                  style={{ animationDelay: `${actualIndex * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
