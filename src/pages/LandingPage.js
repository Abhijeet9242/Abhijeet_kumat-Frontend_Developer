import Header from "../components/Header";
import MyCarousel from "../components/MyCarousel";
import "./LandingPage.css";
import Showcase from "../components/Showcase";
import Destinations from "../components/Destination";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <Header />
      <MyCarousel />
      <Showcase />
      <Destinations />
      <Footer />
    </>
  );
};

export default LandingPage;
