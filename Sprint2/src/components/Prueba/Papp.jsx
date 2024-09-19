import { useState, useEffect } from "react";
import Boton from "./Reutilizables/Boton";
import InputField from "./Reutilizables/InputField";
function Moneda() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("ARS");
  const [toCurrency, setToCurrency] = useState("USD");
  const [result, setResult] = useState(null);
  const apiKey = "1576dd9857d0635c1b77f50e"; /* clave de api */ /* y url */
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
      <div className="formcontainer">
        <h1 className="h1contain">Conversor de moneda</h1>
        <form className="form-conv">
          <InputField
            type="number"
            id="monto"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Cantidad"
          />
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
          <span> a </span>
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
          {/* DARLE FUNCIONALIDAD */}
        </form>
        <h3 id="resultado">{result}</h3>
      </div>
    </section>
  );
}

export default Moneda;
// ORIGINAL

{
  /* <div className="formcontainer">
        <h1 className="h1contain">Conversor de moneda</h1>
        <form className="form-conv">
          <InputField
            type="number"
            id="monto"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Cantidad"
          />
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
          <span> a </span>
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
        </form>
        <h3 id="resultado">{result}</h3>
      </div> */
}
