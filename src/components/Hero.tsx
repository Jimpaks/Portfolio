
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
              Jim Reyes
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-text mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
              I build web experiences.
            </h2>
            <p className="text-portfolio-text text-lg max-w-lg mb-8 animate-fade-in" style={{ animationDelay: '300ms' }}>
              I'm a beginner web developer passionate about creating accessible, user-friendly websites.
              Currently, I'm focused on learning and improving my skills in web development.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: '500ms' }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-portfolio-secondary">
                <img 
                  src="/lovable-uploads/d3fa2e61-35de-4b2b-88f3-74cb96b0e991.png" 
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
