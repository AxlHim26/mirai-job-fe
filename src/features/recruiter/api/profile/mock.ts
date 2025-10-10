import { CompanyProfile } from "@/types";

export const mockCompanyProfile = (): { profile: CompanyProfile } => {
  return {
    profile: {
      id: 1,
      name: "Nomad",
      website: "https://nomad.com",
      logo: "N",
      founded: "July 31, 2011",
      employees: "4000+",
      location: "20 countries",
      industry: "Social & Non-Profit",
      description:
        "Nomad is a software platform for internet businesses. We rely on Stripe's tools to accept payments, send payouts, and manage our businesses online. We've expanded globally and are now available in 20 countries. We're building economic infrastructure and preventing fraud through advanced machine learning. Stripe is built for developers, makers, and creators. We're working on technical problems for global economic infrastructure, including reliable systems and advanced machine learning for fraud prevention.",
      contact: {
        twitter: "twitter.com/Nomad",
        facebook: "facebook.com/NomadHQ",
        linkedin: "linkedin.com/company/nomad",
        email: "nomad@gmail.com",
      },
      techStack: [
        { id: 1, name: "HTML 5", icon: "HTML", color: "red" },
        { id: 2, name: "CSS 3", icon: "CSS", color: "blue" },
        { id: 3, name: "JavaScript", icon: "JS", color: "yellow" },
        { id: 4, name: "Ruby", icon: "Ruby", color: "red" },
        { id: 5, name: "Mixpanel", icon: "Mixpanel", color: "purple" },
        { id: 6, name: "Framer", icon: "Framer", color: "black" },
      ],
      officeLocations: [
        { id: 1, country: "United States", flag: "🇺🇸", isHeadquarters: true },
        { id: 2, country: "England", flag: "🇬🇧" },
        { id: 3, country: "Japan", flag: "🇯🇵" },
        { id: 4, country: "Australia", flag: "🇦🇺" },
        { id: 5, country: "China", flag: "🇨🇳" },
      ],
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
    },
  };
};
