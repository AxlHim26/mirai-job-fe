import { api } from "@/lib/api-client";
import {
  CompanyProfile,
  CompanyProfileResponse,
  RestResponse,
  RecruiterResponse,
} from "@/types";
import { useQuery } from "@tanstack/react-query";

// Convert RecruiterResponse to CompanyProfile format
const convertToCompanyProfile = (
  recruiterData: RecruiterResponse
): CompanyProfile => {
  return {
    id: 1, // Default ID since we don't have it in RecruiterResponse
    name: recruiterData.name,
    website: recruiterData.website,
    logo: recruiterData.avatar || "N", // Use avatar as logo or default "N"
    founded: recruiterData.foundedDate || "Unknown",
    employees: recruiterData.employee || "Unknown",
    location: recruiterData.location?.join(", ") || "Unknown",
    industry: recruiterData.industry || "Unknown",
    description: recruiterData.description || "No description available",
    contact: {
      // From SocialLink entity
      twitter: recruiterData.twitter || "",
      facebook: recruiterData.facebook || "",
      linkedin: recruiterData.linkedin || "",
      email: recruiterData.email || "",
    },
    techStack:
      recruiterData.techStack?.map((tech, index) => ({
        id: index + 1,
        name: tech,
        icon: tech.substring(0, 2).toUpperCase(),
        color: "blue",
      })) || [],
    officeLocations:
      recruiterData.location?.map((loc, index) => ({
        id: index + 1,
        country: loc,
        flag: "🏢", // Default flag
        isHeadquarters: index === 0,
      })) || [],
    // Keep mock data for these sections to maintain UI
    teamMembers: [
      {
        id: 1,
        name: "Célestin Gardinier",
        position: "CEO & Co-Founder",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        instagram: "celestin_gardinier",
        linkedin: "celestin-gardinier",
      },
      {
        id: 2,
        name: "Reynaud Colbert",
        position: "Co-Founder",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        instagram: "reynaud_colbert",
        linkedin: "reynaud-colbert",
      },
      {
        id: 3,
        name: "Arienne Lyon",
        position: "Managing Director",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        instagram: "arienne_lyon",
        linkedin: "arienne-lyon",
      },
    ],
    benefits: [
      {
        id: 1,
        title: "Full Healthcare",
        description:
          "We believe in thriving communities and that starts with our team being happy and healthy.",
        icon: "stethoscope",
      },
      {
        id: 2,
        title: "Unlimited Vacation",
        description:
          "We believe you should have a flexible schedule that makes space for family, wellness, and fun.",
        icon: "pool",
      },
      {
        id: 3,
        title: "Skill Development",
        description:
          "We believe in always learning and leveling up our skills. Whether it's a conference or online course.",
        icon: "camera",
      },
    ],
    workingImages: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
    ],
  };
};

export const fetchCompanyProfile = async (): Promise<
  RestResponse<CompanyProfileResponse>
> => {
  const response = (await api.get(
    "/recruiter/profile"
  )) as RestResponse<RecruiterResponse>;

  // Convert RecruiterResponse to CompanyProfile format
  const companyProfile = convertToCompanyProfile(response.data);

  return {
    ...response,
    data: {
      profile: companyProfile,
    },
  };
};

export const useCompanyProfile = () => {
  return useQuery({
    queryKey: ["company-profile"],
    queryFn: fetchCompanyProfile,
    select: (res) => res.data,
  });
};
