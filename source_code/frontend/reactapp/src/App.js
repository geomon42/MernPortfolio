import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./main_template/NavBar";
import MainContent from "./main_template/MainContent";
import Footer from "./main_template/Footer";
import About from "./subtemplates/About";
import Blog from "./subtemplates/Blog";
import Projects from "./subtemplates/Projects";
import Services from "./subtemplates/Services";
import Contact from "./subtemplates/Contact";
import ServicesForm from "./subtemplates/ServicesForm";
import "./App.css";
import GetIntouch from "./main_template/GetIntouch";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <NavBar />
    <MainContent />
    <ServicesForm />
    <GetIntouch />
    <Footer />
  </div>
);

export default App;
