import {heroImage, companyLogo, socialMedia, CompanyLogo, CompanyPic1, CompanyPic2, CompanyPic3, auth_bg } from "./";

const image = {
  heroImage, 
  companyLogo, 
  socialMedia,
  CompanyLogo,
  CompanyPic1,
  CompanyPic2,
  CompanyPic3,
    auth_bg
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
