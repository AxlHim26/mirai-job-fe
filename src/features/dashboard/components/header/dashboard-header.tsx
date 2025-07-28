import { useDateRangeStore } from "@/hooks/use-date-range-store";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export const DashboardHeader = () => {
  const ranges = useDateRangeStore((s) => s.ranges);
  const showCalendar = useDateRangeStore((s) => s.showCalendar);
  const setShowCalendar = useDateRangeStore((s) => s.setShowCalendar);
  const handleRangeChange = useDateRangeStore((s) => s.handleRangeChange);
  const dateRangeText = useDateRangeStore((s) => s.dateRangeText);

  return (
    <div className="flex justify-between items-start mb-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Good morning, Maria
        </h1>
        <p className="text-gray-600">
          Here is your job listings statistic report from {dateRangeText}
        </p>
      </div>

      <div className="relative inline-block text-sm text-gray-600">
        <div
          className="flex items-center gap-2 px-3 py-2 border rounded cursor-pointer"
          onClick={() => setShowCalendar(!showCalendar)}
        >
          📅 {dateRangeText}
        </div>

        {showCalendar && (
          <div className="absolute z-10 mt-2 border rounded shadow-lg bg-white">
            <DateRange
              editableDateInputs={true}
              onChange={handleRangeChange}
              moveRangeOnFirstSelection={false}
              ranges={ranges}
            />
          </div>
        )}
      </div>
    </div>
  );
};
