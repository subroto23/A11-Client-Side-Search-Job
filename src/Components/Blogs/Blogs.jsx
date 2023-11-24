import PageTransition from "../PageTransition/PageTransition";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const Blogs = () => {
  const [parentId, setParentId] = useState(null);
  const cardContainer = {
    hover: { marginTop: "-10px" },
  };
  const cardDateHover = {
    default: { opacity: 0 },
    hover: { opacity: 1, transitionDuration: ".1s" },
  };
  const CardItemsMotion = ({ children }) => {
    return (
      <motion.div
        variants={cardContainer}
        whileHover="hover"
        transition={{ duration: ".4" }}
        style={{
          borderRadius: 30,
          backgroundColor: "#fff",
        }}
      >
        {children}
      </motion.div>
    );
  };
  const { isPending, data: blogsData } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axios.get("https://api.npoint.io/0749a376c646416dd7f8");
      return res.data;
    },
  });

  if (isPending) {
    return (
      <div className="border-gray-300 h-20 w-20 my-24 mx-auto animate-spin rounded-full border-8 border-t-green-600" />
    );
  }
  return (
    <div className="mt-16">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blogs Page || Job Search</title>
      </Helmet>
      <PageTransition>
        <div className="bg-gradient-to-r from-green-600 to-green-500">
          <div className="mx-auto max-w-7xl flex flex-col justify-center items-center md:h-72 h-32">
            <h1 className="md:text-5xl text-white font-bold">Blogs</h1>
            <p className="text-white md:mt-6 md:text-xl md:font-medium text-xs mt-2 flex justify-center items-center">
              <Link to="/">Home</Link>
              <span className="mx-1">
                <FaAngleDoubleRight />
              </span>{" "}
              <Link to="/blogs">Blogs</Link>
            </p>
          </div>
        </div>
        {/* Blogs Section Start */}
        <div className="mx-auto max-w-7xl">
          <section className="text-gray-600 body-font">
            <div className="container px-3 py-12 mx-auto">
              <div className="flex flex-wrap">
                {blogsData.map((data) => {
                  let dotSign;
                  const titleSlice = data.title.slice(0, 26);
                  if (data?.title.length > 26) {
                    dotSign = "...";
                  }
                  return (
                    <div
                      onMouseEnter={() => setParentId(data.id)}
                      onMouseLeave={() => setParentId(null)}
                      key={data.id}
                      className="p-4 md:w-1/3 mb-8"
                    >
                      <Link to={`/blogs-details/${data.id}`}>
                        <CardItemsMotion key={data.id}>
                          <div className="border border-gray-200 border-opacity-60 overflow-hidden  hover:shadow-lg">
                            <div className="relative">
                              <img
                                className="lg:h-60 md:h-36 w-full object-cover object-center"
                                src={data?.thubnail}
                                alt="blog"
                              />
                              <motion.div
                                variants={cardDateHover}
                                initial="default"
                                animate={
                                  parentId === data.id ? "hover" : "default"
                                }
                                transition={{ duration: ".4" }}
                              >
                                <div className="absolute left-0 bottom-0 w-6/12 py-3 border border-l-none bg-white  text-center text-green-500 font-bold">
                                  {data?.createdDate}
                                </div>
                              </motion.div>
                            </div>
                            <div className="px-6 pt-6">
                              <h1 className="text-xl font-semibold text-gray-700 mb-3 hover:text-green-600">
                                {titleSlice} {dotSign}
                              </h1>
                              <div className="flex justify-between items-center mt-8 mb-6">
                                <div className="flex justify-center items-center">
                                  <img
                                    className="w-12 h-12 rounded-full"
                                    src={data?.creatorPhotoUrl}
                                    alt=""
                                  />
                                  <p className="ml-3 font-medium text-sm">
                                    {data?.creatorName}
                                  </p>
                                </div>
                                <div className="flex md:flex-row flex-col justify-center items-center">
                                  <Link
                                    to={`/blogs-details/${data.id}`}
                                    className="text-green-600 font-medium flex justify-center items-center hover:text-green-500"
                                  >
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
                        </CardItemsMotion>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </PageTransition>
    </div>
  );
};

export default Blogs;
