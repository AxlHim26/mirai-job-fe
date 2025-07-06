import { CompanyIntro } from "./company-intro";
import { CompanyGallery } from "./company-gallery";

interface CompanyAboutSectionProps {
  companyName: string;
  companyLogoSrc: string;
  companyDescription: string;
  companyGalleryImages?: string[];
}
export const CompanyAboutSection = (props: CompanyAboutSectionProps) => {
  const {
    companyName,
    companyLogoSrc,
    companyDescription,
    companyGalleryImages = [],
  } = props;
  return (
    <section className="bg-white p-8 my-16 px-32">
      <div className="flex flex-col md:flex-row items-start md:space-x-12">
        <CompanyIntro
          name={companyName}
          logo={companyLogoSrc}
          description={companyDescription}
        />

        <CompanyGallery images={companyGalleryImages || []} />
      </div>
    </section>
  );
};
