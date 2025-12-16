import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Index from "./pages/Index";
import Support from "./pages/Support";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Preview from "./pages/Preview";
import Roadmap from "./pages/Roadmap";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Handle GitHub Pages redirect format (/?/path -> /path)
const GitHubPagesRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if we're in the GitHub Pages redirect format
    if (location.search.startsWith('?/')) {
      const path = location.search.slice(2).replace(/~and~/g, '&').split('#')[0];
      const hash = location.hash;
      navigate(path + hash, { replace: true });
    }
  }, [location, navigate]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <GitHubPagesRedirect />
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/support" element={<Support />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/roadmap" element={<Roadmap />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
