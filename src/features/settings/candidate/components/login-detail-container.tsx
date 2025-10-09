import { ChangePasswordForm } from "@/features/settings/candidate/components/change-password-form";
import { UpdateEmailForm } from "@/features/settings/candidate/components/update-email-form";

export const LoginDetailContainer = () => {
  return (
    <>
      <UpdateEmailForm />
      <ChangePasswordForm />
    </>
  );
};
