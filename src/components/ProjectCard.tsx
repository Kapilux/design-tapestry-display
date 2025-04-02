
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  imageSrc: string;
  index: number;
  isLarge?: boolean;
}

const ProjectCard = ({ title, description, category, imageSrc, index, isLarge = false }: ProjectCardProps) => {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-lg bg-background border transition-all duration-300 hover:shadow-md",
        isLarge ? "col-span-2 lg:col-span-2" : "col-span-2 sm:col-span-1"
      )}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className={cn(
        "aspect-video w-full overflow-hidden",
        isLarge ? "aspect-[16/9]" : "aspect-[4/3]"
      )}>
        <img
          src={imageSrc}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 space-y-3">
        <span className="text-sm text-muted-foreground uppercase tracking-wider">{category}</span>
        <h3 className="text-xl font-medium transition-colors group-hover:text-primary">{title}</h3>
        <p className="text-muted-foreground line-clamp-2">{description}</p>
        <div className="pt-2 flex items-center space-x-1 text-sm font-medium">
          <span>View Case Study</span>
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
