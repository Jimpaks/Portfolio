
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Family', href: '#family' },
  { name: 'Interests', href: '#interests' },
  { name: 'Projects', href: '#projects' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-portfolio-primary/95 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a 
          href="#hero" 
          className="text-portfolio-secondary font-mono text-xl font-bold"
        >
          portfolio<span className="text-portfolio-white">.dev</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <li key={link.name}>
              <a 
                href={link.href}
                className="text-portfolio-text hover:text-portfolio-secondary transition-colors duration-300 font-semibold"
              >
                <span className="text-portfolio-secondary font-mono mr-1">0{index + 1}.</span>
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <Button 
              variant="outline" 
              className="border-portfolio-secondary text-portfolio-secondary hover:bg-portfolio-secondary/10"
            >
              Resume
            </Button>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-portfolio-secondary"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed top-[61px] right-0 h-screen w-3/4 bg-portfolio-primary shadow-xl transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full py-8 px-6">
          <ul className="flex flex-col space-y-6">
            {navLinks.map((link, index) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className="text-portfolio-text hover:text-portfolio-secondary transition-colors duration-300 text-lg flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-portfolio-secondary font-mono mr-2">0{index + 1}.</span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto">
            <Button 
              variant="outline" 
              className="w-full border-portfolio-secondary text-portfolio-secondary hover:bg-portfolio-secondary/10"
            >
              Resume
            </Button>
          </div>
        </div>
      </div>
      
      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-[-1]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
