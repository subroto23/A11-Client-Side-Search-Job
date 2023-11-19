import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import SubscribeNewsletter from "../SubscribeNews/SubscribeNewsletter";

const Root = () => {
  return (
    <div>
      <div className="mb-16">
        <Navbar />
      </div>
      <Outlet />
      <div className="md:-mb-20  -mb-16">
        <SubscribeNewsletter />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
