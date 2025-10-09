import { Input, Select, Button, Spinner } from "@/components/ui";
import { AuthForm } from "@/features/auth/form-auth";
import { SectionTitle, LogoSection } from "@/components/sections/settings";
import {
  profileSchema,
  useProfileSettings,
  useUpdateProfileSettings,
} from "../api";
import { FieldError } from "react-hook-form";
import z from "zod";
import { TypeAccountRadio } from "@/components/sections/settings/candidate/type-radio";

const inputClass =
  "mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-black-500 focus:outline-none focus:ring-1 focus:ring-black-500";

const ProfileForm = () => {
  const { data, isLoading } = useProfileSettings();
  const { mutate, isPending } = useUpdateProfileSettings();

  const getParsedDefault = (): z.infer<typeof profileSchema> => {
    if (!data) {
      return {
        fullName: "",
        phone: "",
        email: "",
        dob: "",
        gender: "Male",
        accountType: "Job Seeker",
      };
    }
    return {
      fullName: data.fullName ?? "",
      phone: data.phone ?? "",
      email: data.email ?? "",
      dob: data.dob ?? "",
      gender: data.gender ?? "Male",
      accountType: data.accountType ?? "Job Seeker",
    };
  };

  const onSubmit = (formData: z.infer<typeof profileSchema>) => {
    mutate(formData);
  };

  if (isLoading) return <p>Loading profile...</p>;

  return (
    <>
      <div className="grid grid-cols-12 gap-6 border-b border-gray-300 pb-6 items-start">
        <div className="col-span-12 md:col-span-4">
          <SectionTitle title="Profile Photo" />
          <h3 className="text-sm text-gray-500 mb-2">
            This image will be shown publicly as your profile picture, it will
            help recruiters recognize you!
          </h3>
        </div>
        <LogoSection />
      </div>

      <AuthForm
        schema={profileSchema}
        option={{ defaultValues: getParsedDefault() }}
        onSubmit={onSubmit}
      >
        {({ register, formState }) => (
          <>
            <div className="grid grid-cols-12 gap-6 border-b pb-6 pt-4 border-gray-300 ">
              <div className="col-span-12 md:col-span-4">
                <SectionTitle title="Personal Details" />
              </div>
              <div className="col-span-12 md:col-span-8 space-y-4">
                <Input
                  label="Full Name"
                  type="text"
                  register={register("fullName")}
                  error={formState.errors.fullName}
                  variants="filled"
                  className={inputClass}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Phone Number"
                    type="text"
                    register={register("phone")}
                    error={formState.errors.phone}
                    variants="filled"
                    className={inputClass}
                  />

                  <Input
                    label="Email"
                    type="email"
                    register={register("email")}
                    error={formState.errors.email}
                    variants="filled"
                    className={inputClass}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Date of Birth"
                    type="date"
                    register={register("dob")}
                    error={formState.errors.dob}
                    variants="filled"
                    className={inputClass}
                  />

                  <div className="flex flex-col gap-2">
                    <label className="text-[16px] font-semibold text-gray-700 leading-[25.6px]">
                      Gender
                    </label>
                    <Select
                      register={register("gender")}
                      error={formState.errors.gender as FieldError}
                      options={[
                        { label: "Male", value: "Male" },
                        { label: "Female", value: "Female" },
                        { label: "Other", value: "Other" },
                      ]}
                      className={inputClass}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-6 py-6 border-b border-gray-300">
              <div className="col-span-12 md:col-span-4">
                <SectionTitle title="Account Type" />
                <p className="text-sm text-gray-500">
                  You can update your account type
                </p>
              </div>
              <div className="col-span-12 md:col-span-8">
                <div className="flex flex-col gap-3">
                  <TypeAccountRadio
                    value="Job Seeker"
                    title="Job Seeker"
                    description="Looking for a job"
                    register={register}
                    name="accountType"
                  />
                  <TypeAccountRadio
                    value="Employer"
                    title="Employer"
                    description="Hiring, sourcing candidates, or posting a job"
                    register={register}
                    name="accountType"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end py-6">
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
                {isPending ? "Saving..." : "Save Profile"}
              </Button>
            </div>
          </>
        )}
      </AuthForm>
    </>
  );
};

export default ProfileForm;
