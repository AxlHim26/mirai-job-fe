import { heroImage, companyLogo, desktop, socialMedia, auth_bg } from ".";

const image = {
  heroImage,
  companyLogo,
  desktop,
  socialMedia,
  auth_bg,
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
