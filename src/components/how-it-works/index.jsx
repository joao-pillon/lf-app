import "./index.css";

import luis from "../../assets/luis-workaholic.jpeg";

const HowItWorks = () => {
  return (
    <section id="how-it-works">
      <h2>Como serão nossas classes?</h2>
      <div className="how-it-works-container">
        <div className="obj">
        <div>
          <p>
          Assim como cada estudante tem suas próprias necessidades, nossas aulas serão adaptadas ao seu momento pessoal e profissional. Geralmente, duram entre 45 e 60 minutos, são individuais e com foco em conversação. Pense nas aulas como uma forma de treino, seja este para uma entrevista, viagem ou mesmo vocabulário do dia a dia.
          </p>
          <p><br></br>
          Os horários também são flexíveis. Ou seja, você terá acesso à minha agenda mensal online para escolher os dias e horários que melhor se encaixam na sua rotina. É muito fácil!
          </p>
        </div>
        <div>
          <img src={luis} alt="" />
        </div>
        </div>
      </div>{" "}
    </section>
  );
};

export default HowItWorks;
