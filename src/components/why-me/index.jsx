import "./why-me.css";
import luisfeliz from "../../assets/luis-feliz.jpeg";
import seta from "../../assets/seta.png"

const WhyMe = () => {
  return (
    <section id="why-me">
      <div className="container">
        <div className="header">
          <h3>
            Você é profissional de TI e tá precisando de um empurrãozinho
            para conseguir aquele cargo internacional?<br></br>
            <br></br>
          </h3>
          <h4>
            Vem comigo que você encontrou o professor certo para você! 💪{" "}
          </h4>
          <div className="container-text">
            <p>
              Conduzo processos seletivos internacionais há muitos anos e
              entendo os anseios e as necessidades do mercado atual em relação a
              hard e soft skills. <br></br>
              <br></br>
              Entrevistar tem sido o meu dia a dia e acredito que possuo o
              conhecimento e a experiência que vão te ajudar a{" "}
              <span>alcançar seus objetivos</span> pessoais e profissionais
              ligados ao inglês. <br></br>
              <br></br>
              <a href="#about"><span>Bora lá?</span></a>
            </p>
          </div>
        </div>
        <div className="img">
          <img src={luisfeliz}  alt="" />
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default WhyMe;
