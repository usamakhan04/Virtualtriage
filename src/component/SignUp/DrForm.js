import React, { useEffect, useRef, useState } from "react";
import intlTelInput from "intl-tel-input";
import { Link } from "react-router-dom";
import "intl-tel-input/build/css/intlTelInput.css";
import "./DrForm.css";

function DrForm() {
  const phoneInputRef = useRef(null);

  useEffect(() => {
    const phoneInput = phoneInputRef.current;

    if (phoneInput) {
      intlTelInput(phoneInput, {
        initialCountry: "auto",
        separateDialCode: false,
      });
    }
  }, []);
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  return (
    <>
      <div
        className="container-float-start mainSignbnner"
        style={{ backgroundColor: "#51cada", height:"123vh"}}
      >
        <div style={{scale:"0.8",marginLeft:"-18%"}}>
           <img className="mb-none"
          src="/assest/images/Login/drgif.gif"
          alt="doc"
         
        />
        </div>
       
        <div className="DrBox" id="drbox">
          {" "}
          <Link to={"/"}>
            <img
              className="user"
              alt="user"
              id="users"
              src="/assest/images/HomeImages/logo.png"
              height="100px"
              width="100px"
            />
          </Link>
          <h3 style={{ fontSize: "17px", fontFamily:"sans-serif" }}>Practitioner SignUp</h3>
          {/* <form action="login.php" method="post"> */}
          <div className="inputBox">
            <input
              id="uname"
              type="text"
              name="Username"
              placeholder="Enter Your Full Name"
              style={{ background: "white", color: "black" }}
            />{" "}
            <input
              id="uname"
              type="text"
              name="Username"
              placeholder="Enter Your Email"
              style={{ background: "white", color: "black" }}
            />{" "}
            <fieldset>
              <input
                type="tel"
                ref={phoneInputRef}
                placeholder="Enter Your Phone"
                style={{
                  background: "white",
                  color: "black",
                  borderRadius: "5px",
                  height: "40px",
                }}
              />
            </fieldset>
            <div className="input-group">
              <input
                type={passwordType}
                onChange={handlePasswordChange}
                value={passwordInput}
                name="password"
                class="form-control"
                placeholder="Password"
                style={{ background: "white", color: "black" }}
              />
              <div className="input-group-btn">
                <button
                  className="btn btn-outline-primary eyebtn"
                  onClick={() => togglePassword()}
                >
                  {passwordType === "password" ? (
                    <i class="fa-solid fa-eye-slash"></i>
                  ) : (
                    <i class="fa-solid fa-eye"></i>
                  )}
                </button>
              </div>
            </div>
            <br />
            <div className="input-group">
              <input
                type={passwordType}
                onChange={handlePasswordChange}
                value={passwordInput}
                name="password"
                class="form-control"
                placeholder="Confirm Password"
                style={{ background: "white", color: "black" }}
              />
              <br />
              <div className="input-group-btn">
                <button
                  className="btn btn-outline-primary eyebtn"
                  onClick={() => togglePassword()}
                >
                  {passwordType === "password" ? (
                    <i class="fa-solid fa-eye-slash"></i>
                  ) : (
                    <i class="fa-solid fa-eye"></i>
                  )}
                </button>
              </div>
            </div>
            <fieldset className="pt-4">
              <select
                class="form-select form-select-sm"
                aria-label=".form-select-sm example"
              >
                <option disabled selected>Select Speciality</option>
                <option value="Aesthetic">Aesthetic</option>
                <option value="Audiologist">Audiologist</option>
                <option value="Cannabis">Cannabis</option>
                <option value="Chiropractic">Chiropractic</option>
                <option value="Dental">Dental</option>
                <option value="Dermatology">Dermatology</option>
                <option value="Eye Care">Eye Care</option>
                <option value="Fertility">Fertility</option>
                <option value="General Physician">General Physician</option>
                <option value="Hair Treatments">Hair Treatments</option>
                <option value="Medical Therapy">Medical Therapy</option>
                <option value="Naturopathic">Naturopathic</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Nutrition">Nutrition</option>
                <option value="Optometry">Optometry</option>
                <option value="Orthotics">Orthotics</option>
                <option value="Physiotherapy">Physiotherapy</option>
                <option value="Plastic Surgery">Plastic Surgery</option>
                <option value="Podiatry">Podiatry</option>
                <option value="Psychology">Psychology</option>
                <option value="Radiologist">Radiologist</option>
                <option value="Sleep">Sleep</option>
                <option value="Sports Medicine">Sports Medicine</option>
                <option value="Veterinary">Veterinary</option>
                <option value="Wellness">Wellness</option>
                <option value="Women's Health">Women's Health</option>
              </select>
            </fieldset>
            <br />
          </div>
          <input type="submit" value={"SignUp"} name="" defaultValue="Login" />
          {/* </form> */}
          <div className="text-center" style={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
            <p style={{ color: "white", display:"contents", textAlign:"center", fontFamily:"sans-serif" }}>
              Already Have an Account?
              <Link to="/Login" style={{ color: "white" }}>
                Login
              </Link>
            </p>
            
          </div>
          <div className="text-center" style={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
            <p style={{ color: "white", display:"contents", textAlign:"center", fontFamily:"sans-serif" }}>
            Create a Patient Account
              <Link to="/SignUp" style={{ color: "white" }}>
              Sign-Up
              </Link>
            </p>
            
          </div>

         
          <hr />
          <div className="text-center" style={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
            <p style={{ color: "white", display:"contents", textAlign:"center", fontFamily:"sans-serif" }}>
              Purchase a Package
              <Link to="https://portal.virtualtriage.ca/doctornewpackage" style={{ color: "white" }}>
                Click Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DrForm;
