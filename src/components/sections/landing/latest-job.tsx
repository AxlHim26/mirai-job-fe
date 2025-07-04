import { MapPin, ChevronRight, Bookmark } from "lucide-react";

export const LatestJob = () => {
  const latestJobs = [
    {
      id: 1,
      title: "Social Media Assistant",
      company: "Nomad",
      location: "Paris, France",
      type: "Full-Time",
      tags: ["Marketing", "Social Media"],
      logo: "N",
      color: "bg-orange-100",
    },
    {
      id: 2,
      title: "Social Media Assistant",
      company: "ClassPass",
      location: "Berlin, Germany",
      type: "Full-Time",
      tags: ["Marketing"],
      logo: "C",
      color: "bg-green-100",
    },
    {
      id: 3,
      title: "Brand Designer",
      company: "Dropbox",
      location: "San Francisco, US",
      type: "Full-Time",
      tags: ["Design", "Brand"],
      logo: "D",
      color: "bg-blue-100",
    },
    {
      id: 4,
      title: "Brand Designer",
      company: "ClassPass",
      location: "Berlin, Germany",
      type: "Full-Time",
      tags: ["Design"],
      logo: "C",
      color: "bg-purple-100",
    },
    {
      id: 5,
      title: "Interactive Developer",
      company: "Terraform",
      location: "Hamburg, Germany",
      type: "Full-Time",
      tags: ["Development", "Frontend"],
      logo: "T",
      color: "bg-cyan-100",
    },
    {
      id: 6,
      title: "Interactive Developer",
      company: "Terraform",
      location: "Hamburg, Germany",
      type: "Full-Time",
      tags: ["Development"],
      logo: "T",
      color: "bg-indigo-100",
    },
    {
      id: 7,
      title: "HR Manager",
      company: "Lidl",
      location: "London, UK",
      type: "Full-Time",
      tags: ["HR", "Management"],
      logo: "L",
      color: "bg-red-100",
    },
    {
      id: 8,
      title: "HR Manager",
      company: "Revolut",
      location: "Madrid, Spain",
      type: "Full-Time",
      tags: ["HR"],
      logo: "R",
      color: "bg-blue-100",
    },
  ];
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Latest <span className="text-blue-600">jobs open</span>
          </h2>
          <button className="text-blue-600 font-medium flex items-center gap-2 hover:gap-3 transition-all">
            Show all jobs <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {latestJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-lg ${job.color} flex items-center justify-center font-semibold text-gray-700`}
                >
                  {job.logo}
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    {job.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{job.company}</p>
                  <p className="text-gray-500 text-sm mb-3 flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="px-3 py-1 bg-green-100 text-green-600 text-xs rounded-full">
                      {job.type}
                    </span>
                  </div>
                </div>

                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Bookmark className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
