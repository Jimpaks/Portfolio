
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-portfolio-primary section-container">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-heading">Get In Touch</h2>
        
        <p className="text-portfolio-text mb-8 max-w-xl mx-auto">
          I'm currently open to new opportunities and collaborations. Whether you have a question, a project in mind, or just want to say hi, I'll do my best to get back to you!
        </p>
        
        <form className="max-w-lg mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <Input 
                type="text" 
                placeholder="Name" 
                className="bg-portfolio-primary/30 border-portfolio-text/20 focus:border-portfolio-secondary text-portfolio-lightest placeholder:text-portfolio-text/50"
              />
            </div>
            <div>
              <Input 
                type="email" 
                placeholder="Email" 
                className="bg-portfolio-primary/30 border-portfolio-text/20 focus:border-portfolio-secondary text-portfolio-lightest placeholder:text-portfolio-text/50"
              />
            </div>
          </div>
          <div className="mb-6">
            <Input 
              type="text" 
              placeholder="Subject" 
              className="bg-portfolio-primary/30 border-portfolio-text/20 focus:border-portfolio-secondary text-portfolio-lightest placeholder:text-portfolio-text/50"
            />
          </div>
          <div className="mb-6">
            <Textarea 
              placeholder="Message" 
              rows={6} 
              className="bg-portfolio-primary/30 border-portfolio-text/20 focus:border-portfolio-secondary text-portfolio-lightest placeholder:text-portfolio-text/50"
            />
          </div>
          <Button 
            type="submit"
            className="w-full bg-transparent hover:bg-portfolio-secondary/10 text-portfolio-secondary border-2 border-portfolio-secondary"
          >
            Send Message
          </Button>
        </form>
        
        <div className="flex justify-center mt-12 space-x-6">
          <a 
            href="#" 
            className="text-portfolio-text hover:text-portfolio-secondary transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a 
            href="#" 
            className="text-portfolio-text hover:text-portfolio-secondary transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a 
            href="#" 
            className="text-portfolio-text hover:text-portfolio-secondary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
