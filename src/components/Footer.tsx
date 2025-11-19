import { Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Pizza&Dough
              </h3>
              <p className="text-muted-foreground">
                The professional calculator that transforms how you bake
              </p>
            </div>
            
            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Get in Touch</h4>
              <div className="space-y-2">
                <a 
                  href="mailto:pizzadough.app@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  pizzadough.app@gmail.com
                </a>
              </div>
            </div>
            
            {/* Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Support</h4>
              <div className="space-y-2">
                <a 
                  href="mailto:pizzadough.app@gmail.com?subject=Support Request"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Help & Support
                </a>
                <a 
                  href="#"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Download App
                </a>
              </div>
            </div>
          </div>
          
          {/* Bottom bar */}
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-2">
              Made with <Heart className="h-4 w-4 text-primary fill-primary" /> for bakers everywhere
            </p>
            <p className="mt-2">
              © {new Date().getFullYear()} Pizza&Dough. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
