import React from "react";
import "../BookADemo/BookADemo.css";
import { Link } from "react-router-dom";

function BookADemo() {
  return (
    <>
      <div
        className="container-float-start"
        style={{ backgroundColor: "#51cada", height: "123vh" }}
      >
        <div style={{ scale: "0.8", marginLeft: "-18%" }}>
          <img src="/assest/images/Login/drgif.gif" alt="doc" />
        </div>
        <form id="contact" action="" className="loginBox" method="post">
          <Link to={"/"}>
            <img
              className="user"
              alt="user"
              src="/assest/images/HomeImages/logo.png"
              height="100px"
              width="100px"
            />
          </Link>
          <h3 style={{ textAlign: "center", fontSize: "17px" }}>Book A Demo</h3>

          <fieldset>
            <select
              class="form-select form-select-sm"
              aria-label=".form-select-sm example"
            >
              <option selected>How To Contact You?</option>
              <option value="1">Phone</option>
              <option value="2">Email</option>
            </select>
          </fieldset>
          <fieldset>
            <input type="text" placeholder="Contact Details" />
          </fieldset>
          <fieldset>
            <select
              class="form-select form-select-sm"
              aria-label=".form-select-sm example"
            >
              <option selected>Location</option>
              <option value="1">Canada</option>
              <option value="2">UK</option>
              <option value="3">US</option>
              <option value="4">Pakistan</option>
            </select>
          </fieldset>
          <fieldset>
            <select
              class="form-select form-select-sm"
              aria-label=".form-select-sm example"
            >
              <option selected>Specialities</option>
              <option value="1">Aesthetic</option>
              <option value="2">Audiologist</option>
              <option value="3">Cannabis</option>
              <option value="4">Chiropractic</option>
              <option value="5">Dental</option>
              <option value="6">Dermatology</option>
              <option value="7">Eye-care</option>
              <option value="8">Fertility</option>
              <option value="9">GP</option>
              <option value="10">Other</option>
            </select>
          </fieldset>
          <fieldset>
            <select
              class="form-select form-select-sm"
              aria-label=".form-select-sm example"
            >
              <option selected>Demo From Support Team</option>
            </select>
          </fieldset>

          <fieldset>
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
              style={{ backgroundColor: "#51cada" }}
            >
              Submit
            </button>
          </fieldset>
          <p className="copyright" style={{ color: "white" }}>
            Designed by{" "}
            <Link
              to="/"
              title="#"
              style={{ color: "white", textDecoration: "none" }}
            >
              Virtualtriage
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default BookADemo;
