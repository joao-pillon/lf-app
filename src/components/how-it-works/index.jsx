import "./index.css";

import luis from "../../assets/luis-feliz.jpeg";

const HowItWorks = () => {
  return (
    <section id="how-it-works">
      <h2>Como funcionam as aulas</h2>
      <div className="how-it-works-container">
        <div className="obj">
        <div>
          <p>
            Metolodogia... foco de aprendizado... etc Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Quo illum laborum suscipit totam
            sed ab veritatis obcaecati necessitatibus eum quis repellat,
            adipisci labore nisi culpa. Nisi quod incidunt consequuntur nostrum.
          </p>
          <p><br></br>
            Metolodogia... foco de aprendizado... etc Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Quo illum laborum suscipit totam
            sed ab veritatis obcaecati necessitatibus eum quis repellat,
            adipisci labore nisi culpa. Nisi quod incidunt consequuntur nostrum.
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
