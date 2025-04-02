
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Financial App Redesign",
      description: "Complete UX overhaul of a legacy banking platform, resulting in 43% increase in user engagement and 28% reduction in support tickets.",
      category: "Mobile App",
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      isLarge: true
    },
    {
      id: 2,
      title: "E-commerce User Experience",
      description: "Redesigned checkout flow to simplify the purchase process, leading to a 35% reduction in cart abandonment rate.",
      category: "Web Design",
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Healthcare Portal",
      description: "Created an accessible patient portal that improved appointment scheduling efficiency by 62% and patient satisfaction rates.",
      category: "UX Research & Design",
      imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Travel Platform",
      description: "Designed an intuitive interface for a travel booking platform, incorporating user research to create personalized experiences.",
      category: "User Research",
      imageSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "AI Assistant Integration",
      description: "Implemented conversational design patterns for an AI assistant, enhancing user satisfaction and reducing task completion time by 40%.",
      category: "Interaction Design",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
    }
  ];
  
  return (
    <section id="projects" className="section-spacing scroll-mt-20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h4 className="text-muted-foreground mb-2">Selected Projects</h4>
            <h2 className="max-w-2xl">Solving complex problems through design</h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A curated selection of projects showcasing my approach to user experience design and problem-solving.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              category={project.category}
              imageSrc={project.imageSrc}
              index={index}
              isLarge={project.isLarge}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
