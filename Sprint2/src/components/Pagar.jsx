import { useState, useRef } from "react";
import Boton from "./Reutilizables/Boton";
import InputField from "./Reutilizables/InputField";
import Selector from "./Reutilizables/Selector";

function Pagar() {
  const formRef = useRef(null); // Referencia al formulario
  const [accion, setAccion] = useState("transferencia");
  const [mensaje, setMensaje] = useState("");

  const opcionesAccion = [
    { value: "transferencia", label: "Transferencia" },
    { value: "pago", label: "Pago" },
  ];

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
    window.alert(mensajeAlerta);
  };

  return (
    <>
      <h2 className="section-title">Métodos de Pago</h2>
      <p className="info-form">
        Para realizar una transferencia o pagar con codigo, complete los
        siguientes datos:
      </p>
      <form ref={formRef} onSubmit={handleSubmit} className="form-container">
        <Selector
          name="accion"
          label="Seleccione el tipo de operación:"
          options={opcionesAccion}
          onChange={(e) => setAccion(e.target.value)}
        />

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
          </article>
        )}
        <div className="btn-container">
          <Boton type="submit" text="Enviar" id="enviarFormu" />
          <Boton type="button" text="Limpiar" formRef={formRef} onClear={() => {}} />
        </div>
      </form>

      <section>
        <p id="mensaje">{mensaje}</p>
      </section>
    </>
  );
}

export default Pagar;
