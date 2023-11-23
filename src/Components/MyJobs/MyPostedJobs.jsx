import { Link } from "react-router-dom";
import PageTransition from "../PageTransition/PageTransition";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import UseAuth from "../Hooks/UseAuth";

const MyPostedJobs = () => {
  const [apiData, setApiData] = useState([]);
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  useEffect(() => {
    axiosSecure
      .get(`/api/my-jobs/?email=${user?.email}`)
      .then((res) => setApiData(res?.data))
      .catch((err) => console.log(err));
  }, [axiosSecure, user]);
  return (
    <div className="mt-16">
      <PageTransition>
        <div className="bg-gradient-to-r from-green-600 to-green-500">
          <div className="mx-auto max-w-7xl flex flex-col justify-center items-center md:h-72 h-32">
            <h1 className="md:text-5xl text-white font-bold">
              Posted Job Lists
            </h1>
            <p className="text-white md:mt-6 md:text-xl md:font-medium text-xs mt-2 flex justify-center items-center">
              <Link to="/">Home</Link>
              <span className="mx-1">
                <FaAngleDoubleRight />
              </span>{" "}
              <Link to="/my-jobs/post">My Jobs</Link>
            </p>
          </div>
        </div>
        {/* My Post Data Section */}
        <div className="text-2xl my-12 text-center">
          Data = {apiData.length}
        </div>
      </PageTransition>
    </div>
  );
};

export default MyPostedJobs;
