import {
  heroImage,
  companyLogo,
  socialMedia,
  auth_bg,
  CompanyLogo,
  CompanyPic1,
  CompanyPic2,
  CompanyPic3,
  avatarImg,
  bigImage,
  cssImg,
  flagImg,
  framerImg,
  htmlImg,
  jsImg,
  logo,
  mixpanelImg,
  rubyImg,
  smallImg,
} from ".";

const image = {
  heroImage,
  companyLogo,
  socialMedia,
  auth_bg,
  CompanyLogo,
  CompanyPic1,
  CompanyPic2,
  CompanyPic3,
  avatarImg,
  bigImage,
  cssImg,
  flagImg,
  framerImg,
  htmlImg,
  jsImg,
  logo,
  mixpanelImg,
  rubyImg,
  smallImg,
} satisfies Record<string, string>;
export type ImageName = keyof typeof image;
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
