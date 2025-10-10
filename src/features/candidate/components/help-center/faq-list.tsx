import { MoreVertical, ThumbsDown, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  helpful: boolean | null;
}

interface HelpCenterFAQProps {
  faqs: FAQItem[];
  onFeedback: (id: string, isHelpful: boolean) => void;
}

export const HelpCenterFAQ = ({ faqs, onFeedback }: HelpCenterFAQProps) => {
  return (
    <div className="space-y-6">
      {faqs.map((faq) => (
        <div
          key={faq.id}
          className="bg-white rounded-xl border border-gray-200 p-6"
        >
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-lg font-semibold text-gray-900 pr-4">
              {faq.question}
            </h2>
            <Button
              variant="icon"
              size="iconSm"
            >
              <MoreVertical className="w-5 h-5" />
            </Button>
          </div>

          <p className="text-gray-600 mb-6 leading-relaxed">{faq.answer}</p>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              Was this article helpful?
            </span>
            <Button
              variant={faq.helpful === true ? "toggleActive" : "toggle"}
              size="sm"
              onClick={() => onFeedback(faq.id, true)}
              startIcon={<ThumbsUp className="w-4 h-4" />}
            >
              Yes
            </Button>
            <Button
              variant={faq.helpful === false ? "danger" : "toggle"}
              size="sm"
              onClick={() => onFeedback(faq.id, false)}
              startIcon={<ThumbsDown className="w-4 h-4" />}
            >
              No
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
