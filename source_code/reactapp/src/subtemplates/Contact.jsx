import React from "react";
import Footer from "../main_template/Footer";
import ContactForm from "../subtemplates/ContactForm";
import NavBar from "../main_template/NavBar";

function Contact() {
  return (
    <div>
      <NavBar />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contact;
