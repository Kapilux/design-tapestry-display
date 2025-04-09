
import { Project } from '@/data/projects';

// Configuration options - these would typically come from environment variables
const GITHUB_USERNAME = 'Kapilux'; // Replace with your GitHub username
const GITHUB_REPO = 'Kapilux/design-tapestry-display';    // Replace with your repository name

/**
 * Generates a GitHub Pages preview URL for a project
 * @param project The project to generate a preview URL for
 * @returns The preview URL for the project
 */
export const generateGitHubPreviewUrl = (project: Project): string => {
  // Sanitize the project title for use in URLs
  const sanitizedTitle = project.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  
  // Generate the preview URL following GitHub Pages typical naming convention
  // Format: https://username.github.io/repo-name/
  return `https://${GITHUB_USERNAME}.github.io/${GITHUB_REPO}/${sanitizedTitle}`;
};

/**
 * Opens a GitHub preview URL in a new tab
 * @param project The project to open the preview for
 */
export const openGitHubPreview = (project: Project): void => {
  const previewUrl = generateGitHubPreviewUrl(project);
  window.open(previewUrl, '_blank');
};
