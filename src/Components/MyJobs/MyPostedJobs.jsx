import { Link } from "react-router-dom";
import PageTransition from "../PageTransition/PageTransition";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import UseAuth from "../Hooks/UseAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

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

  //Handle Delete Button
  const handleButtonDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        axiosSecure
          .delete(`/api/my-jobs/delete/${id}`)
          .then(() => {
            const filter = apiData.filter((data) => data._id !== id);
            setApiData(filter);
          })
          .catch((err) => console.log(err));
      }
    });
  };
  return (
    <div className="mt-16">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Posted Job Page || Job Search </title>
      </Helmet>
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
        <div className="mx-auto max-w-7xl md:my-12 mt-6">
          <div className="overflow-x-auto">
            <table className="table text-center border-collapse border-slate-400">
              {/* head */}
              <thead className="py-2 text-gray-600 text-lg">
                <tr className="">
                  <th>Logo</th>
                  <th>Job Title</th>
                  <th>Job Catagory</th>
                  <th>Salary Range</th>
                  <th>Deadline</th>
                  <th>Update</th>
                  <th>Delete</th>
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
                      <td>{data?.endDate.slice(0, 10)}</td>
                      <td>
                        <button className="text-md font-semibold text-green-600">
                          <Link to={`/my-jobs/post/update/${data?._id}`}>
                            Update
                          </Link>
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => handleButtonDelete(data?._id)}
                          className="text-md font-semibold text-red-600"
                        >
                          <Link>Delete</Link>
                        </button>
                      </td>
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

export default MyPostedJobs;
