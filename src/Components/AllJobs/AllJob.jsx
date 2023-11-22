import { FaRegUser } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { FaSackDollar } from "react-icons/fa6";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";
const AllJob = ({ data }) => {
  return (
    <div>
      <div
        key={data?._id}
        className="border border-green-400 border-b-green-600 hover:shadow-md duration-150 ease-out"
      >
        <div className="grid md:grid-cols-12 grid-cols-1 items-center justify-center p-6 gap-8">
          <div className="md:col-span-2 ">
            <img className="w-20 h-20 mx-auto md:mx-0" src={data?.imageUrl} />
          </div>
          <div className="md:col-span-6 ml-6 w-full">
            <div>
              <h1 className="text-2xl font-bold">{data?.jobTitle}</h1>
              <div className="mb-1 flex gap-2">
                <p className="flex text-green-600 font-medium text-xs items-center my-1">
                  <span className="mr-2">
                    <FaRegUser />
                  </span>{" "}
                  {data?.jobCreator}
                </p>
                <p className="flex text-green-600 font-medium text-xs items-center my-1">
                  <span className="text-green-600 mr-2">
                    <CiCalendar />
                  </span>{" "}
                  {data?.cretedDate}
                </p>
              </div>
              <div>
                <p className="flex text-sm items-center">
                  <span className="mr-2 text-green-600">
                    <FaSackDollar />
                  </span>{" "}
                  <span className="text-gray-500">
                    {" "}
                    <span className="mr-1 font-medium">Salary :</span>{" "}
                    <span className="font-mono">
                      ${data?.salaryStart} - ${data?.salaryEnd}
                    </span>
                  </span>
                </p>
              </div>
              <p className="flex text-sm font-medium text-green-600 items-center my-1">
                <span className="mr-2 text-red-500 text-lg">
                  <CiCalendar />
                </span>{" "}
                <span className="mr-1">Deadline :</span>{" "}
                {data?.endDate.slice(0, 10)}
              </p>
            </div>
          </div>
          <div className="md:col-span-4">
            <button className="mx-5 w-3/4 normal-case bg-gradient-to-l from-green-600 to-green-500 text-white py-2 px-4 font-medium mb-6">
              <span className="relative z-10">{data?.selectedCatagory}</span>
            </button>
            <div className="mx-5 w-3/4 normal-case btn-gradent-swipe-l2r">
              <Link
                to={`/job/${data?._id}`}
                className="flex items-center justify-center"
              >
                <span className="relative z-10">Details</span>
                <span className="ml-1 relative z-10">
                  <IoArrowForward />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllJob;
