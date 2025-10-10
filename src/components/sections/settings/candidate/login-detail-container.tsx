import { ChangePasswordForm } from "@/features/candidate/components/settings/components/change-password-form";
import { UpdateEmailForm } from "@/features/candidate/components/settings/components/update-email-form";

const LoginDetailContainer = () => {
  return (
    <>
      <UpdateEmailForm />
      <ChangePasswordForm />
    </>
  );
};
export default LoginDetailContainer;
