import { z } from "zod";

export const profileSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  phone: z.string().min(1, "Phone number is required"),
  location: z.string().min(1, "Location is required"),
  bio: z.string().optional(),
  accountType: z.enum(["individual", "company"]),
});

export const profileInputSchema = profileSchema.omit({ accountType: true });

export type ProfileFormValues = z.infer<typeof profileSchema>;
export type ProfileInputValues = z.infer<typeof profileInputSchema>;
export type ProfileResponse = z.infer<typeof profileSchema>;
