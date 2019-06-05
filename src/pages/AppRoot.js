import React, { Suspense, lazy } from "react";
import "../assets/scss/App.scss";
import Nav from "../components/Nav";
import Home from "./Home";

import Footer from "../components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Contact = lazy(() => import("./Contact"));
const Resume = lazy(() => import("./Resume"));

const AppRoot = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="loader-wrapper">
            <div class="loader" />
          </div>
        }
      >
        <div>
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
          <Footer />
        </div>
      </Suspense>
    </Router>
  );
};

export default AppRoot;
