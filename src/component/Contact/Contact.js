import React, { useState } from 'react';
import axios from 'axios';
import ContactHeader from "./ContactHeader";
import Footer from "../Footer/Footer";
import "../Contact/Contact.css"
import Swal from 'sweetalert2';
const Contact = () => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Define your API endpoint here
    const apiUrl = 'https://portal.virtualtriage.ca/contact_email';

    // Create a FormData object and append the form data to it
    const formData = new FormData();
    formData.append("name", name);
    formData.append("number", number);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("type", "contact");

    // Send a POST request with the FormData
    axios
      .post(apiUrl, formData)
      .then((response) => {
        // Handle a successful response here (e.g., show a success message)
        console.log('Form submitted successfully', response);
        Swal.fire({
          icon: 'success',
          title: 'Form Submitted!',
          text: 'Your form has been submitted successfully.',
        });
        // You can display a success message or redirect the user
      })
      .catch((error) => {
        // Handle any errors here (e.g., show an error message)
        console.error('Error submitting form', error);
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'An error occurred while submitting the form.',
        });
      });
  }; 
  return (
    <>
    
      <ContactHeader />
      <div
        id="contact-area"
        className="contact-area"
        style={{
          backgroundImage: "url('/assest/images/HomeImages/HomBanner.png')",
          // backgroundColor: "#38c7da",
          backgroundSize: "cover",
        }}
      >
        <div className="container pb-60 pt-60">
          {/* <!-- Section Title --> */}
          <div className="text-center">
              <h3 className="heading" style={{ color: "#69cddd" , fontFamily:"sans-serif"}} data-aos="zoom-in-up">
                CONTACT
              </h3>
              {/* <i className="icofont icofont-traffic-light"></i> */}
            </div>
          <div className="row">
           
            <div className="d-flex dflexmobi dfdestop">
            <div className="col-md-1 d-none"></div>
            <div className="col-md-2 d-none"></div>
            <div
              className="col-md-2 colcontactmob"
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img src="/assest/images/Contact/1.png" alt="contact1" />
            </div>
            <div
              className="col-md-2 colcontactmob"
              data-aos="flip-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img src="/assest/images/Contact/2.png" alt="contact2" />
            </div>
            <div
              className="col-md-2 colcontactmob"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img src="/assest/images/Contact/3.png" alt="contact3" />
            </div>
            <div className="col-md-2 d-none"></div>
            <div className="col-md-1 d-none"></div>
            </div>
          </div>
          <div className="text-center col-12 mb-20 pt-40">
            <h3 className="heading" style={{ color: "#69cddd", fontFamily:"sans-serif" }} data-aos="zoom-in">
              CONTACT US
            </h3>
            {/* <i className="icofont icofont-traffic-light"></i> */}
          </div>

          <div className="center-container">
            {/* <!-- Contact Form --> */}
            {/* <div
              className="contact-form form text-left col-lg-8 col-sm-7 col-md-12"
            >
              <form id="contact-form" action="#" method="post">
                <div className="input-3">
                  <div className="input">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Name"
                      style={{ background: "#69cddd", borderRadius:"10px", opacity:0.7 }}
                      className="pl-2 ukyy"
                    />
                  </div>
                  <div className="input">
                    <input
                      type="text"
                      name="Number"
                      placeholder="Enter Phone Number"
                      style={{ background: "#69cddd", borderRadius:"10px", opacity:0.7 }}
                      className="pl-2 ukyy"
                    />
                  </div>
                  <div className="input">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter E-mail"
                      style={{ background: "#69cddd", borderRadius:"10px", opacity:0.7 }}
                      className="pl-2 ukyy"
                    />
                  </div>
                </div>
                <div className="input textarea">
                  <textarea
                    name="message"
                    placeholder="Type Your Message"
                    style={{ background: "#69cddd", borderRadius:"10px", opacity:0.7 }}
                    className="pl-2 ukyy"
                  ></textarea>
                </div>
                <div
                  className="input input-submit"
                  style={{ textAlign: "center" }}
                >
                  <input
                    type="submit"
                    value="send message"
                    style={{ background: "#69cddd", border: "solid 1px white", borderRadius:"10px", fontFamily:"sans-serif" }}
                  />
                </div>
              </form>
              <p className="form-messege"></p>
            </div> */}
             <div className="contact-form form text-left col-lg-8 col-sm-7 col-md-12">
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="input-3">
          <div className="input">
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              autocomplete="off"
              onChange={(e)=>setName(e.target.value)}
              className="pl-2"
              id='ukyy bg-info2'
            />
          </div>
          <div className="input">
            <input
              type="text"
              name="number"
              autoComplete="off"
              placeholder="Enter Phone Number"

              onChange={(e)=>setNumber(e.target.value)}
              className="pl-2 ukyy"
            />
          </div>
          <div className="input">
            <input
              type="email"
              name="email"
              placeholder="Enter E-mail"
              autoComplete="off"
              onChange={(e)=>setEmail(e.target.value)}
              className="pl-2 ukyy"
            />
          </div>
        </div>
        <div className="input textarea">
          <textarea
            name="message"
            placeholder="Type Your Message"
            autocomplete="off"
            onChange={(e)=>setMessage(e.target.value)}
            className="pl-2 ukyy"
          ></textarea>
        </div>
        <div className="input input-submit" style={{ textAlign: "center" }}>
          <input
            type="submit"
            value="send message"
            style={{
              background: "#69cddd",
              border: "solid 1px white",
              borderRadius: "10px",
              fontFamily: "sans-serif",
            }}
          />
        </div>
      </form>
      <p className="form-message"></p>
    </div>
          </div>
        </div>
        
      </div>
      <Footer />
    </>
  );
};

export default Contact;
