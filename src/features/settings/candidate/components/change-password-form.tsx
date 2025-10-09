import { SectionTitle } from "@/components/sections/settings";
import { Input, Button, Spinner } from "@/components/ui";
import { AuthForm } from "@/features/auth/form-auth";
import {
  changePasswordSchema,
  useChangePassword,
} from "@/features/settings/candidate/api";
import z from "zod";

const inputClass =
  "mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-black-500 focus:outline-none focus:ring-1 focus:ring-black-500";

export const ChangePasswordForm = () => {
  const { mutate, isPending } = useChangePassword();

  const defaults: z.infer<typeof changePasswordSchema> = {
    oldPassword: "",
    newPassword: "",
  };

  const onSubmit = (values: z.infer<typeof changePasswordSchema>) => {
    mutate(values);
  };

  return (
    <AuthForm
      schema={changePasswordSchema}
      option={{ defaultValues: defaults }}
      onSubmit={onSubmit}
    >
      {({ register, formState }) => (
        <>
          <div className="grid grid-cols-12 gap-6 pt-6 border-b border-gray-300 pb-6">
            <div className="col-span-12 md:col-span-4">
              <SectionTitle title="New Password" />
              <p className="text-sm text-gray-500">
                Manage your password to make sure it is safe
              </p>
            </div>

            <div className="col-span-12 md:col-span-8 space-y-4">
              <div>
                <Input
                  label="Old Password"
                  type="password"
                  placeholder="Enter your old password"
                  register={register("oldPassword")}
                  error={formState.errors.oldPassword}
                  variants="filled"
                  className={inputClass}
                />
                <p className="text-xs text-gray-500 mt-1">
                  Minimum 8 characters
                </p>
              </div>

              <div>
                <Input
                  label="New Password"
                  type="password"
                  placeholder="Enter your new password"
                  register={register("newPassword")}
                  error={formState.errors.newPassword}
                  variants="filled"
                  className={inputClass}
                />
                <p className="text-xs text-gray-500 mt-1">
                  Minimum 8 characters
                </p>
              </div>

              <Button
                type="submit"
                disabled={isPending}
                className="flex items-center gap-2"
              >
                {isPending && (
                  <Spinner
                    size="sm"
                    variant="light"
                  />
                )}
                {isPending ? "Changing..." : "Change Password"}
              </Button>
            </div>
          </div>
        </>
      )}
    </AuthForm>
  );
};
