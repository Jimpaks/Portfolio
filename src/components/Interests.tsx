
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Music, Map, Code } from "lucide-react";

const interestData = [
  {
    title: "Reading",
    icon: BookOpen,
    description: "I enjoy reading books on technology, psychology, and science fiction. Books provide me with new perspectives and ideas that often influence my creative work."
  },
  {
    title: "Music Production",
    icon: Music,
    description: "Creating and mixing music is one of my favorite ways to unwind. There's a surprising amount of overlap between music production and coding - both require attention to detail and creative problem-solving."
  },
  {
    title: "Traveling",
    icon: Map,
    description: "Exploring new places gives me inspiration and broadens my worldview. I try to visit at least two new countries each year to experience different cultures and environments."
  },
  {
    title: "Open Source",
    icon: Code,
    description: "I'm passionate about contributing to open source projects. It's a great way to learn from others, give back to the community, and collaborate with developers from around the world."
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
