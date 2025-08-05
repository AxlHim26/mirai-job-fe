import { Button, Form, Input, Spinner } from "@/components/ui";
import { SectionTitle } from "@/components/sections/company-setting";
import { socialLinkSchema, useSocialLinks, useUpdateSocialLinks } from "../api";
import z from "zod";

export const SocialLinkForm = () => {
  const { data, isLoading } = useSocialLinks();
  const { mutate, isPending } = useUpdateSocialLinks();

  const onSubmit = (formData: z.infer<typeof socialLinkSchema>) => {
    mutate(formData);
  };

  if (isLoading) return <p>Loading social links...</p>;

  return (
    <Form
      schema={socialLinkSchema}
      option={{ defaultValues: data }}
      onSubmit={onSubmit}
    >
      {({ register, formState: { errors } }) => (
        <>
          <div className="space-y-4 grid grid-cols-1 md:grid-cols-5 gap-6 border-b pb-6 border-gray-300 h-96">
            <div className="md:col-span-2">
              <SectionTitle title="Social Links" />
              <p className="mt-1 text-sm text-gray-500">
                Add elsewhere links to your company profile. You can add only
                username without full https links.
              </p>
            </div>

            <div className="md:col-span-3 space-y-4">
              {["facebook", "twitter", "linkedin"].map((platform) => (
                <Input
                  key={platform}
                  label={platform.charAt(0).toUpperCase() + platform.slice(1)}
                  type="text"
                  register={register(
                    platform as keyof z.infer<typeof socialLinkSchema>,
                    {
                      required: `${platform.charAt(0).toUpperCase() + platform.slice(1)} handle is required`,
                    }
                  )}
                  error={
                    errors[platform as keyof z.infer<typeof socialLinkSchema>]
                  }
                  variants="filled"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              ))}
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <Button
              type="submit"
              disabled={isPending}
              className="flex items-center justify-center gap-2 min-w-[140px]"
            >
              {isPending && (
                <Spinner
                  size="sm"
                  variant="light"
                />
              )}
              {isPending ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </>
      )}
    </Form>
  );
};
