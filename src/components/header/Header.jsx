import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

const Header = () => {
  return (
    <header id="home">

      <div className="container header__container">
        <h5>Oii, eu sou o 👋</h5>
        <h1>Luis Felipe</h1>
        <h2 className="text-light">
          Venha aprender inglês de uma maneira fácil e divertida!
        </h2>

        <CTA />
        <a href="#contact" className="scroll__down">
          {" "}
          @lfelipeclemente/{" "}
        </a>
        <HeaderSocials />
        
      </div>
    </header>
  );
};

export default Header;
