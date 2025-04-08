
import React from 'react';
import { Project } from '@/data/projects';

interface CaseStudyOverviewProps {
  project: Project;
}

const CaseStudyOverview: React.FC<CaseStudyOverviewProps> = ({ project }) => {
  return (
    <section className="mb-20">
      <h2 className="mb-6">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <p className="text-muted-foreground mb-4">
            This case study explores the research, design process, and outcomes of the {project.title} project. 
            The client approached us with the challenge of improving their user experience while maintaining brand consistency.
          </p>
          <p className="text-muted-foreground">
            Through extensive user research, iterative design, and collaborative testing, we delivered a solution that 
            significantly improved key metrics and user satisfaction.
          </p>
        </div>
        <div className="bg-muted rounded-lg p-6">
          <h3 className="text-base font-medium mb-4">Key Outcomes</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>43% increase in user engagement</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>28% reduction in support tickets</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>62% improvement in task completion rates</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyOverview;
