interface SectionTitleProps {
  title: string;
}

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
    </div>
  );
};
