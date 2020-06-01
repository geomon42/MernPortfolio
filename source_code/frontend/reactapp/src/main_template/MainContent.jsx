import React from "react";
import { Link } from "react-router-dom";
import jek from "../image/jek.jpg";
import node from "../image/nodejs-logo.png";
import reactpic from "../image/react.gif";
import express from "../image/express.png";
import cora from "../image/cora.jpg";

function MainContent() {
  return (
    <div className="main-content">
      <main>
        <section className="section-one">
          <div className="first-list">
            <h1> Hey, I`m Jek.</h1>
            <h3>
              Full-Stack Developer from Metro Manila, Philippines. I create ,
              design custom websites to help businesses do better online.
            </h3>
            <div className="first-list-btn">
              <Link to="/project" className="link-button">
                My Projects
              </Link>
            </div>
          </div>
          <figure className="first-list-img">
            <picture>
              <img className="prof-pic" src={jek} alt="Logo" />
            </picture>
          </figure>
        </section>
        <section className="intro">
          <div className="intro-container">
            <h4>
              <b>
                <h3> Frontend Development </h3>
              </b>{" "}
              I have extensive programming experience and I`m comfortable
              developing on the frontend or backend as well as setting up or
              managing infrastracture. Frontend Development - i use technologies
              depending on the client`s requirements. ussually i use Javascript,
              html5, css3, Jquery for sample projects. on the other side i use
              React or Angular for bigger Projects.
            </h4>
            <h4>
              <b>
                <h3> Backend Development </h3>
              </b>{" "}
              My bread and butter is Django / Python or ExpressJs / NodeJs and
              its associated stack: MongoDB, MySQL, Postgres & Nginx. I am
              confortable using these technologies for all sorts of projects:
              full CMS websites, database-driven web applications and E-Commerce
              websites.
            </h4>
            <div className="prog-logo">
              <h3 style={{ color: "rgb(173, 174, 175)" }}>Powered By:</h3>
              <div className="prog-logo-list">
                <ul>
                  <li>
                    <img src={node} alt="expressjs" />
                  </li>
                  <li>
                    <img src={reactpic} alt="reactjs" />
                  </li>
                  <li>
                    <img src={express} alt="nodejs" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="section-two">
            <blockquote>
              <div className="quote-one">
                <p className="quote__txt_one">
                  "Jek is an excellent web designer and faultless technician.
                  He’s a pleasure to work with, great value for money and will
                  always go the extra mile when necessary."
                </p>
              </div>
              <cite className="first-cite">
                <img src={cora} alt="Corazon Kalinga"></img>
                <h6>Corazon Kalinga</h6>
                <p>
                  Owner of
                  <a href="https://www.quickflo.com.ph/" rel="noopener">
                    Quickflo Forwarders Inc.
                  </a>
                </p>
              </cite>
            </blockquote>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MainContent;
