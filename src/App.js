import './App.css';
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "./components/contact/Contact"
import Homepage from "./components/homepage/Homepage"
import Portfolio from "./components/portfolio/Portfolio"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"

class App extends Component {


  render() {
    return (
      <div>
          <BrowserRouter>
          <Header />
          <Switch>
          <Route exact path="/">< Homepage /></Route>
          <Route exact path="/portfolio">< Portfolio /></Route>
          <Route exact path="/contact">< Contact /></Route>
          <Route path="*">404 Error: Page not found</Route>
          </Switch>
          <Footer />
          </BrowserRouter>

      
    </div>
    )
  }
    
}

export default App;
