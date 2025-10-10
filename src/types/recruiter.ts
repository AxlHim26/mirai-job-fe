export type RecruiterResponse = {
  name: string;
  avatar: string;
  website: string;
  location: string[];
  employee: string;
  industry: string;
  foundedDate: string;
  techStack: string[];
  description: string;
  benefit: string;
  // Contact information from SocialLink
  twitter?: string;
  facebook?: string;
  linkedin?: string;
  instagram?: string;
  email?: string;
};
