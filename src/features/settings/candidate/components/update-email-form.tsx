import { SectionTitle } from "@/components/sections/settings";
import { Form, Input, Button, Spinner } from "@/components/ui";
import {
  updateEmailSchema,
  useAccount,
  useUpdateEmail,
} from "@/features/settings/candidate/api";
import z from "zod";

const inputClass =
  "mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-black-500 focus:outline-none focus:ring-1 focus:ring-black-500";

export const UpdateEmailForm = () => {
  const { data: account, isLoading } = useAccount();
  const { mutate, isPending } = useUpdateEmail();

  const defaults: z.infer<typeof updateEmailSchema> = { newEmail: "" };

  const onSubmit = (values: z.infer<typeof updateEmailSchema>) => {
    mutate(values);
  };

  if (isLoading) return <p>Loading account...</p>;

  return (
    <Form
      schema={updateEmailSchema}
      option={{ defaultValues: defaults }}
      onSubmit={onSubmit}
    >
      {({ register, formState }) => (
        <>
          <div className="grid grid-cols-12 gap-6 border-b border-gray-300 pb-6">
            <div className="col-span-12 md:col-span-4">
              <SectionTitle title="Update Email" />
              <p className="text-sm text-gray-500">
                Update your email address to make sure it is safe
              </p>
            </div>

            <div className="col-span-12 md:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-700">{account?.email}</span>
                {account?.emailVerified ? (
                  <span className="text-green-600">✓ Verified</span>
                ) : (
                  <span className="text-orange-600">• Not verified</span>
                )}
              </div>

              <Input
                label="Update Email"
                type="email"
                placeholder="Enter your new email"
                register={register("newEmail")}
                error={formState.errors.newEmail}
                variants="filled"
                className={inputClass}
              />

              <div className="flex gap-2">
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
                  {isPending ? "Updating..." : "Update Email"}
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </Form>
  );
};
