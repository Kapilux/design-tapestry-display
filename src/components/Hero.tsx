
import React, { useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    // Animation for bubbles moving in circular paths
    const uxBubble = document.getElementById('ux-bubble');
    const uiBubble = document.getElementById('ui-bubble');
    const cxBubble = document.getElementById('cx-bubble');
    
    if (uxBubble && uiBubble && cxBubble) {
      let uxAngle = 0;
      let uiAngle = 120; // Start at different positions
      let cxAngle = 240; // Start at different positions
      
      const animateBubbles = () => {
        // UX bubble animation - smaller radius
        const uxRadius = 110;
        const uxX = Math.cos(uxAngle * (Math.PI / 180)) * uxRadius;
        const uxY = Math.sin(uxAngle * (Math.PI / 180)) * uxRadius;
        uxBubble.style.transform = `translate(${uxX}px, ${uxY}px)`;
        uxAngle = (uxAngle + 0.1) % 360; // Slow movement
        
        // UI bubble animation
        const uiRadius = 140;
        const uiX = Math.cos(uiAngle * (Math.PI / 180)) * uiRadius;
        const uiY = Math.sin(uiAngle * (Math.PI / 180)) * uiRadius;
        uiBubble.style.transform = `translate(${uiX}px, ${uiY}px)`;
        uiAngle = (uiAngle + 0.15) % 360; // Different speed
        
        // CX bubble animation
        const cxRadius = 125;
        const cxX = Math.cos(cxAngle * (Math.PI / 180)) * cxRadius;
        const cxY = Math.sin(cxAngle * (Math.PI / 180)) * cxRadius;
        cxBubble.style.transform = `translate(${cxX}px, ${cxY}px)`;
        cxAngle = (cxAngle + 0.12) % 360; // Different speed
        
        requestAnimationFrame(animateBubbles);
      };
      
      animateBubbles();
    }
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const yOffset = -80;
      const y = projectsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16 bg-[#0C1957] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_70%)]"></div>
      <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <h4 className="text-white/70 font-normal">14+ Years of Experience</h4>
          <h1 className="font-bold">Crafting User-Centered Digital Experiences</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-md">
            I design intuitive and meaningful interactions that solve real problems for users while meeting business goals.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <button onClick={scrollToProjects} className="btn-primary">
              View Projects
            </button>
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white/90 hover:text-white transition-colors">
              Let's Connect
            </a>
          </div>
        </div>
        <div className="hidden lg:flex justify-center items-center">
          <div className="w-[450px] h-[450px] relative rounded-full bg-white/5 flex items-center justify-center">
            <div className="w-[85%] h-[85%] rounded-full border-[1px] border-white/10 flex items-center justify-center">
              <div className="w-[70%] h-[70%] rounded-full border-[1px] border-white/20 flex items-center justify-center">
                <div className="w-[50%] h-[50%] rounded-full bg-primary/5 border-[1px] border-primary/10"></div>
              </div>
            </div>
            <div id="ux-bubble" className="absolute w-20 h-20 -top-4 right-12 bg-white/10 rounded-full flex items-center justify-center shadow-sm text-white transition-transform duration-1000">
              <span className="text-sm font-medium">UX</span>
            </div>
            <div id="ui-bubble" className="absolute w-20 h-20 bottom-20 -left-10 bg-white/10 rounded-full flex items-center justify-center shadow-sm text-white transition-transform duration-1000">
              <span className="text-sm font-medium">UI</span>
            </div>
            <div id="cx-bubble" className="absolute w-20 h-20 bottom-0 right-24 bg-white/10 rounded-full flex items-center justify-center shadow-sm text-white transition-transform duration-1000">
              <span className="text-sm font-medium">CX</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToProjects} 
          className="w-10 h-10 rounded-full bg-white/10 shadow-md flex items-center justify-center"
        >
          <ArrowDown size={20} className="text-white" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
