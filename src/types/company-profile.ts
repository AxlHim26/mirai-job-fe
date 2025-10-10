export type TeamMember = {
  id: number;
  name: string;
  position: string;
  avatar: string;
  instagram?: string;
  linkedin?: string;
};

export type Benefit = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

export type TechStack = {
  id: number;
  name: string;
  icon: string;
  color: string;
};

export type OfficeLocation = {
  id: number;
  country: string;
  flag: string;
  isHeadquarters?: boolean;
};

export type CompanyProfile = {
  id: number;
  name: string;
  website: string;
  logo: string;
  founded: string;
  employees: string;
  location: string;
  industry: string;
  description: string;
  contact: {
    twitter?: string;
    facebook?: string;
    linkedin?: string;
    email?: string;
  };
  techStack: TechStack[];
  officeLocations: OfficeLocation[];
  teamMembers: TeamMember[];
  benefits: Benefit[];
  workingImages: string[];
};

export type CompanyProfileResponse = {
  profile: CompanyProfile;
};
