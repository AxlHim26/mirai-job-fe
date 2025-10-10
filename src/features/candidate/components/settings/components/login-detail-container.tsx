import { ChangePasswordForm } from "./change-password-form";
import { UpdateEmailForm } from "./update-email-form";

export const LoginDetailContainer = () => {
  return (
    <div className="space-y-6">
      <UpdateEmailForm />
      <ChangePasswordForm />
    </div>
  );
};

export default LoginDetailContainer;
