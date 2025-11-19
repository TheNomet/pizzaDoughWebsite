import { useEffect } from "react";
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import ModesSection from "@/components/ModesSection";
import FeaturesSection from "@/components/FeaturesSection";
import AppShowcase from "@/components/AppShowcase";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Handle hash-based scrolling when navigating from other pages
    if (window.location.hash === '#download-app') {
      setTimeout(() => {
        const element = document.getElementById('download-app');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

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
