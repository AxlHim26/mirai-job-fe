import {
  CompanyDetail,
  CompanyProfileHeader,
  CompanyTeam,
} from "@/components/sections/company-profile";
import { mockCompanyProfile } from "@/features/company-profile/api/company-profile-mock";
import { mockCompanyTeam } from "@/features/company-profile/api/company-profile-teams-mock";
import {
  mockCompanyDetailMain,
  mockCompanyDetailSidebar,
} from "@/features/company-profile/api/company-detail-data";

export const CompanyProfilePage = () => {
  return (
    <>
      <CompanyProfileHeader {...mockCompanyProfile} />
      <CompanyDetail
        mainSections={mockCompanyDetailMain}
        sidebarSections={mockCompanyDetailSidebar}
      />
      <CompanyTeam {...mockCompanyTeam} />
    </>
  );
};

