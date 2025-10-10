import { Input, Button } from "@/components/ui";
import { Form } from "@/components/ui/form/form";
import { profileInputSchema, ProfileInputValues } from "../api";
import { useAccount } from "../api";
import { useState } from "react";
import { FieldError } from "react-hook-form";

export const ProfileForm = () => {
  const { data: accountData, isLoading } = useAccount();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: ProfileInputValues) => {
    setIsSubmitting(true);
    try {
      // TODO: Implement profile update API call
      console.log("Profile update data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
    } catch (error) {
      console.error("Profile update failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="space-y-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-12 bg-gray-200 rounded"
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Profile Information
      </h2>

      <Form
        schema={profileInputSchema}
        onSubmit={handleSubmit}
        option={{
          defaultValues: {
            fullName: accountData?.fullName || "",
            email: accountData?.email || "",
            phone: accountData?.phone || "",
            location: accountData?.location || "",
            bio: accountData?.bio || "",
          },
        }}
      >
        {({ register, formState }) => (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Full Name"
                placeholder="Enter your full name"
                register={register("fullName")}
                error={formState.errors.fullName as FieldError | undefined}
              />
              <Input
                label="Email Address"
                placeholder="Enter your email"
                register={register("email")}
                error={formState.errors.email as FieldError | undefined}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Phone Number"
                placeholder="Enter your phone number"
                register={register("phone")}
                error={formState.errors.phone as FieldError | undefined}
              />
              <Input
                label="Location"
                placeholder="Enter your location"
                register={register("location")}
                error={formState.errors.location as FieldError | undefined}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bio
              </label>
              <textarea
                {...register("bio")}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Tell us about yourself..."
              />
              {formState.errors.bio && (
                <p className="mt-1 text-sm text-red-600">
                  {(formState.errors.bio as FieldError)?.message}
                </p>
              )}
            </div>

            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
              >
                {isSubmitting ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </div>
        )}
      </Form>
    </div>
  );
};
