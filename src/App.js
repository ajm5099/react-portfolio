import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "./components/contact/Contact"
import Homepage from "./components/homepage/Homepage"
import Portfolio from "./components/portfolio/Portfolio"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <div>
      <Header />
      <Homepage />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
