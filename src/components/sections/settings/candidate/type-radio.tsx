import { UseFormRegister } from "react-hook-form";
import z from "zod";
import { profileSchema } from "@/features/candidate/components/settings/api/profile";

type ProfileFormValues = z.infer<typeof profileSchema>;

type TypeRadioProps = {
  value: ProfileFormValues["accountType"];
  title: string;
  description: string;
  register: UseFormRegister<ProfileFormValues>;
  name: "accountType";
};

export const TypeAccountRadio = ({
  value,
  title,
  description,
  register,
  name,
}: TypeRadioProps) => {
  return (
    <label className="flex items-start gap-3 cursor-pointer hover:border-black">
      <input
        type="radio"
        value={value}
        {...register(name)}
        className="mt-1 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
      />
      <div>
        <div className="font-medium text-gray-900">{title}</div>
        <div className="text-sm text-gray-500">{description}</div>
      </div>
    </label>
  );
};
