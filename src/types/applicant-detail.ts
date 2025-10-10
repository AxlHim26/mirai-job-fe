export interface ApplicantDetail {
  id: string;
  fullName: string;
  title: string;
  rating: number;
  avatar: string;
  appliedDate: string;
  jobTitle: string;
  department: string;
  jobType: string;
  currentStage: string;
  stages: {
    id: string;
    name: string;
    completed: boolean;
    current: boolean;
  }[];

  // Personal Info
  personalInfo: {
    fullName: string;
    gender: string;
    dateOfBirth: string;
    age: number;
    languages: string[];
    address: string;
  };

  // Professional Info
  professionalInfo: {
    aboutMe: string;
    currentJob: string;
    experienceYears: number;
    highestQualification: string;
    skills: string[];
  };

  // Contact Info
  contact: {
    email: string;
    phone: string;
    instagram?: string;
    twitter?: string;
    website?: string;
  };

  // Resume
  resume: {
    fileName: string;
    fileSize: string;
    uploadDate: string;
    downloadUrl: string;
  };

  // Hiring Progress
  hiringProgress: {
    stage: string;
    status: "pending" | "in-progress" | "completed" | "rejected";
    notes?: string;
    interviewer?: string;
    scheduledDate?: string;
  }[];

  // Interview Schedule
  interviewSchedule: {
    id: string;
    title: string;
    date: string;
    time: string;
    duration: string;
    type: "phone" | "video" | "in-person";
    interviewer: string;
    status: "scheduled" | "completed" | "cancelled";
  }[];
}

export interface RestResponse<T> {
  data: T;
  message: string;
  status: number;
}
