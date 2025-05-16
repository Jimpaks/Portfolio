
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

const Family = () => {
  return (
    <section id="family" className="bg-portfolio-primary/95 section-container">
      <h2 className="section-heading">Family Background</h2>
      
      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <div className="animate-slide-up">
          <Card className="bg-portfolio-primary/50 border border-portfolio-text/20 overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Users className="mr-3 text-portfolio-secondary" size={24} />
                <h3 className="text-xl font-semibold text-portfolio-lightest">Family Roots</h3>
              </div>
              <p className="text-portfolio-text mb-4">
                I come from a close-knit family with strong values of education, perseverance, and creativity.
                My parents always encouraged my interest in technology from a young age, providing me with
                opportunities to explore and learn.
              </p>
              <p className="text-portfolio-text">
                Growing up in a supportive environment has shaped my approach to both work and life.
                I value collaboration, open communication, and bringing diverse perspectives together
                to solve problems - all values that were instilled in me through my family upbringing.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
          <Card className="bg-portfolio-primary/50 border border-portfolio-text/20 h-full">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-portfolio-lightest mb-4">Cultural Influence</h3>
              <p className="text-portfolio-text mb-4">
                My multicultural background has given me a unique perspective that influences my work.
                Being exposed to different traditions, languages, and ways of thinking has helped me
                become adaptable and open-minded.
              </p>
              <p className="text-portfolio-text mb-4">
                These diverse influences have taught me to approach problems from multiple angles and
                to consider different user experiences when designing digital products. I believe this
                cultural awareness makes me a more thoughtful and inclusive developer.
              </p>
              <p className="text-portfolio-text">
                Today, I continue to draw inspiration from my family's journey and the values they've
                instilled in me throughout my professional career.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Family;
