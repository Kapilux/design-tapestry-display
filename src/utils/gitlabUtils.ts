
import { Project } from '@/data/projects';

// Configuration options - these would typically come from environment variables
const GITLAB_INSTANCE = 'https://gitlab.com';
const GITLAB_PROJECT_ID = '12345678'; // Replace with your actual project ID

/**
 * Generates a GitLab Pages preview URL for a project
 * @param project The project to generate a preview URL for
 * @returns The preview URL for the project
 */
export const generateGitLabPreviewUrl = (project: Project): string => {
  // Sanitize the project title for use in URLs
  const sanitizedTitle = project.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  
  // Generate the preview URL following GitLab's typical naming convention
  // Format: https://namespace.gitlab.io/project-name/preview/branch-name
  return `${GITLAB_INSTANCE}/${GITLAB_PROJECT_ID}/-/jobs/artifacts/main/preview/${sanitizedTitle}/index.html?job=pages`;
};

/**
 * Opens a GitLab preview URL in a new tab
 * @param project The project to open the preview for
 */
export const openGitLabPreview = (project: Project): void => {
  const previewUrl = generateGitLabPreviewUrl(project);
  window.open(previewUrl, '_blank');
};
