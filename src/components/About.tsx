
import React from 'react';
import { Briefcase, Book, User } from 'lucide-react';

const About = () => {
  const skills = [
    "User Research", "Wireframing", "Prototyping", 
    "Usability Testing", "Information Architecture", 
    "Interaction Design", "UI Design", "User Journeys", 
    "Design Systems", "Accessibility"
  ];

  const experiences = [
    {
      company: "Global Tech Inc.",
      position: "Senior UX Designer",
      duration: "2018 - Present",
      description: "Lead designer for flagship products, managing a team of designers and conducting extensive user research to inform product decisions."
    },
    {
      company: "Design Studio Co.",
      position: "UX/UI Designer",
      duration: "2014 - 2018",
      description: "Collaborated with cross-functional teams to create user-centered designs for various clients across fintech, healthcare, and e-commerce."
    },
    {
      company: "Digital Agency",
      position: "UI Designer",
      duration: "2010 - 2014",
      description: "Created engaging user interfaces for web and mobile applications, focusing on visual design and interaction patterns."
    }
  ];
  
  return (
    <section id="about" className="section-spacing bg-secondary/30 scroll-mt-20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h4 className="text-muted-foreground mb-2">About Me</h4>
          <h2 className="mb-6">14+ years crafting digital experiences</h2>
          <p className="text-lg text-muted-foreground">
            I'm a seasoned UX designer passionate about creating intuitive, accessible, 
            and beautiful digital experiences. Throughout my career, I've worked with startups, 
            agencies, and enterprise companies to solve complex problems through thoughtful design.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <User size={20} className="text-primary" />
                <h3 className="text-xl font-semibold">Expertise & Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 rounded-full bg-background border text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Book size={20} className="text-primary" />
                <h3 className="text-xl font-semibold">Philosophy</h3>
              </div>
              <p className="text-muted-foreground">
                I believe that great design solves real problems for real people. My approach combines 
                empathy with strategic thinking, balancing user needs with business goals to create 
                experiences that are not just usable, but delightful. I'm dedicated to designing 
                inclusive products that work for everyone.
              </p>
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Briefcase size={20} className="text-primary" />
              <h3 className="text-xl font-semibold">Experience</h3>
            </div>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l border-border">
                  <div className="absolute w-4 h-4 bg-secondary border rounded-full -left-[9px] top-1"></div>
                  <h4 className="font-medium">{exp.position}</h4>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span>{exp.company}</span>
                    <span>•</span>
                    <span>{exp.duration}</span>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
