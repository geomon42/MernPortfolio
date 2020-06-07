import React from "react";
import GetIntouch from "../main_template/GetIntouch";
import NavBar from "../main_template/NavBar";
import Footer from "../main_template/Footer";
import Subabout from "./Subabout";

function About() {
  return (
    <div>
      <NavBar />
      <Subabout />
      <GetIntouch />
      <Footer />
    </div>
  );
}

export default About;
