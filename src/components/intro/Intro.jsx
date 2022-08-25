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
              <h5>Tech Recruiter</h5>
              <small>5 anos</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Professor de Inglês</h5>
              <small>4 anos</small>
            </article>
          </div>
          <p>Nascido no interior de São Paulo, pai de gata e com uma paixão por videogames e livros, tive oportunidade de atuar em diferentes áreas (Farmácia, Recepção e Recrutamento em TI). 
          <br></br><br></br>Formado em tradução e interpretação, dediquei os últimos 5 anos à posição de Tech Recruiter, contratando profissionais dentro e fora do Brasil. 
Com atuação em empresas startups, consultorias e multinacionais, já estive a cargo de posições para Europa, Estados Unidos e América Latina. Além disso, tenho experiência como voluntário, onde ensinei inglês e português na Colômbia entre 2019 e 2020. <br></br><br></br>Há quase 4 anos tenho trabalhado paralelamente como professor de inglês focado em profissionais de TI, com o intuito de ajudar pessoas a ingressarem no mercado internacional e mudar o cenário brasileiro em relação à fluência em outras línguas.

            </p>
          <a href="#contact" className="btn btn-primary">Entre em contato</a>
        </div>
      </div>
    </section>
  )
}

export default Intro