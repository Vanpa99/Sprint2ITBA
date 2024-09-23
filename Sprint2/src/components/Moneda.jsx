import { useState, useEffect } from "react";
import Boton from "./Reutilizables/Boton";
import InputField from "./Reutilizables/InputField";
import Selector from "./Reutilizables/Selector"; // Importamos el Selector reutilizable
function Moneda() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("ARS");
  const [toCurrency, setToCurrency] = useState("USD");
  const [result, setResult] = useState(null);
  const apiKey = "d73d8e24e51e8ce6bfd33d19"; // Clave de API
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

  useEffect(() => {
    //Exchangerate
    if (amount > 0) {
      // Fetch exchange rate
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const rate = data.conversion_rates[toCurrency];
          const conversionResult = amount * rate;
          setResult(
            `${amount} ${fromCurrency} = ${conversionResult.toFixed(
              2
            )} ${toCurrency}`
          );
        })
        .catch((error) => {
          console.error("Error fetching the exchange rate:", error);
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
    <section>
      <section className="beneficios">
        <h3>Convertidor de Monedas</h3>
        <p>
          A continuacion le dejamos un convertidor de monedas, para convertir la
          moneda que usted desee:
        </p>
      </section>

      <form className="form-conv form-container">
        <InputField
          label="Monto a convertir:"
          type="number"
          id="monto"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Ingrese monto"
        />
        <Selector
          name="fromCurrency"
          label="De:"
          options={currencyOptions}
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        />
        <Selector
          name="toCurrency"
          label="A:"
          options={currencyOptions}
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        />
        <Boton type="button" text="Convertir" /> {/* DARLE FUNCIONALIDAD*/}
        <InputField
          label="Monto convertido:"
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
