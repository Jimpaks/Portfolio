
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="bg-portfolio-primary section-container">
      <h2 className="section-heading">About Me</h2>
      
      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <div className="animate-slide-up">
          <p className="text-portfolio-text mb-4">
            Hello! I'm a passionate web developer with a strong focus on creating elegant solutions
            to complex problems. I enjoy building websites and applications that not only look great
            but also provide excellent user experiences.
          </p>
          <p className="text-portfolio-text mb-4">
            My journey in web development started several years ago, and I've since worked on
            various projects that have helped me grow both technically and creatively. I'm constantly
            learning and expanding my skillset to stay updated with the latest technologies and best practices.
          </p>
          <p className="text-portfolio-text">
            I believe in writing clean, maintainable code and collaborating effectively with teams
            to deliver outstanding results. Beyond coding, I'm interested in UX/UI design principles
            and creating accessible web experiences for all users.
          </p>
        </div>
        
        <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
          <h3 className="text-xl font-semibold text-portfolio-lightest mb-6">Skills & Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "JavaScript (ES6+)",
              "TypeScript",
              "React",
              "Vue.js",
              "Node.js",
              "PHP",
              "Laravel",
              "HTML & CSS",
              "Tailwind CSS",
              "MySQL",
              "MongoDB",
              "Git & GitHub",
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
