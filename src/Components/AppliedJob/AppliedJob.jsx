import { FaAngleDoubleRight } from "react-icons/fa";
import PageTransition from "../PageTransition/PageTransition";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import UseAuth from "../Hooks/UseAuth";

const AppliedJob = () => {
  const [apiData, setApiData] = useState([]);
  const [allDatas, setAllDatas] = useState([]);
  const [selectedData, setSelectedData] = useState("");
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();
  useEffect(() => {
    axiosSecure
      .get(`/api/apply/jobs/?email=${user?.email}`)
      .then((res) => {
        setApiData(res.data);
        setAllDatas(res.data);
      })
      .catch((err) => console.log(err));
  }, [axiosSecure, user?.email]);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (selectedData !== "") {
      const filted = allDatas.filter(
        (data) => data?.selectedCatagory === selectedData
      );
      setApiData(filted);
    } else if (selectedData == "") {
      setApiData(allDatas);
    }
  }, [selectedData]);
  return (
    <div className="mt-16">
      <PageTransition>
        <div className="bg-gradient-to-r from-green-600 to-green-500">
          <div className="mx-auto max-w-7xl flex flex-col justify-center items-center md:h-72 h-32">
            <h1 className="md:text-5xl text-white font-bold">
              Applied Job List
            </h1>
            <p className="text-white md:mt-6 md:text-xl md:font-medium text-xs mt-2 flex justify-center items-center">
              <Link to="/">Home</Link>
              <span className="mx-1">
                <FaAngleDoubleRight />
              </span>{" "}
              <Link to="/apply/job">Applied Job</Link>
            </p>
          </div>
        </div>
        {/* Table Top Bar */}
        {/* Table Base Apply Data Show */}
        <div className="mx-auto max-w-7xl md:my-12 mt-6">
          <div className="grid grid-cols-12 bg-gradient-to-t from-green-600 to-green-700 border-b py-8 px-4 items-center md:gap-x-12 gap-x-2">
            <div className="col-span-8">
              <form onSubmit={handleSearchSubmit}>
                <div className="relative">
                  <input
                    className="w-full px-6 py-4 outline-0 relative rounded-full"
                    placeholder="Search Here ..."
                  />
                  <div className="absolute z-40 top-0 right-0">
                    <button
                      type="submit"
                      className="bg-yellow-500 rounded-r-full font-bold hover:bg-yellow-600 py-4 md:px-16 px-4 text-white"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-span-4">
              <select
                className="w-full py-4 text-center font-bold"
                onChange={(e) => setSelectedData(e.target.value)}
              >
                <option disabled selected>
                  Filter
                </option>
                <option value="">All</option>
                <option value="Remote">Remote</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Hybrid">Hybrid</option>
                <option value="On Site">On Site</option>
              </select>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="table text-center border-collapse border-slate-400">
              <thead className="py-2 text-gray-600 text-lg">
                <tr className="bg-green-600 text-white">
                  <th>Logo</th>
                  <th>Job Title</th>
                  <th>Job Catagory</th>
                  <th>Salary Range</th>
                  <th>Apply Count</th>
                </tr>
              </thead>
              <tbody>
                {apiData.map((data) => {
                  return (
                    <tr key={data._id}>
                      <td>
                        <img
                          src={data?.imageUrl}
                          className="w-12 h-12"
                          alt=""
                        />
                      </td>
                      <td className="font-medium">{data?.jobTitle}</td>
                      <td>{data?.selectedCatagory}</td>
                      <td>{`${data?.salaryStart} - ${data?.salaryEnd}`}</td>
                      <td>{data?.applyCount}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </PageTransition>
    </div>
  );
};

export default AppliedJob;