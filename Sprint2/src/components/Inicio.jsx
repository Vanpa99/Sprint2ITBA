import { useState, useEffect } from "react";
import Moneda from "./Moneda";
// import Card from "./Card";

function Inicio() {
  //CONVERSOR DE MONEDA

  // Genera un número de 6 cifras aleatorio
  const generateRandomPesos = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  // Establece el número aleatorio como valor inicial
  const [pesos1, setPesos] = useState(generateRandomPesos());
  const [pesos2, setPesos2] = useState(generateRandomPesos());
  const [pesos3, setPesos3] = useState(generateRandomPesos());

  while (pesos2 === pesos1) {
    setPesos2(generateRandomPesos());
  }
  while (pesos3 === pesos1 || pesos3 === pesos2) {
    setPesos3(generateRandomPesos());
  }

  return (
    <>
      <section>
        <div class="inicio-contenido">
          <section class="inicio-descripcion">
            <h2 className="section-title">Bienvenido a ITPowerBank</h2>
            <p className="p-cuentas">
              ITPowerBank es su aliado financiero de confianza. Ofrecemos
              soluciones bancarias modernas, seguras y eficientes para todas sus
              necesidades. Nuestro compromiso es brindar un servicio de
              excelencia y productos financieros adaptados a cada etapa de su
              vida.
            </p>
          </section>

          <section class="beneficios">
            <h3>Beneficios de ser Cliente</h3>
            <p>
              Al ser parte de ITPowerBank, accederá a tasas competitivas, una
              amplia red de cajeros automáticos y atención personalizada.
            </p>
          </section>
        </div>

        {/* CONVERSOR DE MONEDA */}
        <Moneda />
        {/* <Card pesos={pesos1} />
        <Card pesos={pesos2} />
        <Card pesos={pesos3} /> */}
      </section>
    </>
  );
}

export default Inicio;
