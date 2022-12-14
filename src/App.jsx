import React from "react";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Topbar from "./components/topbar/Topbar";
import HowItWorks from "./components/how-it-works";
import WhyMe from "./components/why-me";
import Prices from "./components/prices"

function App() {
  return (
    <>
      <Header />
      <Topbar />
      <WhyMe />
      <Intro />
      <HowItWorks /> 
      <Prices />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
