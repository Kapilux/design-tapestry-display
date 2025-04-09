
export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  imageSrc: string;
  isLarge?: boolean;
}

export const projectData: Project[] = [
  {
    id: 1,
    title: "Business Insurance Website Revamp",
    description: "Complete UX overhaul of a legacy banking platform, resulting in 43% increase in user engagement and 28% reduction in support tickets.",
    category: "Mobile App",
    imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    isLarge: true
  },
  {
    id: 2,
    title: "E-commerce User Experience",
    description: "Redesigned checkout flow to simplify the purchase process, leading to a 35% reduction in cart abandonment rate.",
    category: "Web Design",
    imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Healthcare Portal",
    description: "Created an accessible patient portal that improved appointment scheduling efficiency by 62% and patient satisfaction rates.",
    category: "UX Research & Design",
    imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Travel Platform",
    description: "Designed an intuitive interface for a travel booking platform, incorporating user research to create personalized experiences.",
    category: "User Research",
    imageSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "AI Assistant Integration",
    description: "Implemented conversational design patterns for an AI assistant, enhancing user satisfaction and reducing task completion time by 40%.",
    category: "Interaction Design",
    imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
  }
];
