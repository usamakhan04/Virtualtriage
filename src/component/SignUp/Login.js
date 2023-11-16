import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../SignUp/SignIn.css";

function Login() {
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
    <div style={{ backgroundColor: "#51cada", height: "123vh" }}>
      <div style={{ scale: "0.8", marginLeft: "-18%" }}>
        <img
          className="mb-none"
          src="/assest/images/Login/drgif.gif"
          alt="doc"
        />
      </div>

      <section
        class="fix"
        style={{
          backgroundImage:
            "url('/assest/images/HomeImages/new logo VT-02-1.png')",
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgb(9 181 205 / 82%)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="loginBox" id="loginBoxmobi">
          {" "}
          <Link to={"/"}>
            <img
              className="user"
              alt="user"
              src="/assest/images/HomeImages/logo.png"
              height="100px"
              width="100px"
            />
          </Link>
          <h3 style={{ fontSize: "17px", fontFamily: "sans-serif" }}>LOGIN</h3>
          {/* <form action="login.php" method="post"> */}
          <div className="inputBox">
            {" "}
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
            <select
              class="form-select"
              aria-label="Default select example"
              style={{ borderRadius: "10px" }}
            >
              <option selected>Patient</option>
              <option value="1">Practitioner</option>
            </select>{" "}
            <br />
          </div>
          <input type="submit" value={"Login"} name="" defaultValue="Login" />
          {/* </form> */}
          <div className="text-center">
            <p style={{ color: "white", fontFamily: "sans-serif" }}>
              Don't Have an Account?
              <Link
                to="/SignUp"
                style={{ color: "white", fontFamily: "sans-serif" }}
              >
                Sign-Up
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
