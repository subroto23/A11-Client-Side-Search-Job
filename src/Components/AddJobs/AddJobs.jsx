import { Link } from "react-router-dom";
import PageTransition from "../PageTransition/PageTransition";
import { FaAngleDoubleRight } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Swal from "sweetalert2";
import moment from "moment/moment";

const AddJobs = () => {
  const [selectedCatagory, setSelectedCatagory] = useState(null);
  const [endDate, setEndDate] = useState(new Date());
  const [shortDetails, setShortDetails] = useState("");
  const [loader, setLoader] = useState(false);
  const { user } = UseAuth();
  const AxiosRequest = UseAxiosSecure();
  const jobCreator = user?.displayName;
  const cretedDate = moment().format("DD/MM/yyyy");
  //Form Handler
  const handleSubmit = (e) => {
    setLoader(true);
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const jobTitle = form.get("JobTitle");
    const salaryStart = form.get("salaryStart");
    const salaryEnd = form.get("salaryEnd");
    const imageUrl = form.get("imageUrl");
    const banner = form.get("banner");
    const applyCount = 0;
    const postJobData = {
      imageUrl,
      jobTitle,
      jobCreator,
      selectedCatagory,
      salaryStart,
      salaryEnd,
      shortDetails,
      applyCount,
      endDate,
      cretedDate,
      banner,
    };

    AxiosRequest.post("/jobs/create", postJobData)
      .then(() => {
        setLoader(false);
        Swal.fire("Post Successfully added");
        e.target.reset();
        setShortDetails("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="mt-16">
        <PageTransition>
          <div className="bg-gradient-to-r from-green-600 to-green-500">
            <div className="mx-auto max-w-7xl flex flex-col justify-center items-center md:h-72 h-32">
              <h1 className="md:text-5xl text-white font-bold">Post A job</h1>
              <p className="text-white md:mt-6 md:text-xl md:font-medium text-xs mt-2 flex justify-center items-center">
                <Link to="/">Home</Link>
                <span className="mx-1">
                  <FaAngleDoubleRight />
                </span>{" "}
                <Link to="/add-jobs">Add a job</Link>
              </p>
            </div>
          </div>
        </PageTransition>
      </div>
      {/* Create Job form Start */}
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md dark:bg-gray-800">
        <div className="my-8 mx-auto max-w-6xl border-2 md:p-8 shadow-xl border-green-500">
          <h2 className="md:text-4xl text-center md:mb-8 mt-2 font-semibold text-green-500  capitalize dark:text-white">
            Post Your Job
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 md:px-2 px-4 py-4 gap-8 space-y-4 ">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="name"
                >
                  Job Category
                </label>
                <select
                  onChange={(e) => setSelectedCatagory(e.target.value)}
                  className="select select-bordered block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-400 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                >
                  <option disabled selected>
                    Choose Catagory
                  </option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="On Site">On Site</option>
                  <option value="Remote">Remote</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="JobTitle"
                >
                  Job Title
                </label>
                <input
                  name="JobTitle"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-400 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  placeholder="Enter Title of Job"
                  required
                />
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="salaryStart"
                >
                  Salary Range Start
                </label>
                <input
                  type="text"
                  name="salaryStart"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-400 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  placeholder="10k"
                  required
                />
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="salary"
                >
                  Salary Range End
                </label>
                <input
                  type="text"
                  name="salaryEnd"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-400 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  placeholder="30K"
                  required
                />
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="BannerUrl"
                >
                  Company Logo Url
                </label>
                <input
                  type="text"
                  name="imageUrl"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-400 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  placeholder="Logo"
                  required
                />
              </div>
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="BannerUrl"
                >
                  Job Banner Url
                </label>
                <input
                  type="text"
                  name="banner"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-400 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  placeholder="Job Banner Url"
                  required
                />
              </div>

              <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="">
                  Deadline
                </label>
                <div>
                  <DatePicker
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-400 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    wrapperClassName="w-full"
                    selected={endDate}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => setEndDate(date)}
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="passwordConfirmation"
                >
                  Short Description
                </label>
                <div>
                  <ReactQuill
                    theme="snow"
                    value={shortDetails}
                    onChange={setShortDetails}
                    className="h-32 md:h-44 mt-2 mb-6 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>
                ;
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="px-8 my-5 py-2.5 leading-5 btn-toggle-style focus:outline-none focus:bg-gray-600 text-center flex"
              >
                {loader && (
                  <span className="loading loading-spinner loading-md mr-2"></span>
                )}
                Post Job
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddJobs;
