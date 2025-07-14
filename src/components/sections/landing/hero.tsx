import { LocalIcon } from "@/assets/icons/local-icon";
import { LocalImage } from "@/assets/images/local-image";

export const Hero = () => {

  return (
      <section className="flex flex-col items-center justify-center gap-4 py-8 px-[124px] w-full max-w-[2000px]">
        <LocalImage
          imageName="heroImage"
          className="w-[450px] h-[70px] md:w-[850px] md:h-[130px] object-cover"
        />
        <h1 className="text-[#515B6F] text-lg font-normal ">
          Find the dream companies you dream work for
        </h1>
        <div className="flex flex-col md:flex-row gap-4 justify-between w-full max-w-[950px] shadow-xl rounded p-6 bg-white">
          <div className="flex items-center gap-2">
            <LocalIcon
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
            <LocalIcon
              iconName="Location"
              width={24}
              height={24}
            />
            <select className="w-full px-4 py-2 border-b border-[#D6DDEB] rounded text-gray-700 focus:outline-none focus:ring-0">
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
      </section>
  );
};
