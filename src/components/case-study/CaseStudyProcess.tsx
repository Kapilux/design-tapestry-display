
import React from 'react';
import { Separator } from '@/components/ui/separator';

const CaseStudyProcess: React.FC = () => {
  return (
    <section className="mb-20">
      <h2 className="mb-6">The Process</h2>
      <Separator className="mb-8" />
      
      <div className="space-y-16">
        {/* Research */}
        <div>
          <h3 className="mb-4">1. Research & Discovery</h3>
          <p className="text-muted-foreground mb-4">
            We began with a comprehensive research phase, including stakeholder interviews, competitive analysis, 
            and user surveys. This helped us identify key pain points and opportunities for improvement.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-muted rounded-lg p-6">
              <h4 className="text-base font-medium mb-2">User Interviews</h4>
              <p className="text-sm text-muted-foreground">
                We conducted 15 user interviews to understand core needs and frustrations with the existing product.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <h4 className="text-base font-medium mb-2">Competitive Analysis</h4>
              <p className="text-sm text-muted-foreground">
                We analyzed 8 competing products to identify industry standards and differentiation opportunities.
              </p>
            </div>
          </div>
        </div>
        
        {/* Design */}
        <div>
          <h3 className="mb-4">2. Design & Prototyping</h3>
          <p className="text-muted-foreground mb-4">
            Based on our research findings, we created wireframes and interactive prototypes. 
            We iteratively refined these designs through multiple feedback sessions with stakeholders and users.
          </p>
          {/* Placeholder for design artifacts */}
          <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Design artifacts would be displayed here</p>
          </div>
        </div>
        
        {/* Testing */}
        <div>
          <h3 className="mb-4">3. Testing & Validation</h3>
          <p className="text-muted-foreground mb-4">
            We conducted usability testing with 12 participants to validate our design solutions.
            This led to several key insights that informed our final design decisions.
          </p>
        </div>
        
        {/* Implementation */}
        <div>
          <h3 className="mb-4">4. Implementation & Results</h3>
          <p className="text-muted-foreground mb-4">
            Working closely with the development team, we implemented the new design in phases.
            Post-launch analytics showed significant improvements across all key metrics.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyProcess;
