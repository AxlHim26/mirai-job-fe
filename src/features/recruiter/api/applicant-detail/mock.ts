import { ApplicantDetail } from "@/types";

export const mockApplicantDetail: ApplicantDetail = {
  id: "1",
  fullName: "Jerome Bell",
  title: "Product Designer",
  rating: 4.0,
  avatar:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  appliedDate: "2 days ago",
  jobTitle: "Product Development",
  department: "Marketing",
  jobType: "Full-Time",
  currentStage: "Interview",
  stages: [
    { id: "1", name: "Applied", completed: true, current: false },
    { id: "2", name: "Screening", completed: true, current: false },
    { id: "3", name: "Interview", completed: false, current: true },
    { id: "4", name: "Decision", completed: false, current: false },
  ],

  personalInfo: {
    fullName: "Jerome Bell",
    gender: "Male",
    dateOfBirth: "March 23, 1995",
    age: 26,
    languages: ["English", "French", "Bahasa"],
    address: "4517 Washington Ave. Manchester, Kentucky 39495",
  },

  professionalInfo: {
    aboutMe:
      "I'm a product designer - filmmaker currently working remotely at Twitter from beautiful Manchester, United Kingdom. I'm passionate about designing digital products that have a positive impact on the world. For 10 years, I've specialised in interface, experience & interaction design as well as working in user research and product strategy for product agencies, big tech companies & start-ups.",
    currentJob: "Product Designer",
    experienceYears: 4,
    highestQualification: "Bachelors in Engineering",
    skills: ["Project Management", "Copywriting", "English"],
  },

  contact: {
    email: "jeromeBell45@email.com",
    phone: "+44 1245 572 135",
    instagram: "instagram.com/jeromebell",
    twitter: "twitter.com/jeromebell",
    website: "www.jeromebell.com",
  },

  resume: {
    fileName: "Jerome_Bell_Resume.pdf",
    fileSize: "2.4 MB",
    uploadDate: "2 days ago",
    downloadUrl: "/downloads/jerome_bell_resume.pdf",
  },

  hiringProgress: [
    {
      stage: "Applied",
      status: "completed",
      notes: "Application submitted successfully",
      scheduledDate: "2024-01-15",
    },
    {
      stage: "Screening",
      status: "completed",
      notes: "Initial screening passed",
      interviewer: "Sarah Johnson",
      scheduledDate: "2024-01-18",
    },
    {
      stage: "Interview",
      status: "in-progress",
      notes: "Technical interview scheduled",
      interviewer: "Mike Chen",
      scheduledDate: "2024-01-25",
    },
    {
      stage: "Decision",
      status: "pending",
    },
  ],

  interviewSchedule: [
    {
      id: "1",
      title: "Technical Interview",
      date: "January 25, 2024",
      time: "2:00 PM",
      duration: "45 minutes",
      type: "video",
      interviewer: "Mike Chen",
      status: "scheduled",
    },
    {
      id: "2",
      title: "HR Interview",
      date: "January 28, 2024",
      time: "10:00 AM",
      duration: "30 minutes",
      type: "phone",
      interviewer: "Lisa Wang",
      status: "scheduled",
    },
  ],
};

export const getApplicantDetail = (): ApplicantDetail => {
  // In real app, this would fetch from API based on ID
  return mockApplicantDetail;
};
