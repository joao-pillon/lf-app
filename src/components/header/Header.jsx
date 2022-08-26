import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./header.css";
import luisfeliz from "../../assets/luis-feliz.jpeg";
const Header = () => {
  return (
    <header id="home">

      <div className="container header__container">
        <h5>Hey, eu sou o</h5>
        <h1>Luis Felipe</h1>
        <h2 className="text-light">
        Que tal melhorar o seu inglês com alguém que entende o seu desafio?
        </h2>

        <CTA />
        <a href="#contact" className="scroll__down">
          {" "}
          @lfelipeclemente/{" "}
        </a>
        <HeaderSocials />
                <div className="image-container">
                  <p></p>
          <img src={luisfeliz}  alt="" />
          <p></p>
        </div>
      </div>
    </header>
  );
};

export default Header;
