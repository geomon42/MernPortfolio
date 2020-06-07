import React from "react";
import "./Counter.css";
import counterimg from "../image/counterimg.png";
import CountUp from "react-countup";

function Counter() {
  return (
    <div className="counter-main">
      <div className="qoute">
        <img className="counter-img" src={counterimg} alt="logo" />
        <h2>
          "Surround yourself with people who challenge you, teach you, and push
          you to be your best self." <br></br>
          <br />
          <small>- Bill Gates</small>
        </h2>
      </div>
      <section className="counters">
        <div className="counter-container">
          <div>
            <i className="fa fa-youtube fa-4x"></i>
            <div className="counter" data-target="363">
              <CountUp className="counter" duration={8} start={0} end={1023}>
                0
              </CountUp>
            </div>
            <h3>Subscribers</h3>
          </div>
          <div>
            <i className="fa fa-linkedin fa-4x"></i>
            <div className="counter" data-target="363">
              <CountUp className="counter" duration={8} start={0} end={363}>
                0
              </CountUp>
            </div>
            <h3>Connections</h3>
          </div>
          <div>
            <i className="fa fa-facebook fa-4x"></i>
            <div className="counter" data-target="925">
              <CountUp className="counter" duration={8} start={0} end={925}>
                0
              </CountUp>
            </div>
            <h3>Friends</h3>
          </div>
          <div>
            <i className="fa fa-twitter fa-4x"></i>
            <div className="counter">
              <CountUp className="counter" duration={8} start={0} end={658}>
                0
              </CountUp>
            </div>
            <h3>Followers</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Counter;
