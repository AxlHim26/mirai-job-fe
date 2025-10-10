import { LocalImage } from "@/assets/images/local-image";

interface CompanyGalleryProps {
  images: string[];
}

export const CompanyGallery = ({ images }: CompanyGalleryProps) => {
  if (!images || images.length === 0) return null;

  const renderImage = (src: string, alt: string, className: string) => {
    const isUrl = src.startsWith("http");

    if (isUrl) {
      return (
        <img
          src={src}
          alt={alt}
          className={className}
        />
      );
    } else {
      return (
        <LocalImage
          imageName={src as keyof typeof LocalImage}
          alt={alt}
          className={className}
        />
      );
    }
  };

  return (
    <div className="md:w-1/2 grid grid-cols-2 gap-4 md:grid-cols-3">
      {images[0] &&
        renderImage(
          images[0],
          "Company image 1",
          "w-full h-[300px] object-cover rounded-lg col-span-2 md:col-span-2 md:row-span-2"
        )}
      {images[1] &&
        renderImage(
          images[1],
          "Company image 2",
          "w-full h-[140px] object-cover rounded-lg col-span-1"
        )}
      {images[2] &&
        renderImage(
          images[2],
          "Company image 3",
          "w-full h-[140px] object-cover rounded-lg col-span-1"
        )}
    </div>
  );
};
