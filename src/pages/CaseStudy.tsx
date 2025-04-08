
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { projectData } from '@/data/projects';
import { generateCaseStudyPDF } from '@/utils/pdfGenerator';
import { openGitLabPreview } from '@/utils/gitlabUtils';
import { toast } from '@/hooks/use-toast';
import CaseStudyHeader from '@/components/case-study/CaseStudyHeader';
import CaseStudyOverview from '@/components/case-study/CaseStudyOverview';
import CaseStudyProcess from '@/components/case-study/CaseStudyProcess';
import CaseStudyResults from '@/components/case-study/CaseStudyResults';
import CaseStudyFooter from '@/components/case-study/CaseStudyFooter';

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

  const handleDownload = () => {
    try {
      generateCaseStudyPDF(project);
      toast({
        title: "Success",
        description: "Case study PDF has been downloaded",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate PDF",
        variant: "destructive",
      });
    }
  };

  const handleGitLabPreview = () => {
    try {
      openGitLabPreview(project);
      toast({
        title: "Preview Opened",
        description: "GitLab preview opened in a new tab",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to open GitLab preview",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <CaseStudyHeader
        project={project}
        onDownload={handleDownload}
        onGitLabPreview={handleGitLabPreview}
      />

      {/* Main Content */}
      <div className="container-custom py-12 md:py-20">
        {/* Overview Section */}
        <CaseStudyOverview project={project} />

        {/* Hero Image */}
        <img 
          src={project.imageSrc} 
          alt={project.title} 
          className="w-full h-auto rounded-lg object-cover mb-20"
          style={{ maxHeight: '600px' }}
        />

        {/* Process Section */}
        <CaseStudyProcess />
        
        {/* Results */}
        <CaseStudyResults />
        
        {/* Next Case Study */}
        <CaseStudyFooter 
          onDownload={handleDownload}
          onGitLabPreview={handleGitLabPreview}
        />
      </div>
    </div>
  );
};

export default CaseStudy;
