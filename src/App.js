import React, { Component } from "react";
import logo from "./logo.svg";
import "./assets/scss/App.scss";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      navOpen: false
    };
  }

  render() {
    const { navOpen } = this.state;
    return (
      <Router>
        <div>
          <Nav />

          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
