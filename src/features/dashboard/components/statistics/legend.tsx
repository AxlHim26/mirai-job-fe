export const Legend = () => {
  const legends = [
    { color: "bg-yellow-400", label: "Job View" },
    { color: "bg-indigo-600", label: "Job Applied" },
  ];
  return (
    <div className="flex gap-4 text-sm">
      {legends.map((legend, index) => (
        <div
          key={index}
          className="flex items-center gap-2"
        >
          <div className={`w-3 h-3 rounded ${legend.color}`}></div>
          <span className="text-gray-600">{legend.label}</span>
        </div>
      ))}
    </div>
  );
};
