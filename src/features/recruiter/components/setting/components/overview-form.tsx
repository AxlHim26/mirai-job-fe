import {
  companySettingsSchema,
  useRecruiterSettings,
  useUpdateRecruiterSettings,
} from "../api";
import {
  SectionTitle,
  LogoSection,
  TagInput,
} from "@/components/sections/settings";
import { RecruiterResponse } from "@/types";
import { Input, Select, Spinner, Textarea, Button } from "@/components/ui";
import { AuthForm } from "@/features/auth/form-auth";
import z from "zod";
import { FieldError } from "react-hook-form";

const labelClass = "text-[16px] font-semibold text-gray-700 leading-[25.6px]";
const inputClass =
  "mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-black-500 focus:outline-none focus:ring-1 focus:ring-black-500";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const OverviewForm = () => {
  const { data, isLoading } = useRecruiterSettings();
  const { mutate, isPending } = useUpdateRecruiterSettings();

  const getParsedDefault = (): z.infer<typeof companySettingsSchema> => {
    if (!data) {
      return {
        name: "",
        website: "",
        location: [],
        employee: "",
        industry: "",
        foundedDate: { day: "", month: "", year: "" },
        techStack: [],
        description: "",
        benefit: "",
      };
    }

    const [year, month, day] = data.foundedDate?.split("-") ?? ["", "", ""];
    return {
      name: data.name ?? "",
      website: data.website ?? "",
      location: Array.isArray(data.location) ? data.location : [],
      employee: data.employee ?? "",
      industry: data.industry ?? "",
      foundedDate: {
        day: day || "",
        month: month ? monthNames[+month - 1] || "" : "",
        year: year || "",
      },
      techStack: Array.isArray(data.techStack) ? data.techStack : [],
      description: data.description ?? "",
      benefit: data.benefit ?? "",
    };
  };

  const onSubmit = (formData: z.infer<typeof companySettingsSchema>) => {
    const { foundedDate } = formData;
    const monthIndex = monthNames.indexOf(foundedDate.month) + 1;
    const formattedDate = `${foundedDate.year}-${String(monthIndex).padStart(2, "0")}-${foundedDate.day.padStart(2, "0")}`;
    const payload: RecruiterResponse = {
      ...formData,
      avatar: data?.avatar || "",
      foundedDate: formattedDate,
    };
    mutate(payload);
  };

  if (isLoading) return <p>Loading company data...</p>;

  return (
    <>
      <div>
        <SectionTitle title="Basic Information" />
        <p className="text-sm text-gray-500 mt-1 mb-4 border-b pb-6 border-gray-300">
          This is company information that you can update anytime.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6 border-b border-gray-300 pb-6 items-start">
        <div className="col-span-12 md:col-span-4">
          <SectionTitle title="Company Logo" />
          <h3 className="text-sm text-gray-500 mb-2">Company Logo</h3>
        </div>
        <LogoSection />
      </div>

      <AuthForm
        schema={companySettingsSchema}
        option={{ defaultValues: getParsedDefault() }}
        onSubmit={onSubmit}
      >
        {({ register, setValue, watch, formState }) => {
          const locations = watch("location");
          const techStack = watch("techStack");

          return (
            <>
              <div className="grid grid-cols-12 gap-6 border-b pb-6 pt-4 border-gray-300 ">
                <div className="col-span-12 md:col-span-4">
                  <SectionTitle title="Company Detail" />
                  <p className="text-sm  text-gray-500">
                    Introduce your company core info quickly to users by fill up
                    company details
                  </p>
                </div>
                <div className="col-span-12 md:col-span-8 space-y-4">
                  <Input
                    label="Company Name"
                    type="text"
                    register={register("name", {
                      required: "Company Name is required",
                    })}
                    error={formState.errors.name}
                    variants="filled"
                    className={inputClass}
                  />
                  <Input
                    label="Website"
                    type="text"
                    register={register("website", {
                      required: "Website is required",
                    })}
                    error={formState.errors.website}
                    variants="filled"
                    className={inputClass}
                  />

                  <TagInput
                    label="Location"
                    value={locations}
                    onChange={(val) =>
                      setValue("location", val as string[], {
                        shouldDirty: true,
                      })
                    }
                    error={formState.errors.location as FieldError}
                    className={inputClass}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Employees"
                      type="text"
                      register={register("employee", {
                        required: "Employees is required",
                      })}
                      error={formState.errors.employee}
                      variants="filled"
                      className={inputClass}
                    />

                    <Input
                      label="Industry"
                      type="text"
                      register={register("industry", {
                        required: "Industry is required",
                      })}
                      error={formState.errors.industry}
                      variants="filled"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Date Founded</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-1">
                      <Select
                        label="Day"
                        register={register("foundedDate.day")}
                        error={formState.errors?.foundedDate?.day}
                        options={[
                          { label: "Day", value: "" },
                          ...Array.from({ length: 31 }, (_, i) => ({
                            label: String(i + 1),
                            value: String(i + 1),
                          })),
                        ]}
                        className={inputClass}
                      />
                      <Select
                        label="Month"
                        register={register("foundedDate.month")}
                        error={formState.errors?.foundedDate?.month}
                        options={[
                          { label: "Month", value: "" },
                          ...monthNames.map((m) => ({ label: m, value: m })),
                        ]}
                        className={inputClass}
                      />
                      <Select
                        label="Year"
                        register={register("foundedDate.year")}
                        error={formState.errors?.foundedDate?.year}
                        options={[
                          { label: "Year", value: "" },
                          ...Array.from({ length: 100 }, (_, i) => {
                            const year = new Date().getFullYear() - i;
                            return { label: String(year), value: String(year) };
                          }),
                        ]}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <TagInput
                    label="Tech Stack"
                    value={techStack}
                    onChange={(val) =>
                      setValue("techStack", val as string[], {
                        shouldDirty: true,
                      })
                    }
                    error={formState.errors.techStack as FieldError}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-12 gap-6 py-6 border-b border-gray-300">
                <div className="col-span-12 md:col-span-4">
                  <SectionTitle title="About Company" />
                  <p className="text-sm text-gray-500">
                    Brief description for your company. URLs are hyperlinked.
                  </p>
                </div>
                <div className="col-span-12 md:col-span-8 space-y-4">
                  <Textarea
                    label="Description"
                    variants="outlined"
                    register={register("description", {
                      required: "Description is required",
                    })}
                    error={formState.errors.description}
                    rows={5}
                    className={inputClass}
                  />
                  <Textarea
                    label="Benefits"
                    variants="outlined"
                    register={register("benefit")}
                    error={formState.errors.benefit}
                    rows={3}
                    className={inputClass}
                  />
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
                  {isPending ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </>
          );
        }}
      </AuthForm>
    </>
  );
};

export default OverviewForm;
