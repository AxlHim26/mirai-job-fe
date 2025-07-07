interface Props {
  applied: number;
  capacity: number;
}

export const ApplyProgressBar = ({ applied, capacity }: Props) => {
  const percent = Math.min((applied / capacity) * 100, 100);
  return (
    <div className="mb-4">
      <p className="text-gray-700 mb-2">
        {applied} applied of {capacity} capacity
      </p>
      <div className="h-2 bg-gray-200 rounded-full">
        <div
          className="h-full bg-green-500 rounded-full"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};
