import { useState } from "react";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const handleSubscribe = () => {
    if (email.trim()) {
      // Handle newsletter subscription
      console.log("Subscribing email:", email);
      setEmail("");
    }
  };
  return (
    <div>
      <h3 className="text-white font-medium mb-6">Get job notifications</h3>
      <p className="text-gray-400 text-sm mb-4">
        The latest job news, articles, sent to your inbox weekly.
      </p>
      <div className="space-y-3">
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm"
        />
        <button
          onClick={handleSubscribe}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors text-sm"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};
