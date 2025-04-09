
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Tag, ExternalLink, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Project } from '@/data/projects';

interface CaseStudyHeaderProps {
  project: Project;
  onDownload: () => void;
  onGitHubPreview: () => void;
}

const CaseStudyHeader: React.FC<CaseStudyHeaderProps> = ({ 
  project, 
  onDownload, 
  onGitHubPreview 
}) => {
  return (
    <div className="bg-gradient-to-br from-[#0F1267] to-purple-900">
      <div className="container-custom py-12 md:py-20">
        <Link 
          to="/" 
          className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <h1 className="text-white">{project.title}</h1>
          <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
            <Button 
              variant="outline" 
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={onGitHubPreview}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              GitHub Preview
            </Button>
            <Button 
              variant="outline" 
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={onDownload}
            >
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>
        
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
  );
};

export default CaseStudyHeader;
