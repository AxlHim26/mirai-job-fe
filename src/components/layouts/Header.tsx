import { LoaclIcon } from "@/assets/icons/local-icon";
import { LocalImage } from "@/assets/images/local-image";

const Header = () => {
  return (
          <div>
            <div className="flex justify-between items-center py-0 px-[124px] w-full max-w-[2000px]">
              <div className="flex items-center gap-12 self-stretch">
                <div className="flex items-center gap-2 self-stretch">
                  <LoaclIcon
                    iconName="logo"
                    width={40}
                    height={40}
                  />
                  <h1 className="font-bold text-2xl">JobHunterly</h1>
                </div>
                <div className="gap-4 self-stretch justify-center items-center hidden md:flex">
                  <h1 className="py-2 font-medium text-lg text-[#515B6F]">
                    Find Jobs
                  </h1>
                  <h1 className="border-b-[3px] border-[#4640DE] text-[#4640DE] py-2 font-medium text-lg">
                    Browse Companies
                  </h1>
                </div>
              </div>
              <div className="gap-4 space-between items-center h-[78px] hidden md:flex">
                <button className="text-[#4640DE] px-4 py-3.5 font-medium text-lg cursor-pointer border-r border-[#D6DDEB]">
                  Login
                </button>
                <button className="bg-[#4640DE] text-white px-4 py-3.5 rounded font-medium text-lg cursor-pointer">
                  Sign Up
                </button>
              </div>
              <div className="flex md:hidden">
                <LoaclIcon
                  iconName="menu"
                  width={40}
                  height={40}
                  className="text-[#4640DE] cursor-pointer"
                />
              </div>
            </div>
            {/* contert Section */}
            <div className="flex flex-col items-center justify-center gap-4 py-8 px-[124px] w-full max-w-[2000px]">
              <LocalImage
                imageName="heroImage"
                className="w-[450px] h-[70px] md:w-[850px] md:h-[130px] object-cover"
              />
              <h1 className="text-[#515B6F] text-lg font-normal ">
                Find the dream companies you dream work for
              </h1>
              <div className="flex flex-col md:flex-row gap-4 justify-between w-full max-w-[950px] shadow-xl rounded p-6 bg-white">
                <div className="flex items-center gap-2">
                  <LoaclIcon
                    iconName="search"
                    width={24}
                    height={24}
                    className="left-4 top-3 text-gray-500"
                  />
                  <input
                    type="text"
                    placeholder="Company name"
                    className="w-full px-4 py-2 border-b border-[#D6DDEB] rounded focus:outline-none focus:ring-0"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <LoaclIcon
                    iconName="Location"
                    width={24}
                    height={24}
                  />
                  <select className="w-full px-4 py-2 border-b border-[#D6DDEB] rounded text-gray-700">
                    <option value="">Select location</option>
                    <option value="florence">Florence, Italy</option>
                    <option value="paris">Paris, France</option>
                    <option value="newyork">New York, USA</option>
                  </select>
                </div>
                <button className="bg-[#4640DE] text-white px-4 py-2 rounded cursor-pointer">
                  Search
                </button>
              </div>
            </div>
          </div>
  );
};

export default Header;
