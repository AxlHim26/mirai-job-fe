import { LoaclIcon } from "@/assets/icons/local-icon";

interface SectionBlockProps {
  title: string;
  items: string[] | string;
  isList?: boolean;
}



export const SectionBlock = ({
  title,
  items,
  isList = false,
}: SectionBlockProps) => (
  <section className="mb-10">
    <h2 className="text-[32px] font-bold text-gray-800 mb-4">{title}</h2>

    {Array.isArray(items) && isList ? (
      <ul className="text-gray-500 space-y-1 text-[16px]">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-2"
          >
            <LoaclIcon
              iconName="SectionBlockIcon"
              width={20}
              height={20}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-gray-500 leading-relaxed text-[16px]">{items}</p>
    )}
  </section>
);


