import React, { Component } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false
    };
  }
  toggleNav() {
    this.setState(prevState => ({
      navOpen: !prevState.navOpen
    }));
  }
  render() {
    const { navOpen } = this.state;
    const { pathname } = this.props.location;
    return (
      <nav className={navOpen ? "open" : ""}>
        <FaBars className="nav-toggle" onClick={() => this.toggleNav()} />
        <div className="nav-items">
          <Link to={"/"} className={`btn ${pathname === "/" ? "active" : ""}`}>
            Projects
          </Link>
          <Link
            to={"contact"}
            className={`btn ${pathname === "/contact" ? "active" : ""}`}
          >
            Contact
          </Link>
          <Link
            to={"resume"}
            className={`btn ${pathname === "/resume" ? "active" : ""}`}
          >
            Resume
          </Link>{" "}
        </div>
      </nav>
    );
  }
}

export default withRouter(Nav);
