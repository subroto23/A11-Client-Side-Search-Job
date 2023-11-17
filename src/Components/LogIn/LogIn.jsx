import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-green-600 to-green-500 flex flex-col justify-center items-center md:h-72 h-32">
        <h1 className="md:text-5xl text-white font-bold">Log In</h1>
        <p className="text-white md:mt-6 md:text-xl md:font-medium text-xs mt-2 flex justify-center items-center">
          Home
          <span className="mx-1">
            <FaAngleDoubleRight />
          </span>
          Login
        </p>
      </div>
      {/* Form SignUp */}
      <div className="flex">
        <div className="container max-w-2xl  mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="px-6 rounded  text-black w-full border border-t-0 my-6 ">
            <h1 className="md:text-5xl text-2xl font-bold text-gray-500 text-center md:mt-4 md:mb-12 my-6">
              Login Your Account
            </h1>
            <form action="">
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
              />

              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
              />
              <div className="text-center flex flex-col">
                <div className="flex flex-col space-y-3 mb-3">
                  <button className="text-green-500 hover:font-bold text-lg mx-2">
                    Forget Password ?
                  </button>
                  <button className="text-grey-dark">
                    Don’t Have Account ?
                    <Link
                      to="/sign-up"
                      className="text-green-500 hover:font-bold font-medium text-lg mx-2"
                    >
                      Sign Up Here
                    </Link>
                  </button>
                </div>
                <button
                  type="submit"
                  className="py-3 btn-toggle-style  hover:font-bold focus:outline-none"
                >
                  <span className="relative z-10 px-12 rounded-md">Log In</span>
                </button>
              </div>
            </form>
            {/* Or Log In */}
            <div className="flex items-center justify-center text-xl my-6">
              <span className="w-full mr-4 h-px bg-gray-300" />
              or
              <span className="w-full ml-4 h-px bg-gray-300" />
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;