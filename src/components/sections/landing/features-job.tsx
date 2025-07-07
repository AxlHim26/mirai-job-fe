import { MapPin, ChevronRight, Heart, Bookmark } from "lucide-react";

const featuredJobs = [
  {
    id: 1,
    title: "Social Marketing",
    company: "Nomad",
    location: "Paris, France",
    type: "Full-Time",
    tags: ["Marketing", "Design"],
    salary: "$30,000 - $35,000",
    logo: "N",
    featured: true,
  },
  {
    id: 2,
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Francisco, US",
    type: "Full-Time",
    tags: ["Design", "Business"],
    salary: "$40,000 - $50,000",
    logo: "D",
    featured: true,
  },
  {
    id: 3,
    title: "Email Marketing",
    company: "Reddit",
    location: "New York, US",
    type: "Full-Time",
    tags: ["Marketing"],
    salary: "$35,000 - $45,000",
    logo: "R",
    featured: false,
  },
  {
    id: 4,
    title: "Visual Designer",
    company: "Pinterest",
    location: "Remote",
    type: "Full-Time",
    tags: ["Design"],
    salary: "$45,000 - $55,000",
    logo: "P",
    featured: true,
  },
  {
    id: 5,
    title: "Product Designer",
    company: "ClassPass",
    location: "Berlin, Germany",
    type: "Full-Time",
    tags: ["Design", "Research"],
    salary: "$40,000 - $50,000",
    logo: "C",
    featured: false,
  },
  {
    id: 6,
    title: "Lead Designer",
    company: "Revolut",
    location: "Madrid, Spain",
    type: "Full-Time",
    tags: ["Design", "Leadership"],
    salary: "$60,000 - $70,000",
    logo: "R",
    featured: true,
  },
];

export const FeaturesJob = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Featured <span className="text-blue-600">jobs</span>
          </h2>
          <button className="text-blue-600 font-medium flex items-center gap-2 hover:gap-3 transition-all">
            Show all jobs <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div
                  className={`w-12 h-12 rounded-lg ${job.featured ? "bg-blue-600" : "bg-gray-200"} text-white flex items-center justify-center font-semibold`}
                >
                  {job.logo}
                </div>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Bookmark className="w-4 h-4 text-gray-400" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Heart className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>

              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                {job.title}
              </h3>
              <p className="text-gray-600 mb-2">{job.company}</p>
              <p className="text-gray-500 text-sm mb-4 flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {job.location}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {job.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-green-100 text-green-600 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <span className="font-semibold text-blue-600">
                  {job.salary}
                </span>
                <span className="text-sm text-gray-500">{job.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
