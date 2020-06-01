import React from "react";
import NavBar from "../main_template/NavBar";
import ContactForm from "../subtemplates/ContactForm";
import Footer from "../main_template/Footer";
import ProjectsForm from "./ProjectsForm";

function Projects() {
  return (
    <div>
      <NavBar />
      <ProjectsForm />
      <Footer />
    </div>
  );
}

export default Projects;
