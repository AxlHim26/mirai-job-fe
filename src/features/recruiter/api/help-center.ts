import { useQuery } from "@tanstack/react-query";

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
  helpful: boolean | null;
};

export const fetchRecruiterFAQs = async (): Promise<FAQItem[]> => {
  // FE-only mock dataset for recruiter
  const data: FAQItem[] = [
    {
      id: "1",
      question: "How do I post a new job?",
      answer:
        "Go to your dashboard and click 'Post a Job' button. Fill in the job details, requirements, and description, then publish your job posting.",
      helpful: null,
    },
    {
      id: "2",
      question: "How can I manage applications for my posted jobs?",
      answer:
        "Navigate to the 'Jobs' section in your dashboard. Click on any job to view and manage applications from candidates.",
      helpful: null,
    },
    {
      id: "3",
      question: "How do I update my company profile?",
      answer:
        "Go to Settings → Company Profile to update your company information, logo, description, and other details.",
      helpful: null,
    },
    {
      id: "4",
      question: "Can I edit or delete a job posting after publishing?",
      answer:
        "Yes, you can edit job details, pause, or close job postings anytime from the Jobs section in your dashboard.",
      helpful: null,
    },
    {
      id: "5",
      question: "How do I contact candidates who applied to my jobs?",
      answer:
        "Use the built-in messaging system to communicate with candidates directly through their application profiles.",
      helpful: null,
    },
    {
      id: "6",
      question: "What are the different job statuses and what do they mean?",
      answer:
        "Live: Job is active and accepting applications. Draft: Job is saved but not published. Closed: Job is no longer accepting applications. Paused: Job is temporarily inactive.",
      helpful: null,
    },
  ];

  await new Promise((r) => setTimeout(r, 150));
  return data;
};

export const useRecruiterFAQs = () => {
  return useQuery({
    queryKey: ["recruiter-faqs"],
    queryFn: fetchRecruiterFAQs,
  });
};
