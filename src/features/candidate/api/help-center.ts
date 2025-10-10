import { useQuery } from "@tanstack/react-query";

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
  helpful: boolean | null;
};

export const fetchFAQs = async (): Promise<FAQItem[]> => {
  // FE-only mock dataset
  const data: FAQItem[] = [
    {
      id: "1",
      question: "How do I update my profile?",
      answer:
        "Go to Settings → Profile, update your information, then click Save.",
      helpful: null,
    },
    {
      id: "2",
      question: "Can I withdraw an application?",
      answer:
        "Yes. Open My Applications, choose the application and click Withdraw.",
      helpful: null,
    },
  ];

  await new Promise((r) => setTimeout(r, 150));
  return data;
};

export const useFAQs = () => {
  return useQuery({
    queryKey: ["candidate-faqs"],
    queryFn: fetchFAQs,
  });
};
