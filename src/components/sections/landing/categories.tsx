import { ChevronRight } from "lucide-react";
import {
  Briefcase,
  Code,
  DollarSign,
  Users,
  Monitor,
  Building,
} from "lucide-react";

export const Categories = () => {
  const categories = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      name: "Design",
      jobs: "235 jobs available",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      name: "Sales",
      jobs: "756 jobs available",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      name: "Marketing",
      jobs: "140 jobs available",
      color: "bg-blue-600 text-white",
    },
    {
      icon: <Building className="w-6 h-6" />,
      name: "Finance",
      jobs: "325 jobs available",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: <Code className="w-6 h-6" />,
      name: "Technology",
      jobs: "436 jobs available",
      color: "bg-gray-100 text-gray-600",
    },
    {
      icon: <Code className="w-6 h-6" />,
      name: "Engineering",
      jobs: "542 jobs available",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      name: "Business",
      jobs: "211 jobs available",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      icon: <Users className="w-6 h-6" />,
      name: "Human Resource",
      jobs: "346 jobs available",
      color: "bg-pink-100 text-pink-600",
    },
  ];
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Explore by <span className="text-blue-600">category</span>
          </h2>
          <button className="text-blue-600 font-medium flex items-center gap-2 hover:gap-3 transition-all">
            Show all jobs <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div
                className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4`}
              >
                {category.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {category.name}
              </h3>
              <p className="text-gray-500 text-sm">{category.jobs}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
