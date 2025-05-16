
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Briefcase } from "lucide-react";

type Job = {
  company: string;
  title: string;
  period: string;
  responsibilities: string[];
};

const jobs: Job[] = [
  {
    company: "Tech Solutions Inc.",
    title: "Senior Web Developer",
    period: "January 2022 - Present",
    responsibilities: [
      "Led development team on multiple client projects, ensuring on-time delivery and high-quality code",
      "Implemented modern front-end architecture using React and TypeScript, improving application performance by 40%",
      "Collaborated with UX/UI designers to implement responsive designs and accessible components",
      "Mentored junior developers through code reviews and pair programming sessions",
    ],
  },
  {
    company: "Digital Innovations Ltd.",
    title: "Web Developer",
    period: "March 2020 - December 2021",
    responsibilities: [
      "Developed and maintained client websites using Laravel and Vue.js",
      "Created RESTful APIs for mobile applications and integrated third-party services",
      "Optimized database queries and implemented caching strategies, reducing page load times by 30%",
      "Participated in Agile development processes, including daily stand-ups and sprint planning",
    ],
  },
  {
    company: "Creative Web Agency",
    title: "Junior Developer",
    period: "June 2018 - February 2020",
    responsibilities: [
      "Built responsive websites for small to medium-sized businesses using HTML, CSS, and JavaScript",
      "Assisted senior developers with debugging and feature implementation",
      "Maintained WordPress sites and developed custom plugins to extend functionality",
      "Collaborated with design team to ensure pixel-perfect implementation of designs",
    ],
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState("0");

  return (
    <section id="experience" className="bg-portfolio-primary section-container">
      <h2 className="section-heading">Work Experience</h2>

      <div className="mt-12 animate-slide-up">
        <Tabs 
          defaultValue="0" 
          value={activeTab}
          onValueChange={setActiveTab}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-8">
            <TabsList className="flex-col h-auto bg-transparent space-y-2 md:border-l md:border-portfolio-text/30">
              {jobs.map((job, index) => (
                <TabsTrigger
                  key={index}
                  value={index.toString()}
                  className={`text-left py-3 px-5 data-[state=active]:text-portfolio-secondary data-[state=active]:border-l-2 data-[state=active]:border-portfolio-secondary data-[state=active]:bg-portfolio-secondary/5 min-w-[200px] h-auto`}
                >
                  {job.company}
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="flex-1">
              {jobs.map((job, index) => (
                <TabsContent 
                  key={index} 
                  value={index.toString()}
                  className="mt-0 focus-visible:outline-none focus-visible:ring-0"
                >
                  <div className="animate-fade-in">
                    <h3 className="text-xl font-semibold text-portfolio-lightest mb-1">
                      {job.title} <span className="text-portfolio-secondary">@ {job.company}</span>
                    </h3>
                    
                    <div className="flex items-center mb-6 text-portfolio-text">
                      <Calendar size={16} className="mr-2 text-portfolio-secondary" />
                      <span>{job.period}</span>
                    </div>
                    
                    <ul className="space-y-4">
                      {job.responsibilities.map((item, i) => (
                        <li key={i} className="flex">
                          <span className="text-portfolio-secondary mr-2 text-xl leading-tight">▹</span>
                          <span className="text-portfolio-text">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;
