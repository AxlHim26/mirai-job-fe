import React from "react";
import { Image } from "lucide-react";

export const WorkingSection: React.FC = () => {
  const workingImages = [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=200&fit=crop",
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <Image className="w-5 h-5" />
        Working At
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {workingImages.map((image, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
          >
            <img
              src={image}
              alt={`Working environment ${index + 1}`}
              className="w-full h-24 object-cover rounded-lg group-hover:opacity-80 transition-opacity"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg"></div>
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-600 mt-3">
        Modern workspace with collaborative environment and cutting-edge
        technology.
      </p>
    </div>
  );
};
