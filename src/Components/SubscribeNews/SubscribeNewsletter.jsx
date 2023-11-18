import styles from "./SubscribeNews.module.css";
import { MdOutlineAlternateEmail } from "react-icons/md";
const SubscribeNewsletter = () => {
  return (
    <div className="flex justify-center mt-6">
      <div className=" bg-white md:my-6 w-11/12 border relative">
        <div className={`text-2xl text-green-600 font-bold md:block hidden`}>
          <span className={styles.animated1}>
            <MdOutlineAlternateEmail />
          </span>
          <span className={styles.animated2}>
            <MdOutlineAlternateEmail />
          </span>
        </div>
        <div className="flex justify-center py-6 flex-col items-center px-2 md:my-4">
          <h1 className="text-gray-500 md:text-4xl text-2xl font-semibold mt-6 md:mb-12 mb-6">
            Subscribe Newsletter
          </h1>
          {/* Form Group start*/}
          <div className="relative md:w-5/6 w-full border-2 py-4 border-green-500">
            <form>
              <input
                type="text"
                name="searchValue"
                className="outline-none pl-2 relative text-black font-semibold"
                placeholder="Enter Your Email"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 md:px-8 px-2 py-4 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:bg-green-600 font-bold text-xl outline-none text-center text-white"
              >
                Subscribe
              </button>
            </form>
          </div>
          {/* Form Group End*/}
        </div>
      </div>
    </div>
  );
};

export default SubscribeNewsletter;
