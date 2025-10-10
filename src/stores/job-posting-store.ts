import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface JobPostingData {
  // Step 1: Job Information
  jobTitle: string;
  employmentTypes: string[];
  salaryMin: number;
  salaryMax: number;
  categories: string[];
  requiredSkills: string[];

  // Step 2: Job Description
  jobDescription: string;
  responsibilities: string;
  qualifications: string;
  niceToHaves: string;

  // Step 3: Review (no additional fields needed)
}

interface JobPostingStore {
  data: JobPostingData;
  currentStep: number;
  isSubmitting: boolean;

  // Actions
  updateStep1: (
    data: Partial<
      Pick<
        JobPostingData,
        | "jobTitle"
        | "employmentTypes"
        | "salaryMin"
        | "salaryMax"
        | "categories"
        | "requiredSkills"
      >
    >
  ) => void;
  updateStep2: (
    data: Partial<
      Pick<
        JobPostingData,
        "jobDescription" | "responsibilities" | "qualifications" | "niceToHaves"
      >
    >
  ) => void;
  setCurrentStep: (step: number) => void;
  setSubmitting: (isSubmitting: boolean) => void;
  clearStore: () => void;
  reset: () => void;
}

const initialData: JobPostingData = {
  jobTitle: "",
  employmentTypes: [],
  salaryMin: 5000,
  salaryMax: 22000,
  categories: [],
  requiredSkills: [],
  jobDescription: "",
  responsibilities: "",
  qualifications: "",
  niceToHaves: "",
};

export const useJobPostingStore = create<JobPostingStore>()(
  persist(
    (set) => ({
      data: initialData,
      currentStep: 1,
      isSubmitting: false,

      updateStep1: (newData) =>
        set((state) => ({
          data: { ...state.data, ...newData },
        })),

      updateStep2: (newData) =>
        set((state) => ({
          data: { ...state.data, ...newData },
        })),

      setCurrentStep: (step) => set({ currentStep: step }),

      setSubmitting: (isSubmitting) => set({ isSubmitting }),

      clearStore: () =>
        set({ data: initialData, currentStep: 1, isSubmitting: false }),

      reset: () =>
        set({ data: initialData, currentStep: 1, isSubmitting: false }),
    }),
    {
      name: "job-posting-store",
      partialize: (state) => ({
        data: state.data,
        currentStep: state.currentStep,
      }),
    }
  )
);
