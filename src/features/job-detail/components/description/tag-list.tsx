import { log } from "console";

interface TagListProps {
  items: string[];
  isColor?: boolean
}

const getRandomHslColor = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = 60;
  const lightness = 90;
  console.log("render");
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`; 
};

export const TagList = ({ items, isColor = false }: TagListProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, i) => {
        return (
          <span
            key={i}
            style={isColor ? { background: getRandomHslColor(), color: "#333" }: {}}
            className="inline-block px-3 py-1 rounded-full text-sm bg-gray-100 text-blue-700"
          >
            {item}
          </span>
        );
      })}
    </div>
  );
};
