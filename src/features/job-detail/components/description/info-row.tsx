interface InfoRowProps {
  label: string;
  value: string;
}

export const InfoRow = ({ label, value }: InfoRowProps) => (
  <span className="flex justify-between text-gray-700 text-[16px]">
    <p>{label}</p>
    <p className="font-semibold">{value}</p>
  </span>
);
