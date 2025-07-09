import { IconName } from "@/assets/icons/local-icon";
import { ImageName } from "@/assets/images/local-image";

export type LinkSocialItemProps = {
  icon: IconName;
  link: string;
  title: string;
};

export type TechPros = {
  image: ImageName;
  name: string;
};

export type LocationItemPros = {
  image: ImageName;
  name: string;
};

export type CompanyCardProps = {
  title?: string;
  description?: string;
  linkSocialItem?: LinkSocialItemProps[];
  techStackItem?: TechPros[];
  officeLocation?: LocationItemPros[];
  viewMore?: string;
  viewMoreText?: string;
  gallery?: ImageName[];
};

export type CompanyTeamCardProps = {
  avatar: ImageName;
  name: string;
  position: string;
};

export type CompanyTeamProps = {
  employees: number;
  members: CompanyTeamCardProps[];
};

export type CompanyProfileCardProps = {
  logoCompany: IconName;
  nameCompany: string;
  jobs: number;
  linkCompany: string;
  founded: string;
  employees: number;
  location: number;
  industry: string;
};

export type CompanyInfoItemProps = {
  icon: IconName;
  title: string;
  value: string;
};

export type CompanyDetailProps = {
  mainSections: CompanyCardProps[];   
  sidebarSections: CompanyCardProps[]; 
};