import { ChevronRight } from "lucide-react";

export const Stats = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-indigo-600 text-white p-6 rounded-xl flex items-center justify-between">
            <div>
              <div className="text-3xl font-bold mb-1">76</div>
              <div className="text-indigo-200">New candidates to review</div>
            </div>
            <ChevronRight className="w-6 h-6" />
          </div>

          <div className="bg-teal-500 text-white p-6 rounded-xl flex items-center justify-between">
            <div>
              <div className="text-3xl font-bold mb-1">3</div>
              <div className="text-teal-200">Schedule for today</div>
            </div>
            <ChevronRight className="w-6 h-6" />
          </div>

          <div className="bg-blue-500 text-white p-6 rounded-xl flex items-center justify-between">
            <div>
              <div className="text-3xl font-bold mb-1">24</div>
              <div className="text-blue-200">Messages received</div>
            </div>
            <ChevronRight className="w-6 h-6" />
          </div>
        </div>
    );
}