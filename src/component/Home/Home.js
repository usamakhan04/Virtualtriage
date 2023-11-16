import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import OurDocterSec from "../AllSection/HomeSec/OurDocterSec";
import SecFour from "../AllSection/HomeSec/SecFour";
import SecFive from "../AllSection/HomeSec/SecFive";
import SecSeven from "../AllSection/HomeSec/SecSeven";
import SecEight from "../AllSection/HomeSec/SecEight";
import NewRatingCard from "../AllSection/NewRatingCard";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <OurDocterSec />
      <SecFour />
      <SecFive />
      <NewRatingCard />
      <SecSeven />
      <SecEight />
      <Footer />
    </>
  );
};

export default Home;
