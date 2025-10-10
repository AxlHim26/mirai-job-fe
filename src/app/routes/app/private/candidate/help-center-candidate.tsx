import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { HelpCenterHeader } from "@/features/help-center/header";
import { HelpCenterFAQ, FAQItem } from "@/features/help-center/faq-list";
import { HelpCenterSidebar } from "@/features/help-center/sidebar";

export const HelpCenterCandidate = () => {
  const [searchQuery] = useState("");
  const [faqs, setFaqs] = useState<FAQItem[]>([
    {
      id: "1",
      question: "What is My Applications?",
      answer:
        "My Applications is a way for you to track jobs as you move through the application process. Depending on the job you applied to, you may also receive notifications indicating that an application has been actioned by an employer.",
      helpful: null,
    },
    {
      id: "2",
      question: "How to access my applications history",
      answer:
        "To access applications history, go to your My Applications page on your dashboard profile. You must be signed in to your JobHuntly account to view this page.",
      helpful: null,
    },
    {
      id: "3",
      question: "Not seeing jobs you applied in your my application list?",
      answer:
        "Please note that we are unable to track materials submitted for jobs you apply to via an employer's site. As a result, these applications are not recorded in the My Applications section of your JobHuntly account. We suggest keeping a personal record of all positions you have applied to externally.",
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

export default HelpCenterCandidate;
