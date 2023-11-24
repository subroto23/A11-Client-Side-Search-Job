import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Trusted = () => {
  return (
    <section className="text-gray-600 body-font max-w-7xl mx-auto">
      <div className="container mx-auto  px-5 md:my-24 my-8 flex md:flex-row flex-col items-center md:gap-0 gap-12 justify-between">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6  md:mb-0">
          <div className="grid md:grid-cols-3 grid-cols-1">
            <div className="col-span-2">
              <img
                className="object-cover object-center rounded h-full"
                alt="hero"
                src="https://www.bmo.com/assets/images/thumbnails/wealth/large/home_whoWeHelp_professionals.jpg"
              />
            </div>
            <div className="space-y-2 md:block hidden">
              <div>
                <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  src="https://sun9-59.userapi.com/impf/c848520/v848520089/344cd/m-p84YGUUnM.jpg?size=300x300&quality=96&sign=9b2f74728c418d8ed196d6645280d763&c_uniq_tag=XPNYWuJIKdXmaMVua-jZfMmu4Iy6hlf11P1Tth-uopg&type=album"
                />
              </div>
              <div className="w-[350px] -translate-x-44 h-1/2 md:flex items-center hidden">
                <div className="w-full bg-green-500">
                  <div className="bg-gradient-to-r from-green-500 to-green-400  border-8 border-sky-200 shadow-md text-center py-6">
                    <h1 className="text-white font-bold text-4xl">
                      100% Trusted
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex-grow md:w-1/2 md:pl-16 flex flex-col md:items-start md:text-left items-center max-w-2xl">
          <h1 className="title-font sm:text-4xl text-xl mb-4 font-bold text-gray-600">
            Trusted & Popular Job Portal
          </h1>
          <p className="mb-8 leading-relaxed font-medium text-justify">
            Provide detailed information about each company, including culture,
            employee reviews, and any other relevant details. Transparency about
            employers helps job seekers make informed decisions about where to
            apply.
          </p>
          <div className="flex md:flex-row flex-col justify-center gap-5">
            <Link
              to="/add-job"
              className="flex justify-center items-center btn-gradent-swipe-l2r normal-case md:px-8 text-lg"
            >
              <span className="relative z-10 text-green-500 font-medium hover:text-white">
                Post a Job
              </span>
              <span className="ml-2 relative z-10 hover:text-white">
                <FaArrowRight />
              </span>
            </Link>
            <Link
              to="/apply-job"
              className="flex justify-center items-center btn-gradent-swipe-r2l normal-case md:px-8 text-lg"
            >
              <span className="relative z-10 hover:text-green-500">
                Post a Job
              </span>
              <span className="ml-2 relative z-10 hover:text-white">
                <FaArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
