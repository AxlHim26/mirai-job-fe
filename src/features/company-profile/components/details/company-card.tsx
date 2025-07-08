import React from "react";
import { LocalIcon } from "@/assets/icons/local-icon";
import { LocalImage } from "@/assets/images/local-image";
import { CompanyCardProps } from "@/features/company-profile/components/types";
import { LinkSocialItemProps } from "@/features/company-profile/components/types";
import { TechPros } from "@/features/company-profile/components/types";
import { Link } from "react-router-dom";

const LinkSocialItem: React.FC<LinkSocialItemProps> = ({
  icon,
  link,
  title,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-3 py-2 gap-2 border border-[#D6DDEB] rounded-[4px] text-[#4640DE] text-sm font-medium"
    >
      <LocalIcon
        iconName={icon}
        className="w-4 h-4 shrink-0"
      />
      <span>{title}</span>
    </a>
  );
};

const CompanyTechCard: React.FC<TechPros> = ({ image, name }) => {
  return (
    <div className="flex flex-col items-center gap-[10px] p-[12px] rounded-[4px]">
      <LocalImage imageName={image} />
      <span className="text-[#25324B] font-medium">{name}</span>
    </div>
  );
};

export const CompanyCard: React.FC<CompanyCardProps> = ({
  title,
  description,
  linkSocialItem,
  techStackItem,
  officeLocation,
  viewMore,
  viewMoreText,
  gallery,
}) => {
  return (
    <div className="flex flex-col items-start gap-4 w-[752px]">
      <h3 className="text-[#25324B] font-clash text-[32px] font-semibold leading-[120%]">
        {title}
      </h3>
      {description && (
        <p className="text-[#515B6F] font-epilogue text-[16px] font-normal leading-[160%]">
          {description}
        </p>
      )}
      {linkSocialItem && (
        <div className="flex flex-row gap-4">
          {linkSocialItem.map((item) => (
            <LinkSocialItem
              icon={item.icon}
              link={item.link}
              title={item.title}
            />
          ))}
        </div>
      )}
      {gallery && gallery.length >= 4 && (
        <div className="flex items-start gap-4">
          <div className="w-[478px] h-[606px] overflow-hidden rounded-lg shrink-0">
            <LocalImage
              imageName={gallery[0]}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-4 w-[200px] h-[606px]">
            {gallery.slice(1, 4).map((imageName, index) => (
              <div
                key={index}
                className="flex-1 self-stretch overflow-hidden rounded-lg"
              >
                <LocalImage
                  imageName={imageName}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {techStackItem && (
        <div className="flex flex-col items-start gap-[8px]">
          {Array.from(
            { length: Math.ceil(techStackItem.length / 3) },
            (_, i) => (
              <div
                key={i}
                className="flex items-start gap-[10px]"
              >
                {techStackItem.slice(i * 3, i * 3 + 3).map((item, index) => (
                  <CompanyTechCard
                    key={index}
                    image={item.image}
                    name={item.name}
                  />
                ))}
              </div>
            )
          )}
        </div>
      )}

      {officeLocation && (
        <div className="flex flex-col gap-4">
          {officeLocation.map((item) => (
            <div className="flex items-center gap-2 p-2 border border-[#D6DDEB] rounded-[4px]">
              <LocalImage
                imageName={item.image}
                height={24}
                width={24}
              />
              <span className="text-[#25324B] font-medium">{item.name}</span>
            </div>
          ))}
        </div>
      )}
      {viewMore &&
        (() => {
          const viewMoreLink = typeof viewMore === "string" ? viewMore : "#";
          const text = viewMoreText || "View More";
          return (
            <Link
              to={viewMoreLink}
              className="text-primary text-center font-epilogue text-[16px] font-semibold leading-[160%]"
            >
              {text}
            </Link>
          );
        })()}
    </div>
  );
};
