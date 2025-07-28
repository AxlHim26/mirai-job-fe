import { create } from "zustand";
import { format } from "date-fns";
import { Range, RangeKeyDict } from "react-date-range";

interface DateRangeState {
  ranges: Range[];
  showCalendar: boolean;
  dateRangeText: string;

  setShowCalendar: (show: boolean) => void;
  handleRangeChange: (rangesByKey: RangeKeyDict) => void;
}

const initialStart = new Date();
const initialEnd = new Date();

const initialRange: Range[] = [
  {
    startDate: initialStart,
    endDate: initialEnd,
    key: "selection",
  },
];

export const useDateRangeStore = create<DateRangeState>((set) => ({
  ranges: initialRange,
  showCalendar: false,
  dateRangeText: `${format(initialStart, "MMM dd")} - ${format(initialEnd, "MMM dd")}`,

  setShowCalendar: (show) => set({ showCalendar: show }),

  handleRangeChange: (rangesByKey: RangeKeyDict) => {
    const updatedSelection = rangesByKey["selection"];
    const start = updatedSelection?.startDate;
    const end = updatedSelection?.endDate;

    const newText =
      start && end
        ? `${format(start, "MMM dd")} - ${format(end, "MMM dd")}`
        : "Select date";

    set({
      ranges: [updatedSelection],
      dateRangeText: newText,
    });
  },
}));
