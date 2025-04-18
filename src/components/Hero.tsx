
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const animationRef = useRef<number | null>(null);

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
        const uxRadius = 60; // Reduced radius to stay inside main circle
        const uxX = Math.cos(uxAngle * (Math.PI / 180)) * uxRadius;
        const uxY = Math.sin(uxAngle * (Math.PI / 180)) * uxRadius;
        uxBubble.style.transform = `translate(${uxX}px, ${uxY}px)`;
        uxAngle = (uxAngle + 0.05) % 360; // Slower, more subtle movement
        
        // UI bubble animation
        const uiRadius = 75; // Reduced radius to stay inside main circle
        const uiX = Math.cos(uiAngle * (Math.PI / 180)) * uiRadius;
        const uiY = Math.sin(uiAngle * (Math.PI / 180)) * uiRadius;
        uiBubble.style.transform = `translate(${uiX}px, ${uiY}px)`;
        uiAngle = (uiAngle + 0.04) % 360; // Slower, more subtle movement
        
        // CX bubble animation
        const cxRadius = 50; // Reduced radius to stay inside main circle
        const cxX = Math.cos(cxAngle * (Math.PI / 180)) * cxRadius;
        const cxY = Math.sin(cxAngle * (Math.PI / 180)) * cxRadius;
        cxBubble.style.transform = `translate(${cxX}px, ${cxY}px)`;
        cxAngle = (cxAngle + 0.035) % 360; // Slower, more subtle movement
        
        animationRef.current = requestAnimationFrame(animateBubbles);
      };
      
      animateBubbles();
    }
    
    // Cleanup function to cancel animation frame on unmount
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
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
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16 bg-gradient-to-br from-[#0F1267] via-[#2F2185] to-[#6637A5] text-white">
      {/* Subtle background effects */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(164,153,252,0.08),transparent_80%)]"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(126,105,245,0.06),transparent_70%)]"></div>
      <div className="absolute bottom-0 left-0 right-0 h-64 -z-10 bg-gradient-to-t from-[#191A40]/40 to-transparent"></div>
      
      <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in">
          <h4 className="text-indigo-200 font-light tracking-wide">14+ Years of Experience</h4>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
            Crafting User-Centered <span className="text-indigo-200">Digital Experiences</span>
          </h1>
          <p className="text-lg md:text-xl text-indigo-100/90 max-w-md leading-relaxed">
            I design intuitive and meaningful interactions that solve real problems for users while meeting business goals.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row gap-5">
            <button 
              onClick={scrollToProjects} 
              className="px-8 py-4 bg-white text-[#0F1267] font-medium rounded-full hover:bg-opacity-90 transition-all"
            >
              View Projects
            </button>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white/90 hover:text-white border border-white/30 rounded-full hover:border-white/50 transition-all"
            >
              Let's Connect
            </a>
          </div>
        </div>
        <div className="hidden lg:flex justify-center items-center">
          <div className="w-[450px] h-[450px] relative rounded-full bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center">
            <div className="w-[85%] h-[85%] rounded-full border-[1px] border-white/10 flex items-center justify-center">
              <div className="w-[70%] h-[70%] rounded-full border-[1px] border-white/20 flex items-center justify-center">
                <div className="w-[50%] h-[50%] rounded-full bg-primary/5 border-[1px] border-primary/10"></div>
              </div>
            </div>
            {/* Repositioned bubbles to be initially inside the circle */}
            <div id="ux-bubble" className="absolute w-16 h-16 top-1/4 right-1/4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center shadow-lg text-white transition-transform duration-[3000ms] ease-in-out">
              <span className="text-sm font-medium">UX</span>
            </div>
            <div id="ui-bubble" className="absolute w-16 h-16 bottom-1/4 left-1/4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center shadow-lg text-white transition-transform duration-[3000ms] ease-in-out">
              <span className="text-sm font-medium">UI</span>
            </div>
            <div id="cx-bubble" className="absolute w-16 h-16 top-1/2 right-1/3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center shadow-lg text-white transition-transform duration-[3000ms] ease-in-out">
              <span className="text-sm font-medium">CX</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={scrollToProjects} 
          className="w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-lg flex items-center justify-center hover:bg-white/20 transition-all"
        >
          <ArrowDown size={20} className="text-white" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
