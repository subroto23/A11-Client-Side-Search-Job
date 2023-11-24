import { Helmet } from "react-helmet";
import Banner from "../Components/Banner/Banner";
import ChooseCatagory from "../Components/ChooseCatagory/ChooseCatagory";
import Jobs from "../Components/Jobs/Jobs";
import Trusted from "../Components/Trusted/Trusted";
const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jobs Search || Home Page </title>
      </Helmet>
      <Banner />
      <Jobs />
      <ChooseCatagory />
      <Trusted />
    </div>
  );
};

export default Home;
