import { Link } from "react-router-dom";
import PageTransition from "../PageTransition/PageTransition";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import AllJob from "./AllJob";
const AllJobs = () => {
  const [jobsData, setJobsData] = useState([]);
  const [jobDatas, setJobDatas] = useState([]);
  const [searchValueChange, setsearchValueChange] = useState("");
  const [notDataFound, setNotDataFound] = useState("");
  const axiosSecureUrl = UseAxiosSecure();
  useEffect(() => {
    axiosSecureUrl
      .get("/jobs")
      .then((res) => {
        setJobsData(res?.data);
        setJobDatas(res?.data);
        setNotDataFound("");
      })
      .catch((err) => console.log(err));
  }, [axiosSecureUrl]);

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
              {jobsData.map((data) => (
                <AllJob key={data._id} data={data} />
              ))}
            </div>
          </div>
        </PageTransition>
      </div>
    </div>
  );
};

export default AllJobs;
