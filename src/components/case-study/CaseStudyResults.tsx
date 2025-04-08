
import React from 'react';

const CaseStudyResults: React.FC = () => {
  return (
    <section className="mb-20">
      <h2 className="mb-6">Results & Impact</h2>
      <p className="text-muted-foreground mb-8">
        The redesigned experience led to measurable improvements in user satisfaction and business metrics.
        Key performance indicators showed substantial growth following the implementation.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 text-center border border-blue-100">
          <p className="text-4xl font-bold text-blue-700 mb-2">43%</p>
          <p className="text-sm text-muted-foreground">Increase in user engagement</p>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 text-center border border-blue-100">
          <p className="text-4xl font-bold text-blue-700 mb-2">28%</p>
          <p className="text-sm text-muted-foreground">Reduction in support tickets</p>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 text-center border border-blue-100">
          <p className="text-4xl font-bold text-blue-700 mb-2">62%</p>
          <p className="text-sm text-muted-foreground">Improvement in task completion</p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyResults;
