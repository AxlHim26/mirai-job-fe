import { useRef, useState, useEffect } from "react";
import { LocalIcon } from "@/assets/icons/local-icon";

const categories = [
  { name: "Design", iconName: "design" },
  { name: "Fintech", iconName: "design" },
  { name: "Hosting", iconName: "design" },
  { name: "Business", iconName: "design" },
  { name: "Developer", iconName: "design" },
  { name: "Market", iconName: "design" },
  { name: "Market", iconName: "design" },
  { name: "Market", iconName: "design" },
];

export default function HorizontalCategoryCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("Design");
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollByAmount = 300;

  const checkScrollPosition = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollLeft = () => {
    containerRef.current?.scrollBy({
      left: -scrollByAmount,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    containerRef.current?.scrollBy({
      left: scrollByAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollPosition);
      checkScrollPosition();
    }
    return () => {
      container?.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[2000px]">
      {showLeftArrow && (
        <button
          onClick={scrollLeft}
          className="flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-[#4640DE] text-white p-2 cursor-pointer shadow active:scale-95 transition rounded"
        >
          <LocalIcon iconName="arrowLeft" />
        </button>
      )}

      {showRightArrow && (
        <button
          onClick={scrollRight}
          className="flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-[#4640DE] text-white p-2 cursor-pointer shadow active:scale-95 transition rounded"
        >
          <LocalIcon iconName="arrowRight" />
        </button>
      )}

      <div
        ref={containerRef}
        className="overflow-x-auto scroll-smooth px-4 hide-scrollbar"
        onScroll={checkScrollPosition}
      >
        <div className="flex w-max gap-4 py-6">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`group flex flex-col gap-8 p-8 items-start border-[#D6DDEB] border rounded hover:bg-[#4640DE] hover:text-white w-[220px] sm:w-[240px] md:w-[270px] h-[170px] shrink-0 cursor-pointer transition" 
                ${
                  activeCategory === cat.name
                    ? "bg-[#4640DE] text-white border-[#4640DE]"
                    : "bg-white text-[#25324B] border-gray-200 hover:border-[#4640DE]"
                }`}
            >
              <LocalIcon
                iconName="iconWhite"
                className={`group-hover:text-[#4640DE] transition-colors duration-300 ${
                  activeCategory === cat.name ? "text-white" : "text-[#4640DE] group-hover:text-white"}`}
              />
              <span className="mt-2 font-medium">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
