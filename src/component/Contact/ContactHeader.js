import React, { useEffect } from "react";
import Header from "../Header/Header";
import AOS from "aos";

function ContactHeader() {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds (1 second)
          delay: 200, // Delay before animation starts in milliseconds (200 milliseconds)
        });
      }, []);
  return (
    <>
      {/* <!-- Hero Area============================================ --> */}
      <div
        className="fix"
        style={{
          // backgroundImage: "url('/assest/images/HomeImages/Header2img.png')",
          // backgroundSize: "cover",
          background: 'black',
          boxShadow: '10px 10px 20px black',
        }}
      >
        <Header />
      
      </div>
    </>
  );
}

export default ContactHeader;
