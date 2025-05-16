
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center bg-portfolio-primary px-6 md:px-24 py-24"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="font-mono text-portfolio-secondary mb-5 block animate-fade-in">
              Hi, my name is
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-portfolio-lightest mb-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
              Tama Ak
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-text mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
              I build web experiences.
            </h2>
            <p className="text-portfolio-text text-lg max-w-lg mb-8 animate-fade-in" style={{ animationDelay: '300ms' }}>
              I'm a web developer specializing in building exceptional digital experiences.
              Currently, I'm focused on creating accessible, human-centered products.
            </p>
            <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Button 
                className="bg-transparent hover:bg-portfolio-secondary/10 text-portfolio-secondary border-2 border-portfolio-secondary px-8 py-6"
              >
                Check out my work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: '500ms' }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-portfolio-secondary">
                <img 
                  src="/lovable-uploads/0c365d20-47a6-476b-ac45-8fc11a93151e.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-portfolio-secondary/20 transform hover:bg-transparent transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
