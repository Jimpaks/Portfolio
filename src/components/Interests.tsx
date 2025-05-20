
import { Card, CardContent } from "@/components/ui/card";
import { Gamepad2, Dumbbell } from "lucide-react";

const interestData = [
  {
    title: "Basketball Player",
    icon: Dumbbell,
    description: "I'm passionate about basketball and play regularly. The sport has taught me about teamwork, strategy, and perseverance - values that carry over into my web development work."
  },
  {
    title: "Video Games",
    icon: Gamepad2,
    description: "In my free time, I enjoy playing video games. Gaming has sparked my interest in technology and interactive experiences, which influences how I think about user experience in web development."
  }
];

const Interests = () => {
  return (
    <section id="interests" className="bg-portfolio-primary section-container">
      <h2 className="section-heading">Personal Interests</h2>
      
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {interestData.map((interest, index) => (
          <div 
            key={interest.title} 
            className="animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <Card className="bg-portfolio-primary/50 border border-portfolio-text/20 h-full hover:border-portfolio-secondary/50 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <interest.icon className="mr-3 text-portfolio-secondary" size={24} />
                  <h3 className="text-xl font-semibold text-portfolio-lightest">{interest.title}</h3>
                </div>
                <p className="text-portfolio-text">{interest.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center animate-slide-up" style={{ animationDelay: '400ms' }}>
        <p className="text-portfolio-text max-w-2xl mx-auto">
          I believe that maintaining diverse interests outside of work is crucial for creativity and well-being.
          These hobbies provide me with fresh perspectives that I bring back to my development work,
          helping me think outside the box and approach problems in unique ways.
        </p>
      </div>
    </section>
  );
};

export default Interests;
