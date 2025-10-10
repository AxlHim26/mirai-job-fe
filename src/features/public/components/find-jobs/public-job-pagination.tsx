import { ChevronLeft, ChevronRight } from "lucide-react";

type PublicJobPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export const PublicJobPagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PublicJobPaginationProps) => {
  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else if (totalPages > 0) {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else if (totalPages > 1 && !range.includes(totalPages)) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      <button
        className="p-2 hover:bg-gray-100 rounded disabled:opacity-40"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft size={20} />
      </button>

      {getVisiblePages().map((page, index) => {
        if (page === "...") {
          return <span key={index}>...</span>;
        }

        return (
          <button
            key={index}
            onClick={() => onPageChange(page as number)}
            className={`w-10 h-10 rounded font-medium ${
              currentPage === page
                ? "bg-indigo-600 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        className="p-2 hover:bg-gray-100 rounded disabled:opacity-40"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};
