import React, {Component} from "react";
import Intro from "../components/Intro";
import Tags from "../components/Tags";
import ProjectList from "../components/ProjectList.js";
class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      activeFilters: []
    };
    this.toggleFilters = this.toggleFilters.bind(this);
  }

  toggleFilters(tag) {
    if (this.state.activeFilters.includes(tag))
      this.setState({
        activeFilters: this.state.activeFilters.filter(function(activeTag) {
          return activeTag !== tag;
        })
      });
    else this.setState({ activeFilters: [...this.state.activeFilters, tag] });
  }
  render() {
    const { activeFilters, navOpen } = this.state;

    return (
      <div className="container">
        <Intro />
        <Tags
          toggleFilters={this.toggleFilters}
          activeFilters={activeFilters}
        />
        <ProjectList activeFilters={activeFilters} />
      </div>
    );
  }
  
}

export default Home;
