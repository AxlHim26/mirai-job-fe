import { BenefitCard } from "./benefit-card";

interface BenefitItem {
  title: string;
  description: string;
}

interface JobBenefitsProps {
  benefits: BenefitItem[];
}

export const JobBenefits = ({ benefits }: JobBenefitsProps) => {
  return (
    <>
      <section className="my-16 px-32">
        <h2 className="text-[32px] font-bold text-gray-800">
          Perks & Benefits
        </h2>
        <p className="text-gray-700 text-[16px] mb-1">
          This job comes with several perks and benefits
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </section>
      <div className="w-[83%] border-b border-gray-400 mx-auto" />
    </>
  );
};
