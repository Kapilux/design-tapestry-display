
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const yOffset = -80;
      const y = projectsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(247,247,247,0.8),transparent_70%)]"></div>
      <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <h4 className="text-muted-foreground font-normal">14+ Years of Experience</h4>
          <h1 className="font-bold">Crafting User-Centered Digital Experiences</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-md">
            I design intuitive and meaningful interactions that solve real problems for users while meeting business goals.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <button onClick={scrollToProjects} className="btn-primary">
              View Projects
            </button>
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium hover:text-primary transition-colors">
              Let's Connect
            </a>
          </div>
        </div>
        <div className="hidden lg:flex justify-center items-center">
          <div className="w-[450px] h-[450px] relative rounded-full bg-secondary/50 flex items-center justify-center">
            <div className="w-[85%] h-[85%] rounded-full border-[1px] border-muted-foreground/10 flex items-center justify-center">
              <div className="w-[70%] h-[70%] rounded-full border-[1px] border-muted-foreground/20 flex items-center justify-center">
                <div className="w-[50%] h-[50%] rounded-full bg-primary/5 border-[1px] border-primary/10"></div>
              </div>
            </div>
            <div className="absolute w-20 h-20 -top-4 right-12 bg-secondary rounded-full flex items-center justify-center shadow-sm">
              <span className="text-sm font-medium">UX</span>
            </div>
            <div className="absolute w-20 h-20 bottom-20 -left-10 bg-secondary rounded-full flex items-center justify-center shadow-sm">
              <span className="text-sm font-medium">UI</span>
            </div>
            <div className="absolute w-20 h-20 bottom-0 right-24 bg-secondary rounded-full flex items-center justify-center shadow-sm">
              <span className="text-sm font-medium">CX</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToProjects} 
          className="w-10 h-10 rounded-full bg-background shadow-md flex items-center justify-center"
        >
          <ArrowDown size={20} className="text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
