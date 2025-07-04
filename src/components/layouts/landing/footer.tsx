import { useState } from "react";
import { Facebook, Instagram, Dribbble, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { LocalIcon } from "@/assets/icons/local-icon";

export const LandingFooter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email.trim()) {
      // Handle newsletter subscription
      console.log("Subscribing email:", email);
      setEmail("");
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <LocalIcon iconName="Logo" />
              <span className="text-xl font-semibold">JobHuntly</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-white font-medium mb-6">About</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Companies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Advice
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-white font-medium mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Help Docs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Updates
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-white font-medium mb-6">
              Get job notifications
            </h3>
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
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              2021 © JobHuntly. All rights reserved.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <Link
                to="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Dribbble size={20} />
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
