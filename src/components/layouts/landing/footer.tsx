import {
  About,
  Brand,
  Newsletter,
  Resources,
  SocialMedia,
} from "@/components/sections/landing";

export const LandingFooter = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <Brand />

          {/* About Section */}
          <About />

          {/* Resources Section */}
          <Resources />

          {/* Newsletter Section */}
          <Newsletter />
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              2021 © JobHuntly. All rights reserved.
            </p>

            {/* Social Media Links */}
            <SocialMedia />
          </div>
        </div>
      </div>
    </footer>
  );
};
