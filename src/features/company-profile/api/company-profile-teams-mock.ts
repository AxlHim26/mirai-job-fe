import { CompanyTeamProps } from "@/features/company-profile/components/types";

export const mockCompanyTeam: CompanyTeamProps = {
  employees: 125,
  members: [
    {
      avatar: "avatarImg",
      name: "Célestin Gardinier",
      position: "CEO & Co-Founder",
    },
    { avatar: "avatarImg", name: "Marie Curie", position: "CTO" },
    { avatar: "avatarImg", name: "Nikola Tesla", position: "Lead Engineer" },
    { avatar: "avatarImg", name: "Ada Lovelace", position: "Product Manager" },
    { avatar: "avatarImg", name: "Grace Hopper", position: "UX Designer" },
  ],
};
