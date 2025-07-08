// @/features/company-profile/api/company-profile-detail-mock.ts
import { IconName } from "@/assets/icons/local-icon";
import { ImageName } from "@/assets/images/local-image";
import {
  CompanyCardProps,
  LinkSocialItemProps,
  TechPros,
  LocationItemPros,
} from "@/features/company-profile/components/types";

export const mockCompanyDetailMain: CompanyCardProps[] = [
  {
    title: "Company Profile",
    description: "Stripe is a software platform for starting and running internet businesses...",
  },
  {
    title: "Contact",
    linkSocialItem: [
      {
        icon: "twitterIcon" as IconName,
        link: "https://instagram.com/company",
        title: "twitter.com/stripe",
      },
      {
        icon: "faceBookIcon" as IconName,
        link: "https://facebook.com/company",
        title: "facebook.com/StripeHQ",
      },
      {
        icon: "linkedinIcon" as IconName,
        link: "https://linkedin.com/company",
        title: "linkedin.com/company",
      },
    ] satisfies LinkSocialItemProps[],
  },
  {
    title: "",
    gallery: [
      "bigImage" as ImageName,
      "smallImg" as ImageName,
      "smallImg" as ImageName,
      "smallImg" as ImageName,
    ],
  },
];

export const mockCompanyDetailSidebar: CompanyCardProps[] = [
  {
    title: "Tech Stack",
    techStackItem: [
      { image: "jsImg" as ImageName, name: "JavaScript" },
      { image: "htmlImg" as ImageName, name: "HTML5" },
      { image: "cssImg" as ImageName, name: "CSS3" },
    ] satisfies TechPros[],
    viewMore: "/tech-stack",
    viewMoreText: "View tech stack →",
  },
  {
    title: "Office Locations",
    officeLocation: [
      { image: "japanImg" as ImageName, name: "Tokyo, Japan" },
      { image: "americaImg" as ImageName, name: "New York, USA" },
    ] satisfies LocationItemPros[],
    viewMore: "/locations",
    viewMoreText: "View countries →",
  },
];
