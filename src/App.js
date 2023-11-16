import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Home from "./component/Home/Home";
import Features from "./component/Features/Features";
import Specialities from "./component/Specialities/Specialities";
import CardSlider from "./component/CardSlider/CardSlider";
import OurDoctors from "./component/Pages/OurDoctors";
import Pricing from "./component/Pages/Pricing";
import OurDocterSec from "./component/AllSection/HomeSec/OurDocterSec";
import SecFour from "./component/AllSection/HomeSec/SecFour";
import SecFive from "./component/AllSection/HomeSec/SecFive";
import SecSix from "./component/AllSection/HomeSec/SecSix";
import SecSeven from "./component/AllSection/HomeSec/SecSeven";
import SecEight from "./component/AllSection/HomeSec/SecEight";
import BookADemo from "./component/BookADemo/BookADemo";
import SignUp from "./component/SignUp/SignUp";
import DrForm from "./component/SignUp/DrForm";
import NewRatingCard from "./component/AllSection/NewRatingCard";

import "./App.css"
// ----
import ImportablePatientHistory from "./component/Footer/FooterPages/ImportablePatientHistory";
import Login from "./component/SignUp/Login";

import Privacypolicy from "./component/Footer/FooterPages/Privacypolicy";

function App() {
  useEffect(() => { 
    console.log("hell")
      // window.onload = ()=> window.scrollTo(0,0)
      window.history.scrollRestoration ="manual"
  }, []);
  return (
    <>
      <BrowserRouter>
      <Routes >
      <Route path="/" element={<Home />}></Route>
      <Route path="/Features" element={<Features />}></Route>
      <Route path="/Specialities" element={<Specialities />}></Route>
      <Route path="/OurDoctors" element={<OurDoctors />}></Route>
      <Route path="/Pricing" element={<Pricing />}></Route>
      {/* ------------------- */}
      <Route path="/SecEight" element={<SecEight />}></Route>
      <Route path="/SecSeven" element={<SecSeven />}></Route>
      <Route path="/SecSix" element={<SecSix />}></Route>
      <Route path="/SecFive" element={<SecFive />}></Route>
      <Route path="/SecFour" element={<SecFour />}></Route>
      <Route path="/BookADemo" element={<BookADemo />}></Route>
      <Route path="/OurDocterSec" element={<OurDocterSec />}></Route>
      <Route path="/CardSlider" element={<CardSlider />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/SignUp" element={<SignUp />}></Route>

      <Route path="/Login" element={<Login />}></Route>
      <Route path="/DrForm" element={<DrForm />}></Route>
      <Route path="/Privacypolicy" element={<Privacypolicy />}></Route>
      <Route path="/NewRatingCard" element={<NewRatingCard />}></Route>
      
      {/* -------footer pages ------------ */}
      <Route path="/ImportablePatientHistory" element={<ImportablePatientHistory />}></Route>

      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
