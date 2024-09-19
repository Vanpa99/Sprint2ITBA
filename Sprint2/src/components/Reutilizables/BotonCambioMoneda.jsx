import React, { useState, useEffect } from "react";

function BotonCambioMoneda({ saldo, fromCurrency }) {
  const [moneda, setMoneda] = useState("USD");
  const [saldoConvertido, setSaldoConvertido] = useState(saldo);
  const [isLoading, setIsLoading] = useState(false);
  const apiKey = "bd185bc85411a96d84116f03";

  useEffect(() => {
    if (moneda !== fromCurrency) {
      setIsLoading(true);
      const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const tasaCambio = data.conversion_rates[moneda];
          const saldoEnOtraMoneda = saldo * tasaCambio;
          setSaldoConvertido(saldoEnOtraMoneda.toFixed(2));
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching the exchange rate:", error);
          setIsLoading(false);
        });
    } else {
      setSaldoConvertido(saldo);
    }
  }, [moneda, saldo, fromCurrency, apiKey]);

  // Función para cambiar entre USD y EUR
  const cambiarMoneda = () => {
    if (moneda === "USD") {
      setMoneda("EUR");
    } else if (moneda === "EUR") {
      setMoneda("ARS");
    } else {
      setMoneda("USD");
    }
  };

  return (
    <div>
      <p>Saldo en {moneda}: {isLoading ? "Cargando..." : saldoConvertido}</p>
      <button onClick={cambiarMoneda}>Cambiar a {moneda === "USD" ? "EUR" : moneda === "EUR" ? "Pesos" : "USD"}</button>
    </div>
  );
}

export default BotonCambioMoneda;