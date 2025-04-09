
import React from 'react';
import { Link } from 'react-router-dom';
import { Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface CaseStudyFooterProps {
  onDownload: () => void;
  onGitHubPreview: () => void;
}

const CaseStudyFooter: React.FC<CaseStudyFooterProps> = ({ onDownload, onGitHubPreview }) => {
  return (
    <section>
      <Separator className="mb-12" />
      <div className="text-center space-y-6">
        <h2 className="mb-6">Explore More Work</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/">View All Projects</Link>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={onDownload}
          >
            <Download className="mr-2 h-4 w-4" />
            Download This Case Study
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={onGitHubPreview}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            View GitHub Preview
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyFooter;
