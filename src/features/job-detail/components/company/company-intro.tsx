import { LocalImage } from "@/assets/images/local-image";
import { Link } from "react-router-dom";

interface CompanyIntroProps {
  name: string;
  logo: string;
  description: string;
}

export const CompanyIntro = ({
  name,
  logo,
  description,
}: CompanyIntroProps) => (
  <div className="md:w-1/2 mb-8 md:mb-0">
    <div className="flex items-center mb-6">
      <LocalImage
        imageName={logo}
        alt="Stripe logo"
        className="w-20 h-20 object-contain mr-8"
      />
      <div>
        <h2 className="text-[32px] font-bold text-gray-800">{name}</h2>
        <Link
          to="#"
          className="text-indigo-600 hover:underline flex items-center text-[16px]"
        >
          Read more about {name}
          <span className="ml-2">&rarr;</span>
        </Link>
      </div>
    </div>
    <p className="text-gray-700 leading-relaxed text-[16px]">{description}</p>
  </div>
);
