import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.jpeg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">

      <h2>Sobre mim</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiência</h5>
              <small>X</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projetos</h5>
              <small>X</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore architecto optio, iusto delectus maiores vel provident, culpa veritatis fugit harum blanditiis rerum doloribus eligendi, amet deserunt cupiditate aut non? Placeat.
            </p>
          <a href="#contact" className="btn btn-primary">Entre em contato</a>
        </div>
      </div>
    </section>
  )
}

export default Intro