import { PublicJobListing } from "../../api/jobs";
import { PublicJobListItem } from "./public-job-list-item";

type PublicJobListViewProps = {
  jobs: PublicJobListing[];
  loading?: boolean;
};

export const PublicJobListView = ({
  jobs,
  loading,
}: PublicJobListViewProps) => {
  if (loading) {
    return (
      <div className="space-y-4 animate-pulse">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="bg-gray-200 rounded-lg h-32"
          ></div>
        ))}
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        No jobs found matching your criteria.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <PublicJobListItem
          key={job.id}
          job={job}
        />
      ))}
    </div>
  );
};
