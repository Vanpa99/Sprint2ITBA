import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import { Selector } from "./Selector";
import Boton from "./Boton";
import {opcionesMoneda} from "./Selector.jsx";

function Saldo({ saldo, fromCurrency, toCurrency }) {
  const [saldoConvertido, setSaldoConvertido] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const apiKey = "d73d8e24e51e8ce6bfd33d19";  // Aquí va tu API key

  // URL para obtener las tasas de cambio
  const convertUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

  // Efecto para la conversión del saldo
  useEffect(() => {
    if (saldo > 0) {
      setIsLoading(true);
      fetch(convertUrl)
        .then((response) => response.json())
        .then((data) => {
          const rate = data.conversion_rates[toCurrency];
          const saldoEnOtraMoneda = saldo * rate;
          setSaldoConvertido(saldoEnOtraMoneda.toFixed(2));
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching the exchange rate:", error);
          setIsLoading(false);
        });
    }
  }, [saldo, fromCurrency, toCurrency, convertUrl]);

  return (
    <div>
      {isLoading ? "Cargando..." : `${saldoConvertido} ${toCurrency}`}
    </div>
  );
}

// Componente Moneda para el convertidor de monto
function Moneda() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("ARS");
  const [toCurrency, setToCurrency] = useState("USD");
  const [result, setResult] = useState(null);
  const apiKey = "d73d8e24e51e8ce6bfd33d19"; // Clave de API
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

  useEffect(() => {
    if (amount > 0) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const rate = data.conversion_rates[toCurrency];
          const conversionResult = amount * rate;
          setResult(`${amount} ${fromCurrency} = ${conversionResult.toFixed(2)} ${toCurrency}`);
        })
        .catch((error) => {
          console.error("Error fetching the exchange rate:", error);
        });
    }
  }, [amount, fromCurrency, toCurrency, url]);

  // Opciones de monedas
  /*const currencyOptions = [
    { value: "ARS", label: "ARS" },
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
    { value: "BRL", label: "BRL" },
    { value: "CLP", label: "CLP" },
  ];*/

  return (
    <section>
      <section className="beneficios">
        <h3>Convertidor de Monedas</h3>
        <p>A continuación le dejamos un convertidor de monedas, para convertir la moneda que usted desee:</p>
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
          options={opcionesMoneda}
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        />
        <Selector
          name="toCurrency"
          label="A:"
          options={opcionesMoneda}
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        />
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

export {Saldo, Moneda };