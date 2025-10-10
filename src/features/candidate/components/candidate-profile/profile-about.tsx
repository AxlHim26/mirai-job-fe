import { Edit2 } from "lucide-react";
import { Button } from "@/components/ui";

export const ProfileAbout = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">About Me</h2>
        <Button
          variant="icon"
          size="iconSm"
        >
          <Edit2 size={18} />
        </Button>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed">
        I'm a product designer + filmmaker currently working remotely at Twitter
        from Manchester, United Kingdom. I'm passionate about designing digital
        products that have a positive impact on the world.
      </p>
      <p className="text-gray-700 text-sm leading-relaxed mt-3">
        For 10 years, I've specialized in interface, experience & interaction
        design as well as working in user research and product strategy for
        product agencies, big tech companies & start-ups.
      </p>
    </div>
  );
};
