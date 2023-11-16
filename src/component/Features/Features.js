import React from "react";
import ContactHeader from "../Contact/ContactHeader";
import Footer from "../Footer/Footer";
import "../Features/Features.css";
function Features() {
  return (
    <>
      <ContactHeader />
      <div
        id="contact-area"
        className="contact-area"
        style={{
          backgroundImage: "url('/assest/images/HomeImages/SecEight.png')",
          backgroundColor: "#ffffffcc",
          backgroundBlendMode: "overlay",
          backgroundSize: "cover",
          backgroundRepeat:"no-repeat",
        }}
      >
        <div className="container pb-5 pt-1">
          <section id="advertisers" class="advertisers-service-sec pt-5 pb-5">
            <div class="container">
              <div class="row">
                <div class="section-header text-center">
                  <h2
                    class="fw-bold fs-1"
                    data-aos="flip-left"
                    style={{ color: "#69cddd" , fontFamily:"sans-serif"}}
                  >
                    FEATURES
               
                  </h2>
                
                </div>
              </div>
              <div class="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
                <div class="col">
                  <div class="service-card">
                    
                    <h3 style={{fontFamily:"sans-serif"}}>
                      Redefining Healthcare Accessibility with Our Comprehensive
                      App
                    </h3>
                    <p style={{fontFamily:"sans-serif"}}>
                      In the ever-evolving landscape of healthcare, our app
                      emerges as a comprehensive solution, combining
                      cutting-edge technology with practical solutions to
                      redefine your healthcare experience. We aim to bridge the
                      gap between patients and healthcare providers by
                      revolutionizing the way healthcare services are delivered.
                    </p>
                  </div>
                </div>
                <div class="col">
                  <div class="service-card">
                   
                    <h3 style={{fontFamily:"sans-serif"}}>On-Demand AI Chatbot for Consistent Guidance</h3>
                    <p style={{fontFamily:"sans-serif"}}>
                      Our healthcare app is home to an intuitive AI chatbot,
                      always at your service. This digital assistant is
                      programmed to guide you through any health-related
                      confusions, answering your questions and providing
                      information whenever you need it. With this feature,
                      reliable healthcare advice is just a tap away.
                    </p>
                  </div>
                </div>
                <div class="col">
                  <div class="service-card" style={{backgroundColor:"#69cddd"}}>
                 
                    <h3 style={{fontFamily:"sans-serif"}}>
                      Experience the Convenience of Online Appointments and
                      E-Prescriptions
                    </h3>
                    <p style={{fontFamily:"sans-serif"}}>
                    The era of standing in queues and rushing to physical clinics is over. Our app's key feature includes the convenience of scheduling online appointments. You can connect with your preferred healthcare providers at your own convenience.
                    </p>
                  </div>
                </div>
                <div class="col">
                  <div class="service-card">
                    
                    <h3 style={{fontFamily:"sans-serif"}}>Safe and Secure E-Payments</h3>
                    <p style={{fontFamily:"sans-serif"}}>
                      Our healthcare app places high priority on the security of
                      your transactions. We support secure e-payments, ensuring
                      a seamless and cashless experience. Our robust encryption
                      practices keep your transactions confidential and secure,
                      providing you peace of mind every time you use our
                      services.
                    </p>
                  </div>
                </div>
                <div class="col">
                  <div class="service-card">
                   
                    <h3 style={{fontFamily:"sans-serif"}}>Say Goodbye to Wasted Time and Money</h3>
                    <p style={{fontFamily:"sans-serif"}}>
                      Long waiting times and stressful journeys to clinics can
                      now be a thing of the past. Our app's primary goal is to
                      save your time and money by enabling you to manage your
                      healthcare needs from the comfort of your home. No more
                      waiting, no more traffic, just convenient and stress-free
                      healthcare at your fingertips
                    </p>
                  </div>
                </div>
                <div class="col">
                  <div class="service-card">
                    
                    <h3 style={{fontFamily:"sans-serif"}}>Find Your Preferred Healthcare Providers with Ease</h3>
                    <p style={{fontFamily:"sans-serif"}}>
                      Looking for a specific specialty doctor in your area? Need
                      to locate the nearest clinic quickly? Our intelligent
                      search feature and integrated in-app map make it easy to
                      find doctors, clinics, and healthcare providers based on
                      specialty, location, or any other preference you might
                      have. Healthcare has never been this personalized.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                
              </div>
            </div>
          </section>
          {/* <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-2"></div>
            <div className="col-md-2" data-aos="zoom-in-right">
              <img src="/assest/images/Feuters/1.png" alt="contact1" />
            </div>
            <div className="col-md-2" data-aos="zoom-in-up">
              <img src="/assest/images/Feuters/1.png" alt="contact2" />
            </div>
            <div className="col-md-2" data-aos="zoom-in-left">
              <img src="/assest/images/Feuters/1.png" alt="contact3" />
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-1"></div>
          </div> */}
          {/* <br />
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-2"></div>
            <div className="col-md-2" data-aos="zoom-in-right">
              <img src="/assest/images/Feuters/1.png" alt="contact1" />
            </div>
            <div className="col-md-2" data-aos="zoom-in-down">
              <img src="/assest/images/Feuters/1.png" alt="contact2" />
            </div>
            <div className="col-md-2" data-aos="zoom-in-left">
              <img src="/assest/images/Feuters/1.png" alt="contact3" />
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-1"></div>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Features;
