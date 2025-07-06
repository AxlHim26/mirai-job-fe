import { LocalImage } from "@/assets/images/local-image";

export interface CompanyCardProps {
  id: number;
  name: string;
  logo: string;
  jobsQuantity: number;
}

const CompanyResultCard: React.FC<CompanyCardProps> = ({ name, jobsQuantity }) => {
  return (
    <div className="flex flex-col items-center gap-8 border border-[#D6DDEB] rounded p-6 bg-white cursor-pointer">
      <LocalImage
        imageName="companyLogo"
        height={88}
        width={88}
      />
      <h1 className="text-[#25324B] text-2xl font-semibold">{name}</h1>
      <h2 className="text-[#4640DE] text-[16px] font-normal">
        {jobsQuantity} jobs
      </h2>
    </div>
  );
};

export default CompanyResultCard;
