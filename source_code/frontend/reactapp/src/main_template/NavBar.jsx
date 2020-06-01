import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="all-header">
      <div id="branding">
        <Link to="/">
          <h1>JEK CRUZ</h1>
        </Link>
        <p className="subtitle">Full-Stack Developer / Web Design</p>
      </div>
      <header>
        <nav className="nav-container">
          <ul>
            <li>
              <Link className="cool-link" to="/project">
                <h2>Projects</h2>
              </Link>
            </li>
            <li>
              <Link className="cool-link" to="/about">
                <h2>About</h2>
              </Link>
            </li>
            <li>
              <Link className="cool-link" to="/services">
                <h2>Services</h2>
              </Link>
            </li>
            <li>
              <Link className="cool-link" to="/contact">
                <h2>Contact</h2>
              </Link>
            </li>
            <li>
              <Link className="cool-link" to="/blog">
                <h2>Blog</h2>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
