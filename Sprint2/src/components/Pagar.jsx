import { useState } from "react";
import Boton from "./Reutilizables/Boton";
import InputField from "./Reutilizables/InputField";
import Selector from "./Reutilizables/Selector";

function Pagar() {
  const [accion, setAccion] = useState("transferencia");
  const [mensaje, setMensaje] = useState("");

  // Opciones para el selector de acciones
  const opcionesAccion = [
    { value: "transferencia", label: "Transferencia" },
    { value: "pago", label: "Pago" },
  ]; // MANDAR A "SELECTOR" (y hacer que funcione)

  // Handler para el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    let mensajeAlerta = "";

    if (accion === "transferencia") {
      mensajeAlerta =
        "Transferencia realizada. Le enviaremos por correo el comprobante";
    } else if (accion === "pago") {
      mensajeAlerta = "Pago de servicio realizado. ¡Gracias por elegirnos!";
    }

    setMensaje(mensajeAlerta);
    clearInputs();
    window.alert(mensajeAlerta);
  };

  // Handler para limpiar los inputs
  const clearInputs = () => {
    document.getElementById("cbu").value = "";
    document.getElementById("monto-transferencia").value = "";
    document.getElementById("codigo-pago").value = "";
  };

  return (
    <>
      <h2 className="section-title">Métodos de Pago</h2>
      <p class="info-form">
        Para realizar una transferencia o pagar con codigo, complete los
        siguientes datos:
      </p>
      <form onSubmit={handleSubmit} className="form-container">
        <Selector
          name="accion"
          label="Seleccione el tipo de operación:"
          options={opcionesAccion}
          onChange={(e) => setAccion(e.target.value)}
        />

        {/* <form onSubmit={handleSubmit}> */}
        {accion === "transferencia" && (
          <article>
            <InputField
              label="Ingrese CBU:"
              type="number"
              name="cbu"
              id="cbu"
              placeholder="Ingrese CBU del destinatario"
              required
            />
            <InputField
              label="Ingrese el monto:"
              type="number"
              name="monto-transferencia"
              id="monto-transferencia"
              placeholder="Ingresa el monto a pagar"
              required
            />
          </article>
        )}

        {accion === "pago" && (
          <article>
            <InputField
              label="Ingrese el código de pago:"
              type="number"
              name="codigo-pago"
              id="codigo-pago"
              placeholder="Ingresa el código de pago"
              required
            />
            {/* CORREGIR BOTON ENVIAR EN PAGO */}
          </article>
        )}
        <div className="btn-container">
          <Boton type="submit" text="Enviar" id="enviarFormu" />
          <Boton type="reset" text="Limpiar" onClick={clearInputs} onClear={() => {}}/>
        </div>
      </form>

      <section>
        <p id="mensaje">{mensaje}</p>
      </section>
    </>
  );
}

export default Pagar;
