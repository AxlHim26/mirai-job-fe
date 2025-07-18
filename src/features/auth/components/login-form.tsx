import { Input } from "@/components/ui";
import { loginInputSchema, useLogin } from "../api";
import { AuthForm } from "../form-auth";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  const fetchLogin = useLogin();

  return (
    <AuthForm
      className="w-full"
      schema={loginInputSchema}
      onSubmit={(data) => {
        fetchLogin.mutate(data);
      }}
    >
      {({ register, formState }) => (
        <div className="flex flex-col gap-4">
          <Input
            className="w-full h-[48px]"
            label="Email Address"
            placeholder="Enter email address"
            register={register("email")}
            error={formState.errors.email}
          />
          <Input
            className="w-full h-[48px]"
            label="Password"
            type="password"
            placeholder="Enter password"
            register={register("password")}
            error={formState.errors.password}
          />
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="w-[16px] h-[16px] rounded-2xl"
            />
            <span className="text-[16px] text-[#515B6F] font-normal leading-[25.6px]">
              Remember Me
            </span>
          </div>
          <button
            className="w-full h-[50px] bg-[#4640DE] text-[16px] text-white font-bold leading-[25.6px]"
            type="submit"
          >
            Login
          </button>
          <div className="flex gap-[12px] items-start">
            <p className="text-[16px] text-[#202430] font-normal leading-[25.6px]">
              Don’t have an account?
            </p>
            <Link
              className="text-[16px] text-[#4640DE] font-semibold leading-[27px]"
              to={"/auth/register"}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </AuthForm>
  );
};
