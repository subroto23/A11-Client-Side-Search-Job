import { Link } from "react-router-dom";
import PageTransition from "../PageTransition/PageTransition";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import { FaRegUser } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { FaSackDollar } from "react-icons/fa6";
import { IoArrowForward } from "react-icons/io5";
const AllJobs = () => {
  const [jobsData, setJobsData] = useState([]);
  const [jobDatas, setJobDatas] = useState([]);
  const [searchValueChange, setsearchValueChange] = useState("");
  const [notDataFound, setNotDataFound] = useState("");
  const axiosSecureUrl = UseAxiosSecure();
  useEffect(() => {
    axiosSecureUrl
      .get("/add-jobs")
      .then((res) => {
        setJobsData(res.data);
        setJobDatas(res.data);
        setNotDataFound("");
      })
      .catch((err) => console.log(err));
  }, []);

  const handleCatagorySubmit = (e) => {
    e.preventDefault();
    const searchData = e.target.searchValue.value;
    const filtedData = jobsData.filter((data) =>
      data.jobTitle.toLowerCase().includes(searchData.toLowerCase())
    );
    setJobsData(filtedData);
    if (filtedData.length === 0) {
      return setNotDataFound("No Jobs found");
    }
  };
  useEffect(() => {
    if (searchValueChange === "") {
      setNotDataFound("");
      setJobsData(jobDatas);
    }
  }, [searchValueChange, jobDatas]);
  return (
    <div>
      <div className="mt-16">
        <PageTransition>
          <div className="bg-gradient-to-r from-green-600 to-green-500">
            <div className="mx-auto max-w-7xl flex flex-col justify-center items-center md:h-72 h-32">
              <h1 className="md:text-5xl text-white font-bold">Job List</h1>
              <p className="text-white md:mt-6 md:text-xl md:font-medium text-xs mt-2 flex justify-center items-center">
                <Link to="/">Home</Link>
                <span className="mx-1">
                  <FaAngleDoubleRight />
                </span>
                <Link to="/all-jobs">Jobs</Link>
              </p>
            </div>
          </div>
          {/* Job List Display Section */}
          <div className="mx-auto max-w-7xl my-12 md:px-0 px-3">
            <div className="border border-green-600 rounded-full pl-6 md:my-12 my-12">
              <form
                onSubmit={handleCatagorySubmit}
                className="flex justify-between"
              >
                <input
                  type="text"
                  name="searchValue"
                  className="outline-none py-4 w-full pl-2 text-black"
                  placeholder="Search with Title"
                  value={searchValueChange}
                  onChange={(e) => setsearchValueChange(e.target.value)}
                />
                <button
                  type="submit"
                  className="flex-end bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:bg-green-600 md:py-3 md:px-12 px-4 py-2 font-bold text-xl outline-none rounded-full text-center text-white"
                >
                  Search
                </button>
              </form>
            </div>

            {notDataFound && (
              <>
                <h1 className="text-2xl text-center">{notDataFound}</h1>
              </>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {jobsData.map((data) => {
                return (
                  <div
                    key={data._id}
                    className="border border-green-400 border-b-green-600 hover:shadow-md duration-150 ease-out"
                  >
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center justify-center p-6 gap-8">
                      <div className="md:col-span-2 ">
                        <img
                          className="w-20 h-20 mx-auto md:mx-0"
                          src={data?.imageUrl}
                        />
                      </div>
                      <div className="md:col-span-6 ml-6 w-full">
                        <div>
                          <h1 className="text-2xl font-bold">
                            {data?.jobTitle}
                          </h1>
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
                                <span className="mr-1 font-medium">
                                  Salary :
                                </span>{" "}
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
                          <span className="relative z-10">
                            {data?.selectedCatagory}
                          </span>
                        </button>
                        <div className="mx-5 w-3/4 normal-case btn-gradent-swipe-l2r">
                          <Link
                            to="/details"
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
                );
              })}
            </div>
          </div>
        </PageTransition>
      </div>
    </div>
  );
};

export default AllJobs;
