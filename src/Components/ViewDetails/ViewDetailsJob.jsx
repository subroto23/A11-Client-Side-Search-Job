import { Link, useLoaderData, useNavigate } from "react-router-dom";
import PageTransition from "../PageTransition/PageTransition";
import { FaAngleDoubleRight } from "react-icons/fa";
import Swal from "sweetalert2";
import UseAuth from "../Hooks/UseAuth";
import { useEffect, useState } from "react";
import moment from "moment";
const ViewDetailsJob = () => {
  const [disableBtn, setDisableBtn] = useState(false);
  const loadData = useLoaderData();
  const {
    applyCount,
    imageUrl,
    jobTitle,
    salaryEnd,
    salaryStart,
    shortDetails,
    banner,
    email,
    endDate,
  } = loadData;
  const { user, handleLogOut } = UseAuth();
  const navigate = useNavigate();
  const userEmail = user?.email;
  const presentDate = moment().format();

  useEffect(() => {
    if (userEmail === email) {
      setDisableBtn(true);
    }
    if (endDate < presentDate) {
      Swal.fire("Apply Date End");
      setDisableBtn(true);
    }
  }, [email, userEmail, endDate, presentDate]);

  const handleApplyButton = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Do you want to use this email?",
      text: `${userEmail}`,
      icon: "success",
      confirmButtonText: "Yes",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/submit-cv", { state: { loadData } });
      } else {
        Swal.fire("Please Login Another Account and try again");
        handleLogOut();
        navigate("/login");
      }
    });
  };
  return (
    <div className="mt-16">
      <PageTransition>
        <div className="bg-gradient-to-r from-green-600 to-green-500 flex flex-col justify-center items-center md:h-72 h-32">
          <h1 className="md:text-5xl text-white font-bold">Job Details</h1>
          <p className="text-white md:mt-6 md:text-xl md:font-medium text-xs mt-2 flex justify-center items-center">
            <Link to="/">Home</Link>
            <span className="mx-1">
              <FaAngleDoubleRight />
            </span>{" "}
            <Link to="/all-jobs">jobs</Link>
            <span className="mx-1">
              <FaAngleDoubleRight />
            </span>
            <Link to="/job">job</Link>
          </p>
        </div>
        {/* Details Section Start */}
        <div
          style={{ backgroundImage: `url(${banner})` }}
          className="bg-cover object-center w-full md:py-12"
        >
          <div className="bg-white max-w-4xl mx-3  md:mx-auto md:my-12  border-l-[40px] border-l-green-800 md:px-12 px-6 pb-12 border">
            <div className="flex items-center md:gap-20 gap-6 pt-4">
              <div>
                <img className="w-32 h-32 " src={imageUrl} alt="" />
              </div>
              <div>
                <h1 className="md:text-2xl text-green-600 font-bold text-center">
                  {jobTitle}
                </h1>
              </div>
            </div>
            <hr className="border-b border-green-500 md:my-6 " />
            <div className="mt-6">
              <h1 className="font-bold text-xl text-green-600">
                Major Duties and responsibilities:
              </h1>
              <div
                dangerouslySetInnerHTML={{ __html: shortDetails }}
                style={{ lineHeight: 1.5, textAlign: "justify" }}
              ></div>
            </div>
            <div className="mb-3">
              <h1 className="font-bold inline text-xl text-green-600">
                Salary Range :
              </h1>
              <span className="font-mono ml-3 font-medium md:text-lg">
                ${salaryStart} - ${salaryEnd}
              </span>
            </div>
            <div>
              <h1 className="font-bold inline text-xl text-green-600">
                Number Of Applicants :
              </h1>
              <span className="font-mono ml-3 font-medium md:text-2xl">
                {applyCount}
              </span>
            </div>
            <div className="text-center mt-12  mx-auto">
              <button
                onClick={handleApplyButton}
                disabled={disableBtn}
                className="py-3 btn-gradent-swipe-r2l  hover:font-bold focus:outline-none"
                style={
                  disableBtn
                    ? {
                        opacity: 0.7,
                      }
                    : null
                }
              >
                <span className="relative z-10">
                  {disableBtn ? "Disable Apply Button" : "Apply Job"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </PageTransition>
    </div>
  );
};

export default ViewDetailsJob;
