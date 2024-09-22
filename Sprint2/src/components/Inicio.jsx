import Moneda from "./Moneda";
import styles from "../modules/Inicio.module.css";

function Inicio() {
  return (
    <section>
      <div className={styles.inicioContenido}>
        <section className={styles.inicioDescripcion}>
          <h2 className={styles.sectionTitle}>Bienvenido a ITPowerBank</h2>
          <p className={styles.pCuentas}>
            ITPowerBank es su aliado financiero de confianza. Ofrecemos
            soluciones bancarias modernas, seguras y eficientes para todas sus
            necesidades. Nuestro compromiso es brindar un servicio de excelencia
            y productos financieros adaptados a cada etapa de su vida.
          </p>
        </section>

        <section className={styles.beneficios}>
          <h3>Beneficios de ser Cliente</h3>
          <p>
            Al ser parte de ITPowerBank, accederá a tasas competitivas, una
            amplia red de cajeros automáticos y atención personalizada.
          </p>
        </section>
      </div>

      <Moneda />
    </section>
  );
}

export default Inicio;
