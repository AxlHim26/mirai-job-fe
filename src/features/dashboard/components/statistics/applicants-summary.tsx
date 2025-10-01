export const ApplicantsSummary = () => {
  const applicantTypes = [
    { color: "bg-indigo-500", label: "Full Time", value: 45 },
    { color: "bg-yellow-500", label: "Internship", value: 32 },
    { color: "bg-teal-500", label: "Part Time", value: 24 },
    { color: "bg-red-500", label: "Contract", value: 30 },
    { color: "bg-blue-500", label: "Remote", value: 22 },
  ];
  return (
    <div className="bg-white rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-4">Applicants Summary</h3>

      <div className="text-center mb-4">
        <div className="text-4xl font-bold text-gray-900 mb-1">67</div>
        <div className="text-gray-500">Applicants</div>
      </div>

      <div className="space-y-3">
        {applicantTypes.map((type, index) => (
          <div
            key={index}
            className="flex items-center justify-between text-sm"
          >
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded ${type.color}`}></div>
              <span>{type.label}</span>
            </div>
            <span className="font-medium">{type.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
