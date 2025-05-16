
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Family from "@/components/Family";
import Interests from "@/components/Interests";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-portfolio-primary text-portfolio-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Family />
        <Interests />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
