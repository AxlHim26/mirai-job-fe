import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  CTA,
  Hero,
  Companies,
  Categories,
  FeaturesJob,
  LatestJob,
} from "@/components/sections/landing";

export const LandingMain = () => {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Companies Section */}
      <Companies />

      {/* Categories Section */}
      <Categories />

      {/* CTA Section */}
      <CTA />

      {/* Featured Jobs Section */}
      <FeaturesJob />

      {/* Latest Jobs Section */}
      <LatestJob />
    </main>
  );
};
