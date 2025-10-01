import { ChevronRight } from "lucide-react";
import { jobListings } from "../../api/dashboard.mock";

export const Updates = () => {
    return (
        <div className="bg-white rounded-xl p-6 mt-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Job Updates</h2>
            <button className="text-indigo-600 font-medium flex items-center gap-1">
              View All <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {jobListings.map((job) => (
              <div
                key={job.id}
                className="border border-gray-200 rounded-lg p-4"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg">
                    {job.logo}
                  </div>
                  <div className="flex-1">
                    <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded">
                      {job.type}
                    </span>
                  </div>
                </div>

                <h3 className="font-semibold text-gray-900 mb-1">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {job.company} • {job.location}
                </p>

                <div className="flex gap-2 mb-4">
                  {job.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="text-sm text-gray-600">
                  <span className="font-medium">{job.applied} applied</span> of{" "}
                  {job.capacity} capacity
                </div>
              </div>
            ))}
          </div>
        </div>
    );
}