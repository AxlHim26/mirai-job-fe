import { Input, Button } from "@/components/ui";
import { Form } from "@/components/ui/form/form";
import {
  updateEmailSchema,
  useUpdateEmail,
  UpdateEmailFormValues,
} from "../api";

export const UpdateEmailForm = () => {
  const updateEmailMutation = useUpdateEmail();

  const handleSubmit = (data: UpdateEmailFormValues) => {
    updateEmailMutation.mutate(data);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <Form
        schema={updateEmailSchema}
        onSubmit={handleSubmit}
      >
        {({ register, formState }) => (
          <div className="space-y-4">
            <Input
              label="New Email Address"
              type="email"
              placeholder="Enter your new email address"
              register={register("newEmail")}
              error={formState.errors.newEmail}
            />

            <Input
              label="Current Password"
              type="password"
              placeholder="Enter your current password to confirm"
              register={register("currentPassword")}
              error={formState.errors.currentPassword}
            />

            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={updateEmailMutation.isPending}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
              >
                {updateEmailMutation.isPending ? "Updating..." : "Update Email"}
              </Button>
            </div>
          </div>
        )}
      </Form>
    </div>
  );
};
