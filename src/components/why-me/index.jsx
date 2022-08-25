import "./index.css";
import luisfeliz from "../../assets/luis-feliz.jpeg"
const WhyMe = () => {
  return (
    <section id="why-me">
      <div className="container">
        <div className="header">
          <h3>
            Você é um profissional da TI e tá precisando de um empurrãozinho
            para conseguir aquele cargo internacional?<br></br>
            <br></br>
          </h3>
          <h4>Vem comigo que você encontrou o professor certo para você.</h4>
          <div className="container-text">
          <h5>
            Conduzo processos seletivos internacionais há muitos anos e entendo os anseios e as necessidades do mercado atual em relação a
            hard e soft skills. <br></br>
            <br></br>
            Entrevistar tem sido o meu dia a dia e acredito que possuo o
            conhecimento e a experiência que vão te ajudar a{" "}
            <spam>alcançar seus objetivos</spam> pessoais e profissionais
            ligados ao inglês. <br></br>
            <br></br>
            <spam>Bora lá?</spam>
          </h5>
        </div>
                  </div>
        <div className="img">
          <img src={luisfeliz} alt="" />
        </div>
      </div>
      <div>
       
      </div>
    </section>
  );
};

export default WhyMe;
