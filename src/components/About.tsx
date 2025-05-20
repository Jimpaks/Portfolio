
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="bg-portfolio-primary section-container">
      <h2 className="section-heading">Beginner Web Dev</h2>
      
      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <div className="animate-slide-up">
          <p className="text-portfolio-text mb-4">
            Hello! I'm a beginner web developer with a strong enthusiasm for creating websites
            that look great and provide good user experiences. I'm at the start of my web development
            journey and eager to learn more.
          </p>
          <p className="text-portfolio-text mb-4">
            I'm currently focusing on building my foundation in front-end technologies
            and continuously learning new skills to improve. I enjoy solving problems
            and bringing designs to life through code.
          </p>
          <p className="text-portfolio-text">
            My goal is to create clean, functional websites that are accessible to everyone.
            I'm excited about the opportunities to grow in this field and to collaborate
            with others on interesting projects.
          </p>
        </div>
        
        <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
          <h3 className="text-xl font-semibold text-portfolio-lightest mb-6">Skills & Technologies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "HTML & CSS",
              "Tailwind CSS",
              "MySQL"
            ].map((skill, index) => (
              <div key={index} className="flex items-center">
                <span className="text-portfolio-secondary mr-2">▹</span>
                <span className="text-portfolio-text">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
