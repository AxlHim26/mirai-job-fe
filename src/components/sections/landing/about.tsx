import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div>
      <h3 className="text-white font-medium mb-6">About</h3>
      <ul className="space-y-4">
        <li>
          <Link
            to="#"
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            Companies
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            Terms
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            Advice
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            Privacy Policy
          </Link>
        </li>
      </ul>
    </div>
  );
};
