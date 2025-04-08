
import React from 'react';
import ProjectCard from './ProjectCard';
import { projectData } from '@/data/projects';

const Projects = () => {
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
          {projectData.map((project, index) => (
            <ProjectCard
              key={project.id}
              id={project.id}
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
