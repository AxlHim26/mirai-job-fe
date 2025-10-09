import { ChangePasswordForm } from "@/features/settings/candidate/components/change-password-form";
import { UpdateEmailForm } from "@/features/settings/candidate/components/update-email-form";

const LoginDetailContainer = () => {
  return (
    <>
      <UpdateEmailForm />
      <ChangePasswordForm />
    </>
  );
};

export default LoginDetailContainer;
