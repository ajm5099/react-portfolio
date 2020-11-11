import './App.css';
import React, { Component } from "react";
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "./components/contact/Contact"
import Homepage from "./components/homepage/Homepage"
import Portfolio from "./components/portfolio/Portfolio"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      showHideHomepage: false,
      showHidePortfolio: false,
      showHideContact: false
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHideHomepage":
        this.setState({ showHideHomepage: !this.state.showHideHomepage });
        break;
      case "showHidePortfolio":
        this.setState({ showHidePortfolio: !this.state.showHidePortfolio })
        break;
      case "showHideContact":
        this.setState({ showHideContact: !this.state.showHideContact })
        break;
        default:
    }
  }

  render() {
    const { showHideHomepage, showHidePortfolio, showHideContact } = this.state;
    return (
      <div>
      <Header />
      <div>
        <button onClick={() => this.hideComponent("showHideHomepage")}>Homepage</button>
        <button onClick={() => this.hideComponent("showHidePortfolio")}>Portfolio</button>
        <button onClick={() => this.hideComponent("showHideContact")}>Contact</button>
      </div>
      {showHideHomepage && <Homepage />}
      {showHidePortfolio && <Portfolio />}
      {showHideContact && <Contact />}
      <Footer />
    </div>
    )
  }
    
}

export default App;
