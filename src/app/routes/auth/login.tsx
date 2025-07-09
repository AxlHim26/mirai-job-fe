<<<<<<< HEAD

const LoginRoute = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <p>Please log in to continue.</p>
      {/* Add your login form or component here */}
    </div>
  );
}
=======
import { LoginForm } from "@/features/auth";

const LoginRoute = () => {
  return (
    <div className="flex flex-col items-center w-[408px]">
      <h1 className="text-2xl font-bold text-[#202430] mb-6">
        Welcome Back, Dude
      </h1>

      <button className="flex items-center justify-center gap-2 w-full border border-[#D6D6F2] text-[#4640DE] font-semibold py-2 px-6 rounded-md hover:bg-[#f4f4ff] transition-colors duration-200 mb-6">
        <span className="text-xl">+</span>
        <span>Login with Google</span>
      </button>

      <div className="flex items-center w-full text-gray-400 text-sm mb-6">
        <div className="flex-1 h-px bg-gray-300" />
        <span className="px-4">Or login with email</span>
        <div className="flex-1 h-px bg-gray-300" />
      </div>
      <LoginForm />
    </div>
  );
};
>>>>>>> develop

export default LoginRoute;
