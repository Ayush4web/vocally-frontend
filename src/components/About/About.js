import React from "react";
import Service from "../../assets/pickup_service.png";
import "./About.css";

const About = () => {
  return (
    <div className="service-section">
      <div className="mobile-image">
        <img className="service" src={Service} alt="service" />
      </div>
      <div className="service-text">
        <h1 className="headline">
          Focused on <br /> Time Saving
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit nemo,
          culpa quibusdam nobis quae est quam praesentium doloribus rerum
          laborum fugiat architecto omnis dolorem explicabo magni dignissimos
          voluptates repudiandae ipsa assumenda accusantium molestiae sint
          provident sunt dolore! Aperiam inventore dolorem atque doloribus
          nesciunt iusto ipsa, minus dolores sapiente voluptate eos.
        </p>
        <button className="download-btn">Download the mobile app</button>
      </div>
    </div>
  );
};

export default About;
