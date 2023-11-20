import { Link, useLoaderData } from "react-router-dom";
import PageTransition from "../PageTransition/PageTransition";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import JobCatagoryRightBar from "../JobCatagoryRightBar/JobCatagoryRightBar";
import JobLocation from "../JobLocation/JobLocation";
const BlogsDetails = () => {
  const { title, thubnail, descriptions, createdDate, creatorName } =
    useLoaderData();
  return (
    <div className="mt-16">
      <PageTransition>
        <div className="bg-gradient-to-r from-green-600 to-green-500">
          <div className="mx-auto max-w-7xl flex flex-col justify-center items-center md:h-72 h-32">
            <h1 className="md:text-5xl text-white font-bold">Blogs Details</h1>
            <p className="text-white md:mt-6 md:text-xl md:font-medium text-xs mt-2 flex justify-center items-center">
              <Link to="/">Home</Link>
              <span className="mx-1">
                <FaAngleDoubleRight />
              </span>{" "}
              <Link to="/blogs">Blogs</Link>
              <span className="mx-1">
                <FaAngleDoubleRight />
              </span>{" "}
              <Link to="/blogs">Blogs Details</Link>
            </p>
          </div>
        </div>
        {/* Blogs Details Section Start */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-20 grid-cols-1 md:my-16 my-6 md:px-0 px-4">
            {/* First Column */}
            <div className=" col-span-8">
              <img src={thubnail} className="w-full" alt="" />
              <div>
                <h1 className="md:text-4xl text-2xl font-bold my-6 text-gray-600">
                  {title}
                </h1>
                <div className="flex gap-6 mb-6">
                  <p className="flex justify-center items-center gap-x-2 text-md font-medium">
                    <span className="text-green-500 text-2xl">
                      <FaRegCalendarAlt />
                    </span>{" "}
                    {createdDate}
                  </p>
                  <p className="flex justify-center items-center gap-x-2 text-md font-medium">
                    <span className="text-green-500 text-2xl">
                      <RxAvatar />
                    </span>{" "}
                    {creatorName}
                  </p>
                </div>
                <p className="text-justify text-lg text-gray-500 font-medium">
                  {descriptions}
                </p>
              </div>
              <hr className="mt-12 mb-6" />
              <div className="text-green-600 font-semibold flex  justify-center items-center">
                <p className="text-lg">Share : </p>
                <span className="text-2xl  mx-4">
                  <Link to="/">
                    <IoLogoFacebook />
                  </Link>
                </span>
                <span className="text-2xl  mr-4">
                  <Link to="/">
                    <FaTwitterSquare />
                  </Link>
                </span>
                <span className="text-2xl  mr-4">
                  <Link to="/">
                    <FaInstagram />
                  </Link>
                </span>
              </div>
              {/* Button Start */}
              <div className="flex justify-between my-6">
                <button
                  to="/sign-up"
                  className="w-32 rounded-md normal-case btn-gradent-swipe-l2r "
                >
                  <span className="relative z-10 hover:text-white flex items-center">
                    <span className="mr-2 text-sm">
                      <FaArrowLeft />
                    </span>
                    Previous
                  </span>
                </button>
                <button
                  to="/sign-up"
                  className="w-32 rounded-md normal-case btn-gradent-swipe-l2r"
                >
                  <span className="relative z-10 hover:text-white flex justify-center items-center">
                    Next
                    <span className="ml-2 text-sm">
                      <FaArrowRight />
                    </span>
                  </span>
                </button>
              </div>
              {/* Comment-Form */}
              <div></div>
            </div>
            {/* 2nd Column Start */}
            <div className="col-span-4">
              <div className="flex flex-col gap-16">
                <JobCatagoryRightBar />
                <JobLocation />
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </div>
  );
};

export default BlogsDetails;
