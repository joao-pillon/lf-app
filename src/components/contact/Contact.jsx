import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineCalendar, AiOutlineWhatsApp } from "react-icons/ai";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Agende sua aula</h5>
      <h2>Contato</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <a href="https://whatsa.me/5511982975644/?t=Ol%C3%A1,%20tudo%20bem%20Luis?%20Quero%20marcar%20uma%20aula%20com%20voc%C3%AA.">
            <article className="contact__option">
              <AiOutlineWhatsApp className="contact__option-icon" />{" "}
              <h4>Whats</h4> <h5>(+11)982975644</h5> <span>Envie um whats</span>
            </article>{" "}
          </a>
          <a href="https://www.calendly.com/luisfelipeoclemente/45min">
            <article className="contact__option">
              <AiOutlineCalendar className="contact__option-icon" />
              <h4>Calendly</h4>
              <h5>/luisfelipeoclemente</h5>

              <span>Agende uma aula</span>
            </article>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
