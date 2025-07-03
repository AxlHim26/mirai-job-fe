interface BenefitCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export const BenefitCard = ({
  title,
  description,
  icon = "💼",
}: BenefitCardProps) => (
  <div className="bg-white p-6 flex flex-col items-start text-left">
    <div className="text-indigo-600 text-4xl mb-4">{icon}</div>
    {/*wait for local-icon */}
    <h3 className="text-[20px] font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-700 text-[16px]">{description}</p>
  </div>
);
