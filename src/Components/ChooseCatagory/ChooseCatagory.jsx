import { CiSettings } from "react-icons/ci";
import { LuLayers } from "react-icons/lu";
import { BsHouses } from "react-icons/bs";
import { SiMarketo } from "react-icons/si";
import { TiWeatherCloudy } from "react-icons/ti";
import { CiBank } from "react-icons/ci";
import { PiShareNetworkFill } from "react-icons/pi";
import { IoRestaurantOutline } from "react-icons/io5";
import { FaGripfire } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
const ChooseCatagory = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center">
        <h1 className="md:text-4xl text-2xl font-bold text-gray=500 my-12">
          Choose Your Desire Category
        </h1>
        <div className="grid md:grid-cols-5 grid-cols-1 md:px-0 px-3">
          {/* Card-1 Start */}
          <div className="card rounded-none border-b border-r w-full py-10 flex justify-center items-center hover:shadow-lg">
            <div className="w-20 h-20 rounded-lg bg-orange-100 flex flex-col justify-center items-center">
              <span className="text-3xl font-bold text-orange-600">
                <CiSettings />
              </span>
            </div>
            <span className="text-center w-2/3 text-lg font-semibold mt-4 hover:text-orange-600">
              Technical Support
            </span>
          </div>
          {/* Card-2 Start */}
          <div className="card rounded-none border-b border-r w-full py-10 flex justify-center items-center hover:shadow-lg">
            <div className="w-20 h-20 rounded-lg bg-purple-100 flex flex-col justify-center items-center">
              <span className="text-3xl font-bold text-purple-600">
                <LuLayers />
              </span>
            </div>
            <span className="text-center w-2/3 text-lg font-semibold mt-4 hover:text-purple-600">
              Business Development
            </span>
          </div>
          {/* Card-3 Start */}
          <div className="card rounded-none border-b border-r w-full py-10 flex justify-center items-center hover:shadow-lg">
            <div className="w-20 h-20 rounded-lg bg-green-100 flex flex-col justify-center items-center">
              <span className="text-3xl font-bold text-green-600">
                <BsHouses />
              </span>
            </div>
            <span className="text-center w-2/3 text-lg font-semibold mt-4 hover:text-green-600">
              Real Estate Business
            </span>
          </div>
          {/* Card-4 Start */}
          <div className="card rounded-none border-b border-r w-full py-10 flex justify-center items-center hover:shadow-lg">
            <div className="w-20 h-20 rounded-lg bg-yellow-100 flex flex-col justify-center items-center">
              <span className="text-3xl font-bold text-yellow-600">
                <SiMarketo />
              </span>
            </div>
            <span className="text-center w-2/3 text-lg font-semibold mt-4 hover:text-yellow-600">
              Share Market Analysic
            </span>
          </div>
          {/* Card-5 Start */}
          <div className="card rounded-none border-b w-full py-10 flex justify-center items-center hover:shadow-lg">
            <div className="w-20 h-20 rounded-lg bg-blue-100 flex flex-col justify-center items-center">
              <span className="text-3xl font-bold text-blue-600">
                <TiWeatherCloudy />
              </span>
            </div>
            <span className="text-center w-2/3 text-lg font-semibold mt-4 hover:text-blue-600">
              Weather & Environment
            </span>
          </div>
          {/* Card-6 Start */}
          <div className="card rounded-none border-r w-full py-10 flex justify-center items-center hover:shadow-lg">
            <div className="w-20 h-20 rounded-lg bg-gray-100 flex flex-col justify-center items-center">
              <span className="text-3xl font-bold text-gray-600">
                <CiBank />
              </span>
            </div>
            <span className="text-center w-2/3 text-lg font-semibold mt-4 hover:text-gray-600">
              Finance & Banking
            </span>
          </div>
          {/* Card-7 Start */}
          <div className="card rounded-none border-r w-full py-10 flex justify-center items-center hover:shadow-lg">
            <div className="w-20 h-20 rounded-lg bg-red-100 flex flex-col justify-center items-center">
              <span className="text-3xl font-bold text-red-600">
                <PiShareNetworkFill />
              </span>
            </div>
            <span className="text-center w-2/3 text-lg font-semibold mt-4 hover:text-red-600">
              IT & Networking
            </span>
          </div>
          {/* Card-8 Start */}
          <div className="card rounded-none border-r w-full py-10 flex justify-center items-center hover:shadow-lg">
            <div className="w-20 h-20 rounded-lg bg-purple-100 flex flex-col justify-center items-center">
              <span className="text-3xl font-bold text-purple-600">
                <IoRestaurantOutline />
              </span>
            </div>
            <span className="text-center w-2/3 text-lg font-semibold mt-4 hover:text-purple-600">
              Restaurant Services
            </span>
          </div>
          {/* Card-9 Start */}
          <div className="card rounded-none border-r w-full py-10 flex justify-center items-center hover:shadow-lg">
            <div className="w-20 h-20 rounded-lg bg-pink-100 flex flex-col justify-center items-center">
              <span className="text-3xl font-bold text-pink-600">
                <FaGripfire />
              </span>
            </div>
            <span className="text-center w-2/3 text-lg font-semibold mt-4 hover:text-pink-600">
              Defence & Fire Services
            </span>
          </div>
          {/* Card-10 Start */}
          <div className="card rounded-none w-full py-10 flex justify-center items-center hover:shadow-lg">
            <div className="w-20 h-20 rounded-lg bg-green-100 flex flex-col justify-center items-center">
              <span className="text-3xl font-bold text-green-600">
                <CiDeliveryTruck />
              </span>
            </div>
            <span className="text-center w-2/3 text-lg font-semibold mt-4 hover:text-green-600">
              Home Delivery Services
            </span>
          </div>
          {/* Card-10 End */}
        </div>
      </div>
    </div>
  );
};

export default ChooseCatagory;
