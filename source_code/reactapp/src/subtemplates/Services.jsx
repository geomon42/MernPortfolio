import React from "react";
import NavBar from "../main_template/NavBar";
import Footer from "../main_template/Footer";
import GetIntouch from "../main_template/GetIntouch";
import webdev from "../image/webdev.png";
import webdesign from "../image/webdesign.png";
import wp from "../image/wp.png";
import ecommerce from "../image/ecommerce.png";
import seo from "../image/seo.png";
import responsive from "../image/responsive.png";
import "./Services.css";

function Services() {
  return (
    <div>
      <NavBar />
      <div id="services-header">
        <h1>My Services</h1>
        <p>
          Freelance Web Designer & Developer based in Manila, Philippines.
          Highly experienced in designing & developing custom Websites.
        </p>
      </div>
      <div className="services-list-container">
        <div className="services-wrapper">
          <div className="services-row">
            <div className="services-each">
              <img
                className="img-center"
                src={webdev}
                alt="website development"
              />
            </div>
            <h2>Website Development</h2>
            <p>
              The web development process involves taking the graphical elements
              defined in the design process and coding them into a custom
              website
            </p>
          </div>
          <div className="services-row">
            <div className="services-each">
              <img
                className="img-center"
                src={webdesign}
                alt="website development"
              />
            </div>
            <h2>Website Design</h2>
            <p>
              My approach to website design is to create a website that
              strengthens your company`s brand while ensuring ease of use and
              simplicity for your audience
            </p>
          </div>
          <div className="services-row">
            <div className="services-each">
              <img className="img-center" src={wp} alt="wordpress" />
            </div>
            <h2>WordPress Theme Development</h2>
            <p>
              WordPress CMS is a user-friendly administrative area following you
              to easily edit your website's content.
            </p>
          </div>
        </div>
        <div className="services-wrapper">
          <div className="services-row-2">
            <div className="services-each">
              <img className="img-center" src={responsive} alt="responsive" />
            </div>
            <h2>Responsive Website Design</h2>
            <p>
              Having a responsive layout means that your website fluidly resizes
              for optimal viewing regardless of screen size or device.
            </p>
          </div>
          <div className="services-row-2">
            <div className="services-each">
              <img className="img-center" src={seo} alt="seo" />
            </div>
            <h2>Search Engine Optimisation</h2>
            <p>
              SEO is the practice of improving and promoting a website in order
              to increase number of visitors it receives.
            </p>
          </div>
          <div className="services-row-2">
            <div className="services-each">
              <img className="img-center" src={ecommerce} alt="ecommerce" />
            </div>
            <h2>ECommerce Solution</h2>
            <p>
              An eCommerce solution is a feature-filled, customisable online
              storefront and shopping cart that be directly integrated inyo your
              website.
            </p>
          </div>
        </div>
      </div>
      <GetIntouch />
      <Footer />
    </div>
  );
}

export default Services;
