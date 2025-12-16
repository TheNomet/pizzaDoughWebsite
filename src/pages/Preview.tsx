import { Pizza, ChefHat, Sparkles } from "lucide-react";
import crownIcon from "@/assets/crown-icon.png";

const featureCards = [
  {
    title: "Perfect Pizza",
    description: "Every style, every time",
    Icon: Pizza,
    gradient: "bg-gradient-hero",
  },
  {
    title: "Professional Control",
    description: "Science-backed precision",
    Icon: ChefHat,
    gradient: "bg-gradient-accent",
  },
  {
    title: "Consistent Results",
    description: "No more guesswork",
    Icon: Sparkles,
    gradient: "bg-gradient-hero",
  },
];

const Preview = () => (
  <section className="min-h-screen bg-[#fbf8f6] flex items-center justify-center px-6 pt-16 md:pt-20">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Brand + messaging */}
        <div className="space-y-6 text-center">
          <div className="inline-flex items-center gap-2 justify-center">
            <img src={crownIcon} alt="Pizza&Dough crown icon" className="h-20 w-20" />
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Pizza&Dough</h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold md:whitespace-nowrap">
              One App to <span className="bg-gradient-hero bg-clip-text text-transparent">Bake Them All</span>
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground">
            Go beyond a simple calculator, <span className="font-semibold text-foreground">take control of your baking.</span>
          </p>

          <div className="grid md:grid-cols-3 gap-6 pt-4">
            {featureCards.map(({ title, description, Icon, gradient }) => (
              <div key={title} className="space-y-3">
                <div className={`w-16 h-16 mx-auto ${gradient} rounded-2xl flex items-center justify-center shadow-soft`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{title}</h3>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4" />
        </div>

        {/* Right: App screenshots */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative max-w-2xl lg:max-w-[36rem] lg:translate-x-6">
            <img
              src="/app-showcase-1.png"
              alt="Pizza&Dough app screenshots showing recipe calculator, timeline, and customization features"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Preview;

