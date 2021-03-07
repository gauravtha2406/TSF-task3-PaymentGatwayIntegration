import React from "react";
import Img_about from "../Images/b.jpg";
import "../index.css";
import img2 from "../Images/c.jpg";

const About = () => {
  return (
    <>
      <section id="about-header">
        <div className="about-image">
          <img src={Img_about} alt="not found" />
        </div>
        <div className="container my-4">
          <div className="row">
            <div className="col-10 col-sm-6 offset-1 offset-sm-0 ">
              <h1>About Us</h1>
              <p>
                We are committed to changing the way people look at ageing in
                India. We enable senior citizens to lead active lives through
                easy access to trusted information, opportunities for productive
                ageing and social support services.
              </p>
              <p>
                The aim is to serve elder needs in a holistic manner, enabling
                them to live active, dignified and healthier lives.
              </p>
              <h1>Our Mission</h1>
              <p>
                To create an enlightened society in which senior citizens feel
                secure, confident and valued, and can live with dignity.
              </p>
            </div>
            <div className="col-10 col-sm-6 offset-1 offset-sm-0 d-flex justify-content-center about-side-image">
                <img src={img2} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
