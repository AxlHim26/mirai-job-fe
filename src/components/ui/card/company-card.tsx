interface CompanyCardProps {
  id: number;
  name: string;
  logo: string;
  jobsQuantity: number;
  description: string;
  tags: string[];
}

const CompanyCard: React.FC<CompanyCardProps> = ({
  name,
  logo,
  jobsQuantity,
  description,
  tags,
}) => {
  return (
    <div className="flex flex-col items-start justify-center gap-2.5 p-4 border border-[#D6DDEB] rounded cursor-pointer">
      <div className="flex justify-between w-full items-center mb-2">
        <img
          src={logo}
          alt={`${name} logo`}
          className="object-contain"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
        <h2 className="text-[#4640DE] bg-[#F8F8FD] p-2 font-normal text-[16px]">
          {jobsQuantity} Jobs
        </h2>
      </div>
      <h1 className="font-semibold text-2xl text-[#25324B]">{name}</h1>
      <p className="text-[#515B6F] text-lg font-normal">{description}</p>
      <div className="flex gap-2">
        {tags.map((tag, index) => {
          const isFirst = index === 0;
          const tagColor = isFirst ? "#FFB836" : "#56CDAD";

          return (
            <p
              key={index}
              className={`font-semibold text-sm rounded-[80px] border p-2`}
              style={{ color: tagColor, borderColor: tagColor }}
            >
              {tag}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default CompanyCard;
