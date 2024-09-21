import { useState, useEffect } from "react";
import Moneda from "./Moneda";

function Inicio() {
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
            <br />
          </section>

          <section class="beneficios">
            <h3>Beneficios de ser Cliente</h3>
            <p>
              Al ser parte de ITPowerBank, accederá a tasas competitivas, una
              amplia red de cajeros automáticos y atención personalizada.
            </p>
            <br />
          </section>
        </div>

        <Moneda />
      </section>
    </>
  );
}

export default Inicio;
