import React, { Component } from "react";
import axios from "axios";
import "./contactForm.css";
import swal from "sweetalert";

export default class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    alert: "Message is Sent",
    sent: false,
  };

  //handle inputs
  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleMessage = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  //end of handle inputs

  formSubmit = (e) => {
    swal({
      title: "Email has been sent!",
      text: "I`ll get back within 1-2 days.",
      icon: "success",
    });
    e.preventDefault();

    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };

    axios
      .post("http://localhost:3000/email", data)
      .then((res) => {
        this.setState(
          {
            sent: true,
          },
          this.resetForm()
        );
      })
      .catch(() => {
        console.log("message not sent");
      });
  };
  //for reseting initial data
  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      this.setState({
        sent: false,
      });
    }, 30);
  };

  render() {
    return (
      <div>
        <div className="contactme">
          <h1>Contact Me</h1>
          <h3>
            If you`d like to chat about a project please fill in the form below
            and I`ll get back within 1-2 days.
          </h3>
        </div>
        <div className="status">
          <h3>Status</h3>
          <h2>AVAILABLE</h2>
          <p>
            I`m Currently Looking for new projects from <b>May 2020</b>
          </p>
        </div>
        <div className="mail-container">
          <form onSubmit={this.formSubmit}>
            <div className="singleform">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="name"
                placeholder="Your Name .."
                value={this.state.name}
                onChange={this.handleName}
              />
            </div>
            <div className="singleform">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                className="email"
                placeholder="Your Email .."
                value={this.state.email}
                onChange={this.handleEmail}
                required
              />
            </div>
            <div className="textArea">
              <label htmlFor="message" className="message-text">
                HOW CAN I HELP YOU?
              </label>
              <textarea
                name="message"
                id=""
                cols="50"
                rows="5"
                placeholder="Your Message.."
                value={this.state.message}
                onChange={this.handleMessage}
                required
              ></textarea>
            </div>
            <div className={this.state.sent ? "msg msgAppear" : "msg"}>
              Email has been sent !
            </div>
            <div className="btn">
              <button type="submit" className="button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
