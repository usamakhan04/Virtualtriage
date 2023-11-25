import React from "react";
import "../../AllSection/HomeSec/SecEight.css";
import { Link } from "react-router-dom";
// import Robothandpic from "../../../assets/Images/HomeImages/sec3.png"

function SecEight() {
  return (
    <>
      {/* <!-- Hero Area============================================ --> */}
      <div
        className="fix fixmobi"
        style={{
          backgroundImage: "url('/assest/images/HomeImages/tec-law.png')",
          backgroundSize: "cover",
          height: "800px",
        }}
      >
        <div className="container">
          <div className="hero-slide-content heromobi">
            <div className="row">
              <div className="col-md-6">
                <h2
                  style={{ color: "white", fontSize: "48px", fontFamily:"sans-serif" }}
                  data-aos="zoom-in-right"
                >
                  Experience
                  <br />
                  the Future of
                  <br />
                  <h2 style={{ color: "black", fontSize: "48px", fontFamily:"sans-serif", fontWeight:"bold", textShadow:"0 0 10px #fff" }} className="digitaltextmobi">
                    Digital
                    <br />
                    Healthcare
                  </h2>
                  Powered by
                  <br />
                  AI
                </h2>
                <h5 style={{ color: "white", fontFamily:"sans-serif" }} data-aos="flip-up">
                  Book an appointment online
                  <br />
                  with the Practitioner of your choice.
                  <br />
                  Available 24/7 on Virtual Triage
                  <br />
                  Healthcare Platform.
                </h5>
                <br />
                <div style={{textAlign:"center"}}>
                <div className="col-md-2"  style={{ marginTop: "40px" }}>
                  <Link
                    to={
                      "https://apps.apple.com/pk/app/virtual-triage/id1644720170"
                    }
                  >
                    <img
                      alt="baner1"
                      src="/assest/images/FooterImg/App.png"
                      style={{
                        border: "solid 1px white",
                        borderRadius: "5px",
                        scale:"2.5",
                        marginLeft:"40px"
                      }}
                      // 
                      className="eightapp mobiiconapp"
                    />
                  </Link>
                </div>
                <div className="col-md-2 googlemobipicdiv" style={{ marginTop: "50px" }}>
                  <Link
                    to={
                      "https://play.google.com/store/apps/details?id=com.earcanada"
                    }
                  >
                    <img
                      alt="baner2"
                      src="/assest/images/FooterImg/google.png"
                      style={{
                        border: "solid 1px white",
                        borderRadius: "5px",
                        scale:"2.5",
                        marginLeft:"40px"

                      }}
                      // data-aos="flip-left"
                      className="eightgoogle mobiiconapp"
                    />
                  </Link>
                </div>
                
                </div>
                
              </div>
              <div className="col-md-6">
                {/* <div  >
                  <img
                    src={Robothandpic}
                    alt="uk"
                    style={{ marginTop: "200px", marginLeft: "-121px", height:"55px" }}
                    data-aos="zoom-in"
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecEight;
