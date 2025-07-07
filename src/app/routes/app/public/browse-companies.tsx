import { LocalIcon } from "@/assets/icons/local-icon";
import { companyLogo } from "@/assets/images";
import { LandingFooter, LandingHeader } from "@/components/layouts/landing";
import CompanyCard from "@/components/ui/card/CompanyCard";
import HorizontalCategoryCarousel from "@/components/ui/carousel/CategoryCarousel";

const BrowseCompaniesRoute = () => {
  const companies = [
    {
      id: 1,
      name: "Abc",
      logo: companyLogo,
      jobsQuantity: 3,
      description:
        "Nomad is located in Paris, France. Nomad has generates $728,000 in sales (USD).",
      tags: ["anha", "asas"],
    },
    {
      id: 2,
      name: "XYZ Corp",
      logo: companyLogo,
      jobsQuantity: 5,
      description: "XYZ Corp is a leading tech company based in New York, USA.",
      tags: ["tech", "innovation"],
    },
    {
      id: 3,
      name: "Tech Innovators",
      logo: companyLogo,
      jobsQuantity: 2,
      description:
        "Tech Innovators specializes in AI and machine learning solutions.",
      tags: ["AI", "machine learning"],
    },
    {
      id: 4,
      name: "Global Solutions",
      logo: companyLogo,
      jobsQuantity: 4,
      description:
        "Global Solutions provides consulting services worldwide with a focus on sustainability.",
      tags: ["consulting", "sustainability"],
    },
    {
      id: 5,
      name: "Creative Minds",
      logo: companyLogo,
      jobsQuantity: 6,
      description:
        "Creative Minds is a design agency known for its innovative approach to branding.",
      tags: ["design", "branding"],
    },
    {
      id: 6,
      name: "Creative Minds",
      logo: companyLogo,
      jobsQuantity: 6,
      description:
        "Creative Minds is a design agency known for its innovative approach to branding.",
      tags: ["design", "branding"],
    },
  ];

  return (
    <>
      <LandingHeader />

      <div className="flex flex-col items-start justify-center gap-6 pt-[72px] px-[124px] w-full ">
        <div>
          <h1 className="text-[#25324B] font-semibold text-3xl lg:text-4xl ">
            Recommended Companies
          </h1>
          <h1 className="text-[#7C8493] font-normal text-lg">
            Based on your profile, company preferences, and recent activity
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
          {companies.map((company) => (
            <CompanyCard
              key={company.id}
              id={company.id}
              name={company.name}
              logo={company.logo}
              jobsQuantity={company.jobsQuantity}
              description={company.description}
              tags={company.tags}
            />
          ))}
        </div>
      </div>
      <div className="w-full p-3 px-[124px] pt-8 flex flex-col gap-5">
        <h1 className="text-[#25324B] font-semibold text-4xl">
          Companies by Category
        </h1>
        <HorizontalCategoryCarousel />
        <div className="flex items-center gap-4">
          <LocalIcon
            iconName="iconWhite"
            height={35}
            width={35}
          />
          <h1 className="text-[#25324B] font-semibold text-2xl lg:text-4xl">
            24 Results
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
          {companies.map((company) => (
            <CompanyResultCard
              key={company.id}
              id={company.id}
              name={company.name}
              logo={company.logo}
              jobsQuantity={company.jobsQuantity}
            />
          ))}
        </div>
        <div className="text-[#4640DE] flex items-center gap-3 w-full p-5 cursor-pointer">
          <h1 className="font-semibold text-[16px]">
            View more Design companies
          </h1>
          <LocalIcon
            iconName="arrowRight"
            height={25}
            width={25}
          />
        </div>
      </div>
      <LandingFooter />
    </>
  );
};

export default BrowseCompaniesRoute;
