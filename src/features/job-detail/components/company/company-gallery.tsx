import { LocalImage } from "@/assets/images/local-image";

interface CompanyGalleryProps {
  images: string[];
}

export const CompanyGallery = ({ images }: CompanyGalleryProps) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="md:w-1/2 grid grid-cols-2 gap-4 md:grid-cols-3">
      {images[0] && (
        <LocalImage
          imageName={images[0] as keyof typeof LocalImage}
          alt="Company image 1"
          className="w-full h-[300px] object-cover rounded-lg col-span-2 md:col-span-2 md:row-span-2"
        />
      )}
      {images[1] && (
        <LocalImage
          imageName={images[1] as keyof typeof LocalImage}
          alt="Company image 2"
          className="w-full h-[140px] object-cover rounded-lg col-span-1"
        />
      )}
      {images[2] && (
        <LocalImage
          imageName={images[2] as keyof typeof LocalImage}
          alt="Company image 3"
          className="w-full h-[140px] object-cover rounded-lg col-span-1"
        />
      )}
    </div>
  );
};
