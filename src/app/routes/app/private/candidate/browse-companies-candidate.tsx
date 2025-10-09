import {
  BrowseCompaniesGrid,
  BrowseFilter,
  BrowseHeader,
} from "@/features/browse-companies";

const BrowseCompaniesCandidate = () => {
  return (
    <div className="flex-1 bg-gray-50 overflow-y-auto">
      <BrowseHeader />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-8">
          <BrowseFilter />
          <BrowseCompaniesGrid />
        </div>
      </div>
    </div>
  );
};

export default BrowseCompaniesCandidate;
