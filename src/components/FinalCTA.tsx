
const FinalCTA = () => {
  return (
    <section className="py-24 bg-[#fbf8f6] relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12 animate-fade-in-up">
          {/* Headline */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Start Baking <span className="bg-gradient-hero bg-clip-text text-transparent">Perfect Dough</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of bakers who've transformed their baking with Pizza&Dough. 
              Download now and experience professional results every time.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://apps.apple.com/app/pizza-dough/id6753921204" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-90 transition-opacity inline-block"
            >
              <img 
                src="/iosdownload.png" 
                alt="Download on the App Store" 
                className="h-40 w-auto max-w-[200px]"
              />
            </a>
            
            <a 
              href="https://play.google.com/store/apps/details?id=com.pizzadough.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-90 transition-opacity inline-block"
            >
              <img 
                src="/androiddownload.png" 
                alt="Get it on Google Play" 
                className="h-40 w-auto max-w-[200px] scale-[1.15]"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

