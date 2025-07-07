import { Link } from "react-router-dom";

export const AuthButtons = () => {
  return (
    <div className="flex items-center gap-4">
      <Link
        to="#"
        className="text-[#4f46e5] font-semibold hover:underline"
      >
        Login
      </Link>
      <Link
        to="#"
        className="bg-[#4f46e5] text-white font-semibold px-6 py-2 rounded shadow hover:bg-[#4338ca] transition"
      >
        Sign Up
      </Link>
    </div>
  );
};
