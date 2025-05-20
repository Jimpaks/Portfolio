
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

const Family = () => {
  return (
    <section id="family" className="bg-portfolio-primary/95 section-container">
      <h2 className="section-heading">Family Background</h2>
      
      <div className="grid md:grid-cols-1 gap-12 mt-12">
        <div className="animate-slide-up">
          <Card className="bg-portfolio-primary/50 border border-portfolio-text/20 overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Users className="mr-3 text-portfolio-secondary" size={24} />
                <h3 className="text-xl font-semibold text-portfolio-lightest">Family Roots</h3>
              </div>
              <p className="text-portfolio-text mb-4">
                I come from a humble and hardworking family. My parents run a small banana vending 
                business in our local community. They've always encouraged me to pursue education
                and follow my passion for technology.
              </p>
              <p className="text-portfolio-text mb-4">
                Growing up helping with the family business taught me valuable lessons about
                dedication, customer service, and managing responsibilities - skills that I find
                increasingly relevant in my web development journey.
              </p>
              <p className="text-portfolio-text">
                I also have a younger sister who is still in school. Being an older sibling has helped
                me develop patience and communication skills, which are essential when working
                with clients and explaining technical concepts in simple terms.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Family;
