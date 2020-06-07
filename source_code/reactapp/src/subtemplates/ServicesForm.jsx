import React from "react";
import development from "../image/web-development.png";
import design from "../image/web-design.jpeg";

function ServicesForm() {
  return (
    <section>
      <div className="section-three">
        <div className="section-three-title">
          <h2>MY SERVICES</h2>
        </div>
        <div className="container-one">
          <img
            src={design}
            alt="logo of Web design"
            className="web-design-img"
          ></img>
          <h3>Web Design</h3>
          <p>User Focused</p>
          <p>
            A website should be designed for the people who will use it, so
            that's exactly what I do. User focused design should be the primary
            goal of any website.
          </p>
        </div>
        <div className="container-two">
          <img
            src={development}
            alt="logo of Web Development"
            className="web-development-img"
          ></img>
          <h3>Web Development</h3>
          <p>Responsive and Fast</p>
          <p>
            Every website should be built with two primary goals: Firstly, it
            needs to work across all devices. Secondly, it needs to be fast as
            possible.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ServicesForm;
