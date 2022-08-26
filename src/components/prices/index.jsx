import "./index.css";
import luispoke from "../../assets/luisao.jpeg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const Prices = () => {
  return (
    <section id="prices">
      <h2>E sobre formas de pagamento e valores?</h2>
      <div>
        <br></br>
        <div className="price__cards">
          <article className="price__card">
            <h5>Aula individual</h5>
            <small> R$ 70,00.</small>
            <p>
              Uma boa pedida para quem tem alguma necessidade nos
              próximos dias (entrevista, apresentação, etc.).
            </p>
          </article>
          <article className="price__card">
            <h5>Pacote de 5 aulas</h5>
            <small>R$ 300,00.</small>
            <p>
              Melhor custo e benefício, onde as aulas ficam como créditos e
              podem ser usadas por um período de até 3 meses após pagamento
              efetuado.
            </p>
          </article>
        </div>
      </div>

      <div className="container-price">
        {" "}
              <div className="container-pic"><img src={luispoke} alt="" /></div> 

        <div className="container-text">
        <p>
          Os pagamentos sempre se dão por transferência bancária ou via PIX. Um
          dos diferenciais é que não trabalho com contrato ou programas de
          fidelidade. Assim, você tem total liberdade para encerrar ou retomar
          as nossas classes quando achar melhor. O valor deverá ser enviado
          previamente e tem duas opções: Aula individual & Pacote de Aulas (5
          Classes inclusas).
        </p></div>
      </div>
    </section>
  );
};

export default Prices;
