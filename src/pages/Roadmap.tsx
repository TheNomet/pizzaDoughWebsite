import { useEffect } from "react";
import { ArrowLeft, Sparkles, Camera, Link as LinkIcon, Wheat, Layers, Scale, FlaskConical, Cloud, BarChart3, CheckCircle2, Circle } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface RoadmapFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  status: "planned" | "in-progress" | "completed";
  category: "ai" | "calculations" | "recipe" | "sync" | "analytics";
}

const roadmapFeatures: RoadmapFeature[] = [
  {
    id: "ai-recipe-creation",
    title: "AI Recipe Creation",
    description: "Take a picture of a recipe or paste a web link, and our AI will automatically import the recipe, extract ingredients, and create step-by-step instructions for you. No more manual data entry - just snap, scan, or share a link and start baking.",
    icon: <Sparkles className="h-6 w-6" />,
    status: "planned",
    category: "ai"
  },
  {
    id: "flour-w-value",
    title: "Flour W-Value (Strength)",
    description: "Calculate and track the W-value (strength) of your flour to understand its protein content and gluten development potential. This helps you choose the right flour for your recipe and adjust hydration levels accordingly.",
    icon: <Wheat className="h-6 w-6" />,
    status: "planned",
    category: "calculations"
  },
  {
    id: "multiple-flours",
    title: "Multiple Flour Types",
    description: "Create recipes using multiple flour types in the same dough. Mix different flours (e.g., bread flour, whole wheat, rye) with precise percentages and calculations for each type.",
    icon: <Layers className="h-6 w-6" />,
    status: "planned",
    category: "recipe"
  },
  {
    id: "multiple-ball-weights",
    title: "Multiple Ball Weights",
    description: "Specify different ball weights for the same recipe. Perfect for making pizzas of different sizes or sharing dough between multiple bakes. The calculator automatically adjusts all ingredient amounts proportionally.",
    icon: <Scale className="h-6 w-6" />,
    status: "planned",
    category: "recipe"
  },
  {
    id: "multiple-preferments",
    title: "Multiple Pre-ferments",
    description: "Use multiple pre-ferments in a single recipe (e.g., poolish + biga, or levain + poolish). The app calculates the correct yeast amounts and timing for each pre-ferment and the main dough, ensuring perfect fermentation.",
    icon: <FlaskConical className="h-6 w-6" />,
    status: "planned",
    category: "recipe"
  },
  {
    id: "cloud-sync",
    title: "Cloud Sync Across Devices",
    description: "Sync your recipes, calculations, and baking history across all your devices using secure cloud storage. Start a recipe on your iPhone, continue on your iPad, and never lose your data.",
    icon: <Cloud className="h-6 w-6" />,
    status: "planned",
    category: "sync"
  },
  {
    id: "baking-analytics",
    title: "Baking Analytics & Insights",
    description: "Track your baking performance over time with comprehensive analytics. See which recipes work best, identify patterns in your successful bakes, and get insights to improve your technique. Rate your results and learn from each bake.",
    icon: <BarChart3 className="h-6 w-6" />,
    status: "planned",
    category: "analytics"
  }
];

const categoryColors = {
  ai: "bg-purple-500/10 text-purple-600 border-purple-500/20",
  calculations: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  recipe: "bg-orange-500/10 text-orange-600 border-orange-500/20",
  sync: "bg-green-500/10 text-green-600 border-green-500/20",
  analytics: "bg-pink-500/10 text-pink-600 border-pink-500/20"
};

const categoryLabels = {
  ai: "AI Features",
  calculations: "Calculations",
  recipe: "Recipe Builder",
  sync: "Sync & Storage",
  analytics: "Analytics"
};

const Roadmap = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-5 w-5 text-green-600" />;
      case "in-progress":
        return <Circle className="h-5 w-5 text-blue-600 fill-blue-600" />;
      default:
        return <Circle className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      default:
        return "Planned";
    }
  };

  // Group features by category
  const featuresByCategory = roadmapFeatures.reduce((acc, feature) => {
    if (!acc[feature.category]) {
      acc[feature.category] = [];
    }
    acc[feature.category].push(feature);
    return acc;
  }, {} as Record<string, RoadmapFeature[]>);

  return (
    <div className="min-h-screen bg-background pt-16 md:pt-20">
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
                Product <span className="bg-gradient-hero bg-clip-text text-transparent">Roadmap</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Exciting features coming to Pizza&Dough
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're constantly working to improve Pizza&Dough and add new features based on your feedback. 
                Here's what's coming next to help you bake even better dough.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            
            {/* Legend */}
            <Card className="p-6 bg-card border">
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">Status:</span>
                </div>
                <div className="flex items-center gap-2">
                  <Circle className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Planned</span>
                </div>
                <div className="flex items-center gap-2">
                  <Circle className="h-4 w-4 text-blue-600 fill-blue-600" />
                  <span className="text-sm text-muted-foreground">In Progress</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-muted-foreground">Completed</span>
                </div>
              </div>
            </Card>

            {/* Features by Category */}
            {Object.entries(featuresByCategory).map(([category, features]) => (
              <div key={category} className="space-y-6">
                <div className="flex items-center gap-3">
                  <Badge className={`${categoryColors[category as keyof typeof categoryColors]} px-4 py-2 text-sm font-semibold`}>
                    {categoryLabels[category as keyof typeof categoryLabels]}
                  </Badge>
                  <div className="h-px flex-1 bg-border" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {features.map((feature) => (
                    <Card 
                      key={feature.id} 
                      className="p-6 bg-card border hover:shadow-lg transition-shadow group"
                    >
                      <div className="space-y-4">
                        {/* Header */}
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3 flex-1">
                            <div className={`p-2 rounded-lg bg-gradient-hero text-white group-hover:scale-110 transition-transform`}>
                              {feature.icon}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                {feature.title}
                              </h3>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {getStatusIcon(feature.status)}
                            <span className="text-xs text-muted-foreground hidden sm:inline">
                              {getStatusLabel(feature.status)}
                            </span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>

                        {/* Category Badge */}
                        <div className="pt-2">
                          <Badge 
                            variant="outline" 
                            className={`${categoryColors[feature.category]} text-xs`}
                          >
                            {categoryLabels[feature.category]}
                          </Badge>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}

            {/* Call to Action */}
            <Card className="p-8 bg-gradient-warm border text-center">
              <div className="space-y-4 max-w-2xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Have Feature Suggestions?
                </h3>
                <p className="text-muted-foreground">
                  We'd love to hear your ideas! Send us your feature requests and feedback.
                </p>
                <div className="pt-4">
                  <a 
                    href="mailto:pizzadough.app@gmail.com?subject=Feature Request"
                    className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
                  >
                    Send us your ideas
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Roadmap;

