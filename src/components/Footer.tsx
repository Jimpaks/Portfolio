
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-portfolio-primary py-8 border-t border-portfolio-text/10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-portfolio-text text-sm">
          Designed & Built by Jim Reyes &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
