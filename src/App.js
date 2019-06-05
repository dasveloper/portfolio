import React, { Suspense, lazy } from "react";
import "./assets/scss/App.scss";
import Nav from "./components/Nav";
import Home from "./pages/Home";

import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const Contact = lazy(() => import("./pages/Contact"));
const Resume = lazy(() => import("./pages/Resume"));

const App = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="loader-wrapper">
            <ClipLoader
              className="foo"
              sizeUnit={"px"}
              size={80}
              color={"#2f343b"}
            />
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

export default App;
