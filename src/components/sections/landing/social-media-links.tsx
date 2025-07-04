import { Facebook, Instagram, Dribbble, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export const SocialMedia = () => {
  return (
    <div className="flex items-center gap-4">
      <Link
        to="#"
        className="text-gray-400 hover:text-white transition-colors"
      >
        <Facebook size={20} />
      </Link>
      <Link
        to="#"
        className="text-gray-400 hover:text-white transition-colors"
      >
        <Instagram size={20} />
      </Link>
      <Link
        to="#"
        className="text-gray-400 hover:text-white transition-colors"
      >
        <Dribbble size={20} />
      </Link>
      <Link
        to="#"
        className="text-gray-400 hover:text-white transition-colors"
      >
        <Linkedin size={20} />
      </Link>
      <Link
        to="#"
        className="text-gray-400 hover:text-white transition-colors"
      >
        <Twitter size={20} />
      </Link>
    </div>
  );
};
