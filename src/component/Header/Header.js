import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* <!-- Header 1 */}
      {/* ============================================ --> */}
      <Navbar expand="lg" className="p-3 bg-transparent">
        <Container>
          <Navbar.Brand>
            <Link to={"/"}>
              <img
                data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                src="/assest/images/HomeImages/logo.png"
                alt="no internet"
                className="logonavbar"
                width={100}
                style={{ height: "52px" }}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ border: "solid 1px white", marginLeft: "-14px" }}
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="d-felx justify-content-end"
          >
            <Nav className="">
            <Link
                to="/"
                className="text-light pr-5"
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  fontFamily: "sans-serif",
                  marginTop:"7px"
                }}
              >
                Home
              </Link>
              <Link
                to="/Features"
                className="text-light pr-5"
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  fontFamily: "sans-serif",
                  marginTop:"7px"
                }}
              >
                Features
              </Link>
              <Link
                to="/Specialities"
                className="text-light pr-5"
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  fontFamily: "sans-serif",
                  marginTop:"7px"
                }}
              >
                Our Specialities
              </Link>
              <Link
                to="/Pricing"
                className="text-light pr-5"
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  fontFamily: "sans-serif",
                  marginTop:"7px"
                }}
              >
                Pricing
              </Link>
              <Link
                to="/Contact"
                className="text-light pr-5"
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  fontFamily: "sans-serif",marginTop:"7px"
                }}
              >
                Contact
              </Link>
                <Link
                to="https://portal.virtualtriage.ca/login"
                data-aos="fade-left"
                className="btnloginmobi"
                style={{
                  border: " solid 1px white",
                  color: "rgb(50, 198, 218);",
                  padding: "5px 15px",
                  margin: "4px 10px",
                  borderRadius: "10px",
                  fontSize: "18px",
                  fontFamily: "sans-serif",
                }}
              >
                Login
              </Link>
            
               <Link
                to="https://portal.virtualtriage.ca/register"
                data-aos="fade-left"
                className="btnloginmobi"
                style={{
                  border: " solid 1px white",
                  color: "rgb(50, 198, 218);",
                  padding: "5px 15px",
                  margin: "4px 10px",
                  borderRadius: "10px",
                  fontSize: "18px",
                  fontFamily: "sans-serif",
                }}
              >
                Sign Up
              </Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
