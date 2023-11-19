import { FaAngleDoubleRight } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PageTransition from "../PageTransition/PageTransition";
import Swal from "sweetalert2";
import UseAuth from "../Hooks/UseAuth";
import { useState } from "react";
const SignUp = () => {
  const { handleRegistation, handleUpdateUser } = UseAuth();
  const [message, setMessage] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("fullname");
    const email = form.get("email");
    const password = form.get("password");
    const photoUrl = form.get("photoUrl");
    setMessage("");
    //Password Validation Checks
    if (password.length < 6) {
      setMessage("Password must be at least 6 characters long");
      return;
    }
    if (password.search(/[A-Z]/) < 0) {
      setMessage("Password must contain an uppercase");
      return;
    }
    if (password.search(/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/) < 0) {
      setMessage("Password must contain an Special Character");
      return;
    }
    const userRegistationData = { name, email, password, photoUrl };

    await handleRegistation(userRegistationData)
      .then(() => {
        Swal.fire("SuccessFully Registation!");
        e.target.reset();
        setMessage("");
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => setMessage("Your Registration Request Failed"));

    //
    await handleUpdateUser(name, photoUrl);
  };
  return (
    <PageTransition>
      <div className="bg-gradient-to-r from-green-600 to-green-500 flex flex-col justify-center items-center md:h-72 h-32">
        <h1 className="md:text-5xl text-white font-bold">
          Create Your Account
        </h1>
        <p className="text-white md:mt-6 md:text-xl md:font-medium text-xs mt-2 flex justify-center items-center">
          Home{" "}
          <span className="mx-1">
            <FaAngleDoubleRight />
          </span>{" "}
          Create Account
        </p>
      </div>
      {/* Form SignUp */}
      <div className="flex flex-co">
        <div className="container max-w-4xl  mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="px-6 rounded  text-black w-full border border-t-0 my-6 ">
            <div className="flex md:flex-row flex-col justify-between items-center mb-6 ">
              <h1 className=" text-2xl text-green-500 font-bold my-6">
                Basic Information
              </h1>
              <div className="text-grey-dark my-6 hidden md:block">
                Already have an account?
                <Link
                  to="/login"
                  className="btn-toggle-style px-6 py-4 border-b border-blue text-blue mx-2"
                >
                  Log in
                </Link>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="fullname"
                placeholder="Full Name"
                required
              />

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
                required
              />

              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
                required
              />
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="photoUrl"
                placeholder="Photo URL"
                required
              />
              <div className="text-center">
                <p className="text-red-500 text-base my-2">{message}</p>
              </div>
              <div className="text-center my-8">
                <button
                  type="submit"
                  className="py-3 btn-gradent-swipe-r2l hover:font-bold focus:outline-none"
                >
                  <span className="relative z-10 ">Create Account</span>
                </button>
              </div>
            </form>
            {/* Or Log In */}
            <div className="flex items-center justify-center text-xl">
              <span className="w-full mr-4 h-px bg-gray-300" />
              or
              <span className="w-full ml-4 h-px bg-gray-300" />
            </div>
            <div className="text-center text-sm text-grey-dark my-4">
              <div>
                <button className="mb-2.5 btn-gradent-swipe-l2r py-3 px-7 rounded-md  font-semibold uppercase tracking-wider text-green-500 border w-full">
                  <span className="relative z-10 flex justify-center items-center">
                    <svg
                      role="img"
                      className="flex-shrink-0 w-5 h-5 mr-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                    </svg>
                    Login with Google
                  </span>
                </button>
              </div>
              <div>
                <div className="text-grey-dark my-6 md:hidden block">
                  Already have an account?
                  <Link
                    to="/login"
                    className="text-green-500 font-bold text-lg mx-2"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default SignUp;
