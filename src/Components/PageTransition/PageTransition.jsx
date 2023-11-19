import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
const PageTransition = ({ children }) => {
  const location = useLocation();
  return (
    <>
      {children}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          className="fixed top-0 left-0 w-full h-full bg-green-600 origin-bottom z-50"
          initial={{
            scaleY: 1,
          }}
          animate={{
            scaleY: 0,
          }}
          exit={{
            scaleY: 0,
          }}
          transition={{ duration: 1, ease: [0.22, 0.11, 0.36, 1] }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span className="loading loading-bars loading-lg text-green-500"></span>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default PageTransition;
