import React, { useState } from "react";
import { Link } from "react-router-dom";
import './SignUp.css'
function SignUp() {
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
        className="container-float-start"
        style={{ backgroundColor: "#51cada", height:"123vh"}}
      >
        <div style={{scale:"0.8",marginLeft:"-18%"}}>
           <img className="mb-none"
          src="/assest/images/Login/drgif.gif"
          alt="doc"
         
        />
        </div>
       
      <div className="signupBox" id="SignupBox">
            {" "}
            <Link to={"/"}>
              <img
                className="user"
                id="users"
                alt="user"
                src="/assest/images/HomeImages/logo.png"
                height="100px"
                width="100px"
              />
            </Link>
            <h3 style={{ fontSize: "17px", fontFamily:"sans-serif" }}>Patient's SignUp</h3>
            <div className="inputBoxup">
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
              <br />
            </div>
            <input
              type="submit"
              value={"SignUp"}
              name=""
              defaultValue="Login"
            />
            <div className="text-center">
              <p style={{ color: "white", fontFamily:"sans-serif" }}>
                Already Have an Account?
                <Link to="/Login" style={{ color: "white", fontFamily:"sans-serif" }}>
                  Login
                </Link>
              </p>
            </div>
            <hr />
            <div className="text-center">
              <p style={{ color: "white", fontFamily:"sans-serif" }}>
                Request for a Practitioner Account
                <Link to="/DrForm" style={{ color: "white", fontFamily:"sans-serif" }}>
                  Click Here
                </Link>
              </p>
            </div>
          </div>
        
      </div>

        

   
      </>
  );
}

export default SignUp;
