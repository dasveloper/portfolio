import React from "react";
import "./assets/scss/App.scss";
import Nav from "./components/Nav";
import Home from "./pages/Home";

import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Contact from "./pages/Contact";
import  Resume  from "./pages/Resume";

const App = () => {
  return (
    <Router>

        <div>
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
          <Footer />
        </div>
    </Router>
  );
};

export default App;
