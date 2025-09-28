import { LocalIcon } from "@/assets/icons/local-icon";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if(totalPages <= 1){
      return [];
    }

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);

      if (currentPage > 3) pages.push("...");

      const middlePages = [
        currentPage - 1,
        currentPage,
        currentPage + 1,
      ].filter((page) => page > 1 && page < totalPages);

      pages.push(...middlePages);

      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`text-gray-500 disabled:opacity-50 ${totalPages === 0 ? "hidden" : ""}`}
      >
        <LocalIcon
          iconName="ChevronLeft"
          width={20}
          height={20}
        />
      </button>

      {getPageNumbers().map((page, idx) =>
        page === "..." ? (
          <span
            key={`dots-${idx}`}
            className="px-2 text-gray-400"
          >
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => typeof page === "number" && onPageChange(page)}
            className={`px-3 py-1 rounded ${
              page === currentPage
                ? "bg-indigo-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        )
      )}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`text-gray-500 disabled:opacity-50 ${totalPages === 0 ? "hidden" : ""}`}
      >
        <LocalIcon
          iconName="ChevronRight"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
};
