import { motion } from "framer-motion";
import { useState } from "react";
const JobLocation = () => {
  const [parentId, setParentId] = useState(null);
  const parentHover = {
    hover: {
      marginLeft: 3,
    },
  };
  const hoverChildren = {
    hover: { backgroundColor: "#38a745", borderRadius: 100 },
  };
  const ParentAnimation = ({ children }) => {
    return (
      <motion.div
        variants={parentHover}
        whileHover="hover"
        initial={{ fontWeight: "normal", fontSize: "1em" }}
      >
        {children}
      </motion.div>
    );
  };
  const ItemsName = (name, value, id) => {
    return (
      <div
        onMouseEnter={() => setParentId(id)}
        onMouseLeave={() => setParentId(null)}
        className="flex flex-row items-center gap-x-4 mb-3"
      >
        <motion.div
          variants={hoverChildren}
          animate={parentId === id ? "hover" : undefined}
        >
          <div className="w-4 h-4 border-4 border-[#38a745] rounded-full"></div>
        </motion.div>
        <ParentAnimation>
          <div>
            <span className="text-lg font-semibold text-gray-500">{name}</span>
            <span className="text-lg font-semibold text-green-400 ml-1">
              ( {value} )
            </span>
          </div>
        </ParentAnimation>
      </div>
    );
  };
  return (
    <div className="border-2 rounder-md p-12">
      <div>
        <h1 className="md:text-2xl font-bold text-gray-600">Job Location</h1>
        <div className="flex justify-center items-center my-3">
          <hr className="w-20 border-2 border-green-500" />
          <hr className="w-full border border-gray-200" />
        </div>
        <div className="flex flex-col  my-6">
          {ItemsName("Dhaka", 11, 1)}
          {ItemsName("Rajshai", 5, 2)}
          {ItemsName("Khulna", 15, 3)}
          {ItemsName("Barisal", 1, 4)}
        </div>
      </div>
    </div>
  );
};

export default JobLocation;
