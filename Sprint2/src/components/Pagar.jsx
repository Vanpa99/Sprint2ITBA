import { useState } from "react";
import Boton from "./Reutilizables/Boton";
import InputField from "./Reutilizables/InputField";

function Pagar() {
  const [accion, setAccion] = useState("transferencia");
  const [mensaje, setMensaje] = useState("");

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
      <h2 className="bienvenida">Métodos de Pago</h2>

      <section>
        <label htmlFor="accion">Seleccione el tipo de operación: </label>
        <select
          name="accion"
          id="accion"
          value={accion}
          onChange={(e) => setAccion(e.target.value)}
        >
          <option value="transferencia">Transferencia</option>
          <option value="pago">Pago</option>
        </select>
      </section>

      <form onSubmit={handleSubmit}>
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
              label="Ingrese el monto: $"
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
        <Boton type="submit" text="Enviar" id="enviarFormu" />
        <Boton type="reset" text="Limpiar" onClick={clearInputs} />
      </form>

      <section>
        <p id="mensaje">{mensaje}</p>
      </section>
    </>
  );
}

export default Pagar;
