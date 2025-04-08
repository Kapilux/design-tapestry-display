
import { jsPDF } from 'jspdf';
import { Project } from '@/data/projects';

export const generateCaseStudyPDF = (project: Project) => {
  const doc = new jsPDF();
  const lineHeight = 10;
  let yPosition = 20;

  // Add title
  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.text(project.title, 20, yPosition);
  yPosition += lineHeight * 2;

  // Add category
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 100, 100);
  doc.text(`Category: ${project.category}`, 20, yPosition);
  yPosition += lineHeight * 1.5;

  // Add description
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  const splitDescription = doc.splitTextToSize(project.description, 170);
  doc.text(splitDescription, 20, yPosition);
  yPosition += (splitDescription.length * lineHeight) + 10;

  // Add project details
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Project Details', 20, yPosition);
  yPosition += lineHeight * 1.5;

  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text('Timeline: 8 weeks', 20, yPosition);
  yPosition += lineHeight;
  doc.text('Role: Lead UX Designer', 20, yPosition);
  yPosition += lineHeight;
  doc.text('Year: 2025', 20, yPosition);
  yPosition += lineHeight * 2;

  // Add key outcomes
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Key Outcomes', 20, yPosition);
  yPosition += lineHeight * 1.5;

  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text('• 43% increase in user engagement', 20, yPosition);
  yPosition += lineHeight;
  doc.text('• 28% reduction in support tickets', 20, yPosition);
  yPosition += lineHeight;
  doc.text('• 62% improvement in task completion rates', 20, yPosition);

  // Save the PDF with the project title as filename
  doc.save(`${project.title.toLowerCase().replace(/ /g, '-')}-case-study.pdf`);
};
