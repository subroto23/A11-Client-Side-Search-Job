import { Link, useLocation } from "react-router-dom";
import PageTransition from "../PageTransition/PageTransition";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useState } from "react";
import Swal from "sweetalert2";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import UseAuth from "../Hooks/UseAuth";
import emailjs from "@emailjs/browser";
const CvSubmitedForm = () => {
  const [loader, setLoader] = useState(false);
  const location = useLocation();
  const appliedJob = location.state?.loadData;
  const { applyCount, _id } = appliedJob;
  const AxiosRequest = UseAxiosSecure();
  const { user } = UseAuth();

  //
  const data = {
    to_name: user?.email,
    from_name: user?.displayName,
    message: "Your Application apply is Confirmed.",
  };

  //Handle Submited Resume
  const handleSubmitResume = (e) => {
    e.preventDefault();
    setLoader(true);
    const resumeUrl = e.target.resumeUrl.value;
    const email = user.email;
    const name = user.displayName;
    const applyJobId = _id;
    const resumeData = { email, name, resumeUrl, applyJobId };
    //Apply Count Value Upadate and Increasing
    AxiosRequest.post("/resume/create", resumeData)
      .then(() => {
        const count = Number(applyCount) + 1;
        AxiosRequest.patch(`/jobs/job?id=${_id}`, { applyCount: count })
          .then(() => {
            emailjs
              .send(
                "service_w1wqrp9",
                "template_j6rkvvo",
                data,
                "CspRuIYP57Sr9m8Nh"
              )
              .then(
                function (response) {
                  console.log("SUCCESS!", response.status, response.text);
                },
                function (error) {
                  console.log("FAILED...", error);
                }
              );
            setLoader(false);
            e.target.reset();
            Swal.fire("Apply Successfully");
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="mt-16">
      <PageTransition>
        <div className="bg-gradient-to-r from-green-600 to-green-500 flex flex-col justify-center items-center md:h-72 h-32">
          <h1 className="md:text-5xl text-white font-bold">Submit Resume</h1>
          <p className="text-white md:mt-6 md:text-xl md:font-medium text-xs mt-2 flex justify-center items-center">
            <Link to="/">Home</Link>
            <span className="mx-1">
              <FaAngleDoubleRight />
            </span>{" "}
            <Link to="/all-jobs">jobs</Link>
            <span className="mx-1">
              <FaAngleDoubleRight />
            </span>
            <Link to="/all-jobs">job</Link>
            <span className="mx-1">
              <FaAngleDoubleRight />
            </span>
            <Link to="/all-jobs">Resume</Link>
          </p>
        </div>
      </PageTransition>
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md dark:bg-gray-800">
        <div className="my-8 mx-auto max-w-6xl border-2 md:p-8 shadow-xl border-green-500">
          <h2 className="md:text-4xl text-center md:mb-8 mt-2 font-semibold text-green-500  capitalize dark:text-white">
            Submit Your Resume Link
          </h2>
          <form onSubmit={handleSubmitResume}>
            <div className=" md:px-2 px-4 py-4 gap-8 space-y-4 ">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="BannerUrl"
                >
                  Resume Url
                </label>
                <input
                  type="text"
                  name="resumeUrl"
                  className="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-400 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  placeholder="https:// www.Your Resume.com"
                  required
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 my-5 py-4 leading-5 btn-toggle-style focus:outline-none focus:bg-gray-600 text-center flex"
              >
                {loader && (
                  <span className="loading loading-spinner loading-md mr-2"></span>
                )}
                Submit Resume
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CvSubmitedForm;
