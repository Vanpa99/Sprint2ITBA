import { useState, useEffect, useRef } from "react";
import Boton from "./Reutilizables/Boton";
import InputField from "./Reutilizables/InputField";
import Selector from "./Reutilizables/Selector"; // Importamos el Selector reutilizable
import styles from "../modules/Moneda.module.css";

function Moneda() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("ARS");
  const [toCurrency, setToCurrency] = useState("USD");
  const [result, setResult] = useState(null);
  const apiKey = "d73d8e24e51e8ce6bfd33d19"; // Clave de API
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;
  const formRef = useRef(null);

  useEffect(() => {
    //Exchangerate
    if (amount > 0) {
      // Fetch exchange rate
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const rate = data.conversion_rates[toCurrency];
          const conversionResult = amount * rate;
          setResult(`${conversionResult.toFixed(2)} ${toCurrency}`);
        });
    }
  }, [amount, fromCurrency, toCurrency, url]);
  // CREAR COMPONENTE DE API PARA LLAMARLA EN CUALQUIER LADO

  // Opciones de monedas
  const currencyOptions = [
    { value: "ARS", label: "ARS" },
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
    { value: "BRL", label: "BRL" },
    { value: "CLP", label: "CLP" },
  ]; // MANDAR A "SELECTOR" (y hacer que funcione)

  return (
    <section className={styles.inicioContenido}>
      <section>
        <h3 className={styles.sectionTitle}>Convertidor de Monedas</h3>
        <p className={styles.infoForm}>
          A continuacion le ofrecemos nuestro servicio de convertidor de
          monedas:
        </p>
        <br />
      </section>

      <form className={styles.formContainer}>
        <Selector
          label="Monto a convertir:"
          name="fromCurrency"
          options={currencyOptions}
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        />
        <InputField
          type="number"
          id="monto"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Ingrese monto"
        />
        <div className={styles.btnContainer}>
          <Boton type="button" text="Convertir" /> {/* DARLE FUNCIONALIDAD*/}
          <Boton type="button" text="Limpiar" action="clear" />
        </div>
        <Selector
          label="Monto convertido:"
          name="toCurrency"
          options={currencyOptions}
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        />
        <InputField
          for="result"
          type="text"
          id="result"
          value={result || ""}
          placeholder="Monto convertido"
          disabled
        />
      </form>
    </section>
  );
}

export default Moneda;
