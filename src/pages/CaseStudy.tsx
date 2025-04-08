
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { projectData } from '@/data/projects';

const CaseStudy = () => {
  const { id } = useParams();
  const project = projectData.find(p => p.id.toString() === id);

  if (!project) {
    return (
      <div className="container-custom py-32 text-center">
        <h1 className="mb-6">Case Study Not Found</h1>
        <p className="mb-8 text-muted-foreground">The case study you're looking for doesn't exist or has been moved.</p>
        <Button asChild>
          <Link to="/">Return Home</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0F1267] to-purple-900">
        <div className="container-custom py-12 md:py-20">
          <Link 
            to="/" 
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
          
          <h1 className="text-white mb-6">{project.title}</h1>
          
          <p className="text-white/90 max-w-2xl text-xl mb-8">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-6 text-white/80">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <span>2025</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              <span>8 weeks</span>
            </div>
            <div className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              <span>Lead UX Designer</span>
            </div>
            <div className="flex items-center">
              <Tag className="mr-2 h-4 w-4" />
              <span>{project.category}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-12 md:py-20">
        {/* Overview Section */}
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

        {/* Hero Image */}
        <img 
          src={project.imageSrc} 
          alt={project.title} 
          className="w-full h-auto rounded-lg object-cover mb-20"
          style={{ maxHeight: '600px' }}
        />

        {/* Process Section */}
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
        
        {/* Results */}
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
        
        {/* Next Case Study */}
        <section>
          <Separator className="mb-12" />
          <div className="text-center">
            <h2 className="mb-6">Explore More Work</h2>
            <Button asChild size="lg">
              <Link to="/">View All Projects</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CaseStudy;
