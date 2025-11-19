import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import ModesSection from "@/components/ModesSection";
import FeaturesSection from "@/components/FeaturesSection";
import AppShowcase from "@/components/AppShowcase";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <WhySection />
      <AppShowcase />
      <ModesSection />
      <FeaturesSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
