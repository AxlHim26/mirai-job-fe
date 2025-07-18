import { Input } from "@/components/ui";
import { registerFormSchema, useRegister } from "../api";
import { AuthForm } from "../form-auth";
import { Link } from "react-router-dom";
import { AlertOverlay } from "@/components/ui";
import { LocalIcon } from "@/assets/icons/local-icon";
import { useNavigate } from "react-router-dom";

export const RegisterForm = ({ role }: { role: string }) => {
  const register = useRegister(<RegisterSuccessAlert />);

  return (
    <AuthForm
      className="w-full"
      schema={registerFormSchema}
      onSubmit={(data) => {
        register.mutate({
          ...data,
          role,
        });
      }}
    >
      {({ register, formState }) => (
        <div className="flex flex-col gap-4">
          <Input
            className="w-full h-[48px]"
            label="Full Name"
            placeholder="Enter your full name"
            register={register("fullName")}
            error={formState.errors.fullName}
          />
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
          <button
            className="w-full h-[50px] bg-[#4640DE] text-[16px] text-white font-bold leading-[25.6px]"
            type="submit"
          >
            Continue
          </button>
          <div className="flex gap-[12px] items-start">
            <p className="text-[16px] text-[#202430] font-normal leading-[25.6px]">
              Already have an account?
            </p>
            <Link
              className="text-[16px] text-[#4640DE] font-semibold leading-[27px]"
              to={"/auth/login"}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </AuthForm>
  );
};

const RegisterSuccessAlert = () => {
  const navigate = useNavigate();

  return (
    <AlertOverlay
      title="Account Created"
      description="Your account has been created"
      icon={
        <LocalIcon
          iconName="successful"
          height={"auto"}
          width={"auto"}
        />
      }
      primaryOption={{
        text: "Back to login",
        onClick: () => {
          navigate("/auth/login");
        },
      }}
    />
  );
};
