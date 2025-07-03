import { LoaclIcon } from "@/assets/icons/local-icon"
import { LocalImage } from "@/assets/images/local-image"
import FooterColumn from "../ui/column/FooterColumn";

const Footer = () => {
  return (
    <div className="bg-[#202430] text-white py-10 px-[124px] w-full max-w-[2000px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div className="flex flex-col gap-7">
          <div className="flex items-center gap-2">
            <LoaclIcon
              iconName="logo"
              width={40}
              height={40}
            />
            <h1>JobHuntly</h1>
          </div>
          <p className="text-[#D6DDEB] text-xl font-normal">
            Great platform for the job seeker that passionate about startups.
            Find your dream job easier.
          </p>
        </div>
        <div className="text-[#D6DDEB] flex gap-8 text-[16px] font-normal items-start justify-center">
          <FooterColumn
            title="About"
            items={[
              { name: 'Companies', link: '/companies' },
              { name: 'Pricing', link: '/pricing' },
              { name: 'Terms', link: '/terms' },
              { name: 'Advice', link: '/advice' },
              { name: 'Privacy Policy', link: '/privacy-policy' }
            ]}
          />
          <FooterColumn
            title="Resources"
            items={[
              { name: 'Help Docs', link: '/help-docs' },
              { name: 'Guide', link: '/guide' },
              { name: 'Updates', link: '/updates' },
              { name: 'Contact Us', link: '/contact-us' }
            ]}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-white text-lg font-semibold">
            Get job notifications
          </h1>
          <h2 className="text-[#D6DDEB] text-[16px] font-normal">
            The latest job news, articles, sent to your inbox weekly.
          </h2>
          <div className="flex gap-4 mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border-b border-[#D6DDEB] rounded bg-white text-black focus:outline-none focus:ring-0"
            />
            <button className="bg-[#4640DE] text-white px-4 py-2 rounded cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <hr className="text-[#D6DDEB] h-0.5" />
      <div className="flex justify-between items-center pt-8">
        <h1>2021 @ JobHuntly. All rights reserved.</h1>
        <div>
          <LocalImage
            imageName="socialMedia"
            className="w-[150px] lg:w-[256px] lg:h-[32px] object-cover cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}

export default Footer;
