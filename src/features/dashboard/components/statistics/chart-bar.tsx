interface ChartBarProps {
  day: string;
  views: number;
  applied: number;
  maxValue: number;
}

export const ChartBar = ({ day, views, applied, maxValue }: ChartBarProps) => {
  const getHeight = (value: number) => `${(value / maxValue) * 150}px`;

  return (
    <div className="flex flex-col items-center gap-2 flex-1">
      <div className="flex flex-col items-center gap-1 w-full max-w-16">
        <div
          className="bg-yellow-400 rounded-t-lg w-8"
          style={{ height: getHeight(views) }}
        ></div>
        <div
          className="bg-indigo-600 rounded-b-lg w-8"
          style={{ height: getHeight(applied) }}
        ></div>
      </div>
      <span className="text-xs text-gray-500">{day}</span>
    </div>
  );
};
