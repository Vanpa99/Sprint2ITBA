import React, { useEffect, useRef } from "react";
import Boton from "./Reutilizables/Boton";
import InputField from "./Reutilizables/InputField";

function Prestamos() {
  useEffect(() => {
    const form = document.getElementById("form_prest");
    const resultado_form = document.getElementById("resultado");
    const acumulado_form = document.getElementById("acumulado");

    const handleFormSubmit = (e) => {
      e.preventDefault();

      const monto = document.getElementById("monto").value;
      const periodo = document.getElementById("periodo").value;
      const tasa = 0.02;

      const numerador = tasa * monto;
      const denominador = 1 - (1 + tasa) ** -periodo;

      const resul = numerador / denominador;
      const resultado = resul.toFixed(2);

      const acum = resultado * periodo;
      const acumulado = acum.toFixed(2);

      resultado_form.value = resultado;
      acumulado_form.value = acumulado;
    };

    form.addEventListener("submit", handleFormSubmit);

    // Cleanup: Remover el event listener cuando el componente se desmonte
    return () => {
      form.removeEventListener("submit", handleFormSubmit);
    };
  }, []); // El array vacío asegura que useEffect se ejecute solo una vez, después de que el componente se monte

  return (
    <div>
      <h2 className="section-title">Calculadora De Préstamos</h2>
      <h3>
        Para conocer el valor de los pagos mensuales que debe realizar, ingrese
        los siguientes datos:
      </h3>

      <p className="info-form">Se considerará una tasa mensual del 2%.</p>

      <form id="form_prest" className="form-container">
        <InputField
          label="Ingrese el monto en pesos del préstamo que desea realizar:"
          htmlFor="monto"
          type="number"
          id="monto"
          name="monto"
          placeholder="Monto del préstamo"
          required
        />
        <InputField
          htmlFor="periodo"
          label="Ingrese el periodo de tiempo en meses en el cual abonará el
            préstamo:"
          type="number"
          id="periodo"
          name="periodo"
          placeholder="Periodo"
          required
        />
        <div className="btn-container">
          <Boton type="submit" text="Calcular" />
          <Boton type="button" text="Limpiar" action="clear" />
        </div>
        <InputField
          htmlFor="resultado"
          label="Valor calculado de los pagos mensuales a realizar:"
          type="number"
          id="resultado"
          name="resultado"
          disabled
        />
        <InputField
          htmlFor="acumulado"
          label="Valor total acumulado en el periodo indicado:"
          type="number"
          id="acumulado"
          name="acumulado"
          disabled
        />
      </form>
    </div>
  );
}

export default Prestamos;
