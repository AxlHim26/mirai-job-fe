import {heroImage, companyLogo, socialMedia, CompanyLogo, CompanyPic1, CompanyPic2, CompanyPic3 } from "./";

const image = {
  heroImage, 
  companyLogo, 
  socialMedia,
  CompanyLogo,
  CompanyPic1,
  CompanyPic2,
  CompanyPic3,
} satisfies Record<string, string>;


type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  imageName: keyof typeof image;
};

export const LocalImage = ({ imageName, ...props }: ImageProps) => {
  const Comp = image[imageName];
  return (
    <img
      src={Comp}
      alt={imageName}
      {...props}
    />
  );
};
