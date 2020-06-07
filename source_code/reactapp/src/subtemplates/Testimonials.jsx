import React from "react";
import "./Testi.css";
import engel from "../image/engel.jpg";

function Testimonials() {
  return (
    <div>
      <div className="testimonials">
        <div className="testimonial-container">
          <h1>Happy Clients</h1>
          <div className="row">
            <div className="col-md-4 text-center">
              <div className="profile">
                <img src={engel} className="user" />
                <blockquote>
                  Jeric is a great guy Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quis eos deleniti iure. Qui rem eveniet eos
                  quam placeat quisquam.
                </blockquote>
                <h3>Engel Valenzuela</h3>
              </div>
            </div>
            <div className="">
              <div className="profile">
                <img src={engel} className="user" />
                <blockquote>
                  Jeric is a great guy Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quis eos deleniti iure. Qui rem eveniet eos
                  quam placeat quisquam.
                </blockquote>
                <h3>Engel Valenzuela</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
