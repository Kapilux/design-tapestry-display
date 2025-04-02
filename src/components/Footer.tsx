
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-bold">
              UXfolio<span className="text-primary/70">.</span>
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {currentYear} UX Designer. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
