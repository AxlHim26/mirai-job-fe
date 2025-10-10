import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui";

type JobPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export const JobPagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: JobPaginationProps) => {
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
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex items-center justify-center mt-8">
      <div className="flex items-center space-x-2">
        <Button
          variant="outlined"
          size="sm"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          startIcon={<ChevronLeft className="h-5 w-5" />}
          className="rounded-l-md"
        />

        {getVisiblePages().map((page, index) => (
          <Button
            key={index}
            variant={page === currentPage ? "filled" : "outlined"}
            size="sm"
            onClick={() => typeof page === "number" && onPageChange(page)}
            disabled={page === "..."}
            className={
              page === currentPage
                ? "bg-blue-50 border-blue-500 text-blue-600"
                : page === "..."
                  ? "cursor-default"
                  : ""
            }
          >
            {page}
          </Button>
        ))}

        <Button
          variant="outlined"
          size="sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          endIcon={<ChevronRight className="h-5 w-5" />}
          className="rounded-r-md"
        />
      </div>
    </div>
  );
};
