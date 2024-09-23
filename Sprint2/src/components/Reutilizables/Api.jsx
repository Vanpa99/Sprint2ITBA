/* import React, { useState, useEffect } from "react";
import Boton from "./Reutilizables/Boton";
import InputField from "./Reutilizables/InputField";
import Selector from "./Reutilizables/Selector";

function Api() {
  // Estados para el convertidor de moneda
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("ARS");
  const [toCurrency, setToCurrency] = useState("USD");
  const [result, setResult] = useState(null);

  // Estados para el saldo convertido
  const [monedaSaldo, setMonedaSaldo] = useState("USD");
  const [saldoConvertido, setSaldoConvertido] = useState(1000); // Ejemplo de saldo en ARS
  const [isLoading, setIsLoading] = useState(false);
  const apiKey = "bd185bc85411a96d84116f03";

  // URL común para ambas funcionalidades
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

  // Efecto para el convertidor de moneda
  useEffect(() => {
    if (amount > 0) {
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
  }, [amount, fromCurrency, toCurrency, url]); */

  // Efecto para la conversión del saldo
  /* useEffect(() => {
    if (monedaSaldo !== fromCurrency) {
      setIsLoading(true);
      fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`)
        .then((response) => response.json())
        .then((data) => {
          const tasaCambio = data.conversion_rates[monedaSaldo];
          const saldoEnOtraMoneda = saldoConvertido * tasaCambio;
          setSaldoConvertido(saldoEnOtraMoneda.toFixed(2));
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching the exchange rate:", error);
          setIsLoading(false);
        });
    }
  }, [monedaSaldo, saldoConvertido, fromCurrency, apiKey]);

  // Función para cambiar entre monedas en el saldo
  const cambiarMonedaSaldo = () => {
    if (monedaSaldo === "USD") {
      setMonedaSaldo("EUR");
    } else if (monedaSaldo === "EUR") {
      setMonedaSaldo("ARS");
    } else {
      setMonedaSaldo("USD");
    }
  };

  // Opciones de monedas
  const currencyOptions = [
    { value: "ARS", label: "ARS" },
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
    { value: "BRL", label: "BRL" },
    { value: "CLP", label: "CLP" },
  ];

  return (
    <section>
      <section className="beneficios">
        <h3>Convertidor de Monedas</h3>
        <p>
          A continuación le dejamos un convertidor de monedas, para convertir la
          moneda que usted desee:
        </p>
      </section>

      {/* Convertidor de Monedas */
      {/* <form className="form-conv form-container">
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
        /> */}
        {/* <Boton type="button" text="Convertir" />
        <InputField
          label="Monto convertido:"
          type="text"
          id="result"
          value={result || ""}
          placeholder="Monto convertido"
          disabled
        />
      </form> */}

      {/* Saldo en diferentes monedas */}
      {/* <div>
        <h3>Saldo en diferentes monedas</h3>
        <p>
          Saldo en {monedaSaldo}: {isLoading ? "Cargando..." : saldoConvertido}
        </p>
        <button onClick={cambiarMonedaSaldo}>
          Cambiar a {monedaSaldo === "USD" ? "EUR" : monedaSaldo === "EUR" ? "Pesos" : "USD"}
        </button>
      </div>
    </section>
  );
} */}


/* export default Api;  */

//P R U E B A  DE API

import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import Selector from "./Selector";
import Boton from "./Boton";

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
  const currencyOptions = [
    { value: "ARS", label: "ARS" },
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
    { value: "BRL", label: "BRL" },
    { value: "CLP", label: "CLP" },
  ];

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
      </form>
    </section>
  );
}

export {Saldo, Moneda };