import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { HelpCenterHeader } from "@/features/recruiter/components/help-center/header";
import {
  HelpCenterFAQ,
  FAQItem,
} from "@/features/recruiter/components/help-center/faq-list";
import { HelpCenterSidebar } from "@/features/recruiter/components/help-center/sidebar";

export const HelpCenterRecruiter = () => {
  const [searchQuery] = useState("");
  const [faqs, setFaqs] = useState<FAQItem[]>([
    {
      id: "1",
      question: "How do I post a new job?",
      answer:
        "Go to your dashboard and click 'Post a Job' button. Fill in the job details, requirements, and description, then publish your job posting. You can save drafts and edit them before publishing.",
      helpful: null,
    },
    {
      id: "2",
      question: "How can I manage applications for my posted jobs?",
      answer:
        "Navigate to the 'Jobs' section in your dashboard. Click on any job to view and manage applications from candidates. You can filter, sort, and take actions on applications.",
      helpful: null,
    },
    {
      id: "3",
      question: "How do I update my company profile?",
      answer:
        "Go to Settings → Company Profile to update your company information, logo, description, social links, and other details. Changes will be reflected on your public company page.",
      helpful: null,
    },
    {
      id: "4",
      question: "Can I edit or delete a job posting after publishing?",
      answer:
        "Yes, you can edit job details, pause, or close job postings anytime from the Jobs section in your dashboard. You cannot delete published jobs, but you can close them to stop accepting applications.",
      helpful: null,
    },
    {
      id: "5",
      question: "How do I contact candidates who applied to my jobs?",
      answer:
        "Use the built-in messaging system to communicate with candidates directly through their application profiles. You can also schedule interviews and send updates about application status.",
      helpful: null,
    },
    {
      id: "6",
      question: "What are the different job statuses and what do they mean?",
      answer:
        "Live: Job is active and accepting applications. Draft: Job is saved but not published. Closed: Job is no longer accepting applications. Paused: Job is temporarily inactive but can be reactivated.",
      helpful: null,
    },
    {
      id: "7",
      question: "How do I set up job alerts and notifications?",
      answer:
        "Go to Settings → Notifications to configure email and in-app notifications for new applications, candidate messages, and other important updates.",
      helpful: null,
    },
    {
      id: "8",
      question: "Can I see analytics for my job postings?",
      answer:
        "Yes, visit the Analytics section in your dashboard to view job performance metrics, application statistics, and candidate engagement data for your posted jobs.",
      helpful: null,
    },
  ]);

  const handleFeedback = (id: string, isHelpful: boolean) => {
    setFaqs((prev) =>
      prev.map((faq) => (faq.id === id ? { ...faq, helpful: isHelpful } : faq))
    );
  };

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-50">
      <HelpCenterSidebar />

      <div className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto p-8">
          <HelpCenterHeader />

          <HelpCenterFAQ
            faqs={filteredFaqs}
            onFeedback={handleFeedback}
          />

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">
                No articles found matching your search.
              </p>
            </div>
          )}
        </div>
      </div>

      <button className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors">
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default HelpCenterRecruiter;
