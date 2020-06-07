import React from "react";
import { Link } from "react-router-dom";
import "./subabout.css";
import aboutpic1 from "../image/aboutpic1.jpg";
import family from "../image/family.jpg";
import rr from "../image/rr.jpg";

function Subabout() {
  return (
    <div className="aboutme">
      <div className="about-first">
        <picture>
          <img src={aboutpic1} alt="aboutpic" />
        </picture>
        <div>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/Jericfelicilda"
                target="_blank"
                rel="noopener noreferrer"
                className="fa fa-facebook"
              >
                .
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/home"
                className="fa fa-twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                .
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jeric-dela-cruz-597420166/"
                className="fa fa-linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                .
              </a>
            </li>
          </ul>
        </div>
        <div className="rating-list">
          <div>
            <h2>Front-End</h2>
          </div>
          <div className="rating-2">
            <h3>ReactJS</h3>
            <div className="stars">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
            </div>
          </div>
          <div className="rating-2">
            <h3>Angular</h3>
            <div className="stars">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
            </div>
          </div>
          <div className="rating-2">
            <h3>VueJS</h3>
            <div className="stars">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
            </div>
          </div>
          <div className="rating-2">
            <h3>JavaScript</h3>
            <div className="stars">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
            </div>
          </div>
          <div className="rating-2">
            <h3>Redux</h3>
            <div className="stars">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
            </div>
          </div>
          <div className="rating-2">
            <h3>HTML5</h3>
            <div className="stars">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
            </div>
          </div>
          <div className="rating-2">
            <h3>CSS3</h3>
            <div className="stars">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
            </div>
          </div>
          <div>
            <h2>Back-End</h2>
          </div>
          <div className="rating-2">
            <h3>NodeJS</h3>
            <div className="stars">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
            </div>
          </div>
          <div className="rating-2">
            <h3>Python</h3>
            <div className="stars">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
            </div>
          </div>
          <div className="rating-2">
            <h3>Golang</h3>
            <div className="stars">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </div>
          </div>
          <div>
            <h2>Database</h2>
          </div>
          <div className="rating-2">
            <h3>MySQL</h3>
            <div className="stars">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
            </div>
          </div>
          <div className="rating-2">
            <h3>MongoDB</h3>
            <div className="stars">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
            </div>
          </div>
          <div className="rating-2">
            <h3>PostgreSQL</h3>
            <div className="stars">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
            </div>
          </div>
          <div className="rating-2">
            <h3>MSQL</h3>
            <div className="stars">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="about-right">
        <div className="about-third">
          <div>
            <h1>Who I Am</h1>
            <p>
              After graduating in 2013 with a Bachelor`s Degree in Information
              Technology, I spent the last nine years working both as a
              freelance web developer and designer and as part of a team in
              various companies across the Philippines. I acquired project and
              time management skills, as well as the ability to communicate with
              team members and clients while effectively meeting milestones and
              deadlines As a freelance web developer and designer I collaborated
              with several web developers in the Philippines. I like to get to
              know my clients and work closely with them so that we can build
              together a long business relationship based on trust and respect.
              During the day I`m a developer at a local agency. During the
              evenings I spend my time working on freelance projects and
              building my own products.
            </p>
            <picture>
              <img src={family} alt="family" />
              <img src={rr} alt="babyrr" />
            </picture>
          </div>
          <div>
            <h1>Why You Should Choose Me?</h1>
            <p>
              There`s nothing I enjoy more than solving business problems by
              developing and designing websites for nice clients and Automating
              repetitive, redious tasks so clients and thier employees can
              devote their time and energy to more impactful, valuable and
              meaningful work.
            </p>
            <p>
              if you`ve got a project youd like to work on with me just get in
              touch and we can get to work!
            </p>
            <div>
              <Link to="/contact">
                <h3 className="email-me">Email Me</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subabout;
