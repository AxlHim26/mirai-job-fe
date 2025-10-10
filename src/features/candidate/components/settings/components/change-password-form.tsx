import { Input, Button } from "@/components/ui";
import { Form } from "@/components/ui/form/form";
import {
  changePasswordSchema,
  useChangePassword,
  ChangePasswordFormValues,
} from "../api";

export const ChangePasswordForm = () => {
  const changePasswordMutation = useChangePassword();

  const handleSubmit = (data: ChangePasswordFormValues) => {
    changePasswordMutation.mutate(data);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Change Password
      </h2>

      <Form
        schema={changePasswordSchema}
        onSubmit={handleSubmit}
      >
        {({ register, formState }) => (
          <div className="space-y-4">
            <Input
              label="Current Password"
              type="password"
              placeholder="Enter your current password"
              register={register("currentPassword")}
              error={formState.errors.currentPassword}
            />

            <Input
              label="New Password"
              type="password"
              placeholder="Enter your new password"
              register={register("newPassword")}
              error={formState.errors.newPassword}
            />

            <Input
              label="Confirm New Password"
              type="password"
              placeholder="Confirm your new password"
              register={register("confirmPassword")}
              error={formState.errors.confirmPassword}
            />

            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={changePasswordMutation.isPending}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
              >
                {changePasswordMutation.isPending
                  ? "Changing..."
                  : "Change Password"}
              </Button>
            </div>
          </div>
        )}
      </Form>
    </div>
  );
};
