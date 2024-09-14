import { useEffect, useState } from "react";

function Card({ pesos }) {
  const [dolarValue, setDolarValue] = useState(null);

  const apiKey = "1576dd9857d0635c1b77f50e";
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/ARS`;

  useEffect(() => {
    if (pesos && parseFloat(pesos.replace(/\D/g, "")) > 0) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const rate = data.conversion_rates["USD"];
          const pesosValue = parseFloat(pesos.replace(/\D/g, ""));
          const conversionResult = pesosValue * rate;
          setDolarValue(conversionResult.toFixed(2));
        });
    }
  }, [pesos, url]);

  return (
    <div className="card">
      <h2 className="card-title">Resumen de cuenta</h2>
      {/* Mostramos el valor que viene de props */}
      <p className="pesos">Pesos ${pesos}</p>
      <p className="dolar">
        Dólar {dolarValue ? `$${dolarValue}` : "Cargando..."}
      </p>
    </div>
  );
}

export default Card;