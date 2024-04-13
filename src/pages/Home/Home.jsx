import { Helmet } from "react-helmet-async";
import Estates from "./Estates";
import Slider from "./Slider";
import Reviews from "./Reviews";
import Faq from "./Faq";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>DH | Home</title>
      </Helmet>
      <Slider></Slider>
      <Estates></Estates>
      <Reviews></Reviews>
      <Faq></Faq>
    </div>
  );
};

export default Home;
