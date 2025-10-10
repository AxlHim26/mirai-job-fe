import { MoreVertical, ThumbsDown, ThumbsUp } from "lucide-react";

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
            <button className="text-gray-400 hover:text-gray-600">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>

          <p className="text-gray-600 mb-6 leading-relaxed">{faq.answer}</p>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              Was this article helpful?
            </span>
            <button
              onClick={() => onFeedback(faq.id, true)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                faq.helpful === true
                  ? "bg-blue-50 text-blue-600 border border-blue-200"
                  : "bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100"
              }`}
            >
              <ThumbsUp className="w-4 h-4" />
              <span className="text-sm font-medium">Yes</span>
            </button>
            <button
              onClick={() => onFeedback(faq.id, false)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                faq.helpful === false
                  ? "bg-red-50 text-red-600 border border-red-200"
                  : "bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100"
              }`}
            >
              <ThumbsDown className="w-4 h-4" />
              <span className="text-sm font-medium">No</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
