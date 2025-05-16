
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
};

const projectsData: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution built with Laravel and Vue.js. Features include product management, user authentication, shopping cart, and payment processing integration.",
    technologies: ["Laravel", "Vue.js", "MySQL", "Stripe API"],
    githubUrl: "#",
    liveUrl: "#",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop&q=60"
  },
  {
    title: "Task Management App",
    description: "A responsive web application that helps teams track and manage their tasks, featuring drag-and-drop functionality, notifications, and project collaboration tools.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    githubUrl: "#",
    liveUrl: "#",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60"
  },
  {
    title: "Personal Blog Platform",
    description: "A custom blogging platform with a clean, minimalist design, featuring markdown support, tag categorization, and comment functionality.",
    technologies: ["Laravel", "Alpine.js", "Tailwind CSS", "MySQL"],
    githubUrl: "#",
    liveUrl: "#",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&auto=format&fit=crop&q=60"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-portfolio-primary/95 section-container">
      <h2 className="section-heading">Ongoing Projects</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projectsData.map((project, index) => (
          <div 
            key={project.title}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <Card className="bg-portfolio-primary/50 border border-portfolio-text/20 overflow-hidden h-full flex flex-col hover:-translate-y-2 transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-semibold text-portfolio-lightest mb-3">{project.title}</h3>
                <p className="text-portfolio-text mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map(tech => (
                    <Badge 
                      key={tech} 
                      variant="outline"
                      className="bg-transparent border-portfolio-secondary/50 text-portfolio-secondary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <div className="flex space-x-4">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-portfolio-text hover:text-portfolio-secondary transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-portfolio-text hover:text-portfolio-secondary transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-portfolio-text max-w-2xl mx-auto">
          These are just a few of the projects I'm currently working on. 
          I'm always open to collaboration and new opportunities.
          Feel free to reach out if you'd like to discuss any of these projects or have ideas for new ones!
        </p>
      </div>
    </section>
  );
};

export default Projects;
