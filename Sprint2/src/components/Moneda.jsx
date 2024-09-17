import { useState, useEffect } from "react";
import Boton from "./Reutilizables/Boton";
import InputField from "./Reutilizables/InputField";
import Selector from "./Reutilizables/Selector"; // Importamos el Selector reutilizable

function Moneda() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("ARS");
  const [toCurrency, setToCurrency] = useState("USD");
  const [result, setResult] = useState(null);
  const apiKey = "1576dd9857d0635c1b77f50e"; // Clave de API
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

  // Opciones de monedas
  const currencyOptions = [
    { value: "ARS", label: "ARS" },
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
    { value: "BRL", label: "BRL" },
    { value: "CLP", label: "CLP" }
  ];

  return (
    <section className="contenedor">
      <div className="formcontainer area-principal">
        <h1 className="h1contain">Conversor de moneda</h1>
        <form className="form-conv">
          <InputField
            type="number"
            id="monto"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Cantidad"
          />
          
          {/* Reemplazamos el primer select con el componente Selector */}
          <Selector
            name="fromCurrency"
            label="De:"
            options={currencyOptions}
            onChange={(e) => setFromCurrency(e.target.value)}
          />
          
         

          {/* Reemplazamos el segundo select con el componente Selector */}
          <Selector
            name="toCurrency"
            label="A:"
            options={currencyOptions}
            onChange={(e) => setToCurrency(e.target.value)}
          />

          <Boton type="button" text="Convertir" />
        </form>
        <h3 id="resultado">{result}</h3>
      </div>
    </section>
  );
}

export default Moneda;
