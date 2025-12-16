import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const element = document.getElementById('download-app');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#download-app');
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/roadmap", label: "Roadmap" },
    { to: "/support", label: "Support" },
    { to: "/privacy-policy", label: "Privacy Policy" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border"
          : "bg-background/80 backdrop-blur-sm"
      )}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="text-2xl md:text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
              Pizza&Dough
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative",
                  location.pathname === link.to
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
                {location.pathname === link.to && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-hero" />
                )}
              </Link>
            ))}
            <Button
              size="sm"
              className="bg-gradient-hero hover:opacity-90 transition-opacity text-white"
              asChild
            >
              <a
                href="#download-app"
                onClick={handleDownloadClick}
              >
                <Download className="mr-2 h-4 w-4" />
                Download
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    "px-4 py-2 text-base font-medium transition-colors",
                    location.pathname === link.to
                      ? "text-primary bg-accent/50"
                      : "text-muted-foreground hover:text-primary hover:bg-accent/30"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button
                  size="sm"
                  className="w-full bg-gradient-hero hover:opacity-90 transition-opacity text-white"
                  asChild
                >
                  <a
                    href="#download-app"
                    onClick={handleDownloadClick}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download App
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

