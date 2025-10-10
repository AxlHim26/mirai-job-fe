import { Edit2 } from "lucide-react";

export const ProfilePortfolio = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Portfolios</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <Edit2 size={18} />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden group cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=300&fit=crop"
            alt="Portfolio 1"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden group cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=300&fit=crop"
            alt="Portfolio 2"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden group cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=300&fit=crop"
            alt="Portfolio 3"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};
