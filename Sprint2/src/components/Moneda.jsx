import { useState, useEffect } from "react";
import Boton from "./Reutilizables/Boton";
import InputField from "./Reutilizables/InputField";
function Moneda() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("ARS");
  const [toCurrency, setToCurrency] = useState("USD");
  const [result, setResult] = useState(null);
  const apiKey = "bd185bc85411a96d84116f03"; /* clave de api */ /* y url */
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

  return (
    <section>
      <section className="beneficios">
        <h3>Convertidor de Monedas</h3>
        <p>
          A continuacion le dejamos un convertidor de monedas, para convertir la
          moneda que usted desee:
        </p>
      </section>

      <div className="form-container">
        <InputField
          label="Monto a convertir:"
          for="monto"
          type="number"
          id="monto"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder={"Ingrese monto"}
        />
        <label> De:</label>
        <select
          className="deMoneda"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option value="ARS">ARS</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="BRL">BRL</option>
          <option value="CLP">CLP</option>
        </select>
        <label> A: </label>
        <select
          className="aMoneda"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="ARS">ARS</option>
          <option value="BRL">BRL</option>
          <option value="CLP">CLP</option>
        </select>

        <Boton type="button" text="Convertir" />

        <InputField
          label="Monto convertido:"
          for="result"
          type="text"
          id="result"
          value={result || ""}
          placeholder="Monto convertido"
          disabled
        />
      </div>
    </section>
  );
}

export default Moneda;
