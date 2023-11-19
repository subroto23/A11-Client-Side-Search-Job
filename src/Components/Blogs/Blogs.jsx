import PageTransition from "../PageTransition/PageTransition";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
const Blogs = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cardContainer = {
    hover: { marginTop: "-10px" },
  };
  const cardDateHover = {
    default: { opacity: 0 },
    hover: { opacity: 1, transitionDuration: ".1s" },
  };
  return (
    <div className="mt-16">
      <PageTransition>
        <div className="bg-gradient-to-r from-green-600 to-green-500">
          <div className="mx-auto max-w-7xl flex flex-col justify-center items-center md:h-72 h-32">
            <h1 className="md:text-5xl text-white font-bold">Blogs</h1>
            <p className="text-white md:mt-6 md:text-xl md:font-medium text-xs mt-2 flex justify-center items-center">
              home{" "}
              <span className="mx-1">
                <FaAngleDoubleRight />
              </span>{" "}
              blogs
            </p>
          </div>
        </div>
        {/* Blogs Section Start */}
        <div className="mx-auto max-w-7xl">
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-12 mx-auto">
              <div className="flex flex-wrap -m-4">
                <div className="p-4 md:w-1/3">
                  <motion.div
                    variants={cardContainer}
                    whileHover="hover"
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    transition={{ duration: ".4" }}
                    style={{
                      borderRadius: 30,
                      backgroundColor: "#fff",
                    }}
                  >
                    <div className="h-full border border-gray-200 border-opacity-60 overflow-hidden  hover:shadow-lg">
                      <div className="relative">
                        <img
                          className="lg:h-60 md:h-36 w-full object-cover object-center"
                          src="https://avatars.mds.yandex.net/i?id=e32733a6307e4c3a65d28cd13e6c82008eb3df38-9182224-images-thumbs&n=13"
                          alt="blog"
                        />
                        <motion.div
                          variants={cardDateHover}
                          initial="default"
                          animate={isHovered ? "hover" : "default"}
                          transition={{ duration: ".4" }}
                        >
                          <div className="absolute left-0 bottom-0 w-6/12 py-3 border border-l-none bg-white  text-center text-green-500 font-bold">
                            26 - 11 - 2023
                          </div>
                        </motion.div>
                      </div>
                      <div className="px-6 pt-6">
                        <h1 className="text-2xl font-semibold text-gray-700 mb-3">
                          What is an access token and refresh token ?
                        </h1>
                        <div className="flex justify-between items-center mt-8 mb-6">
                          <div className="flex justify-center items-center">
                            <img
                              className="w-12 h-12 rounded-full"
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Tx_VHgcwHHQrmvh8glff0zMlB6BjL6wgcZxE4WCn&s"
                              alt=""
                            />
                            <p className="ml-3 font-medium text-sm">
                              Johan Smith
                            </p>
                          </div>
                          <div className="flex md:flex-row flex-col justify-center items-center">
                            <Link className="text-green-600 font-medium flex justify-center items-center hover:text-green-500">
                              Read More
                              <span className="text-green-600 font-medium flex justify-center items-center hover:text-green-500">
                                <FaAngleRight />
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* End */}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </PageTransition>
    </div>
  );
};

export default Blogs;
