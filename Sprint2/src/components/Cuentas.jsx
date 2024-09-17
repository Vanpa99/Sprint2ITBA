import { useEffect, useState } from "react";
import Boton from "./Reutilizables/Boton";
import Selector from "./Reutilizables/Selector";

function Cuentas() {
  const [monedaSeleccionada, setMonedaSeleccionada] = useState("USD");

  useEffect(() => {
    const modal = document.getElementById("accountModal");
    const closeModal = document.querySelector(".close");
    const modalAccountNumber = document.getElementById("modalAccountNumber");

    function openModal(accountNumber) {
      modalAccountNumber.textContent = "Número de Cuenta: " + accountNumber;
      modal.style.display = "block";
    }

    document.querySelectorAll(".details-btn").forEach((button) => {
      button.addEventListener("click", function () {
        const accountNumber = this.getAttribute("dataAccount");
        openModal(accountNumber);
      });
    });

    closeModal.addEventListener("click", function () {
      modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });

    return () => {
      document.querySelectorAll(".details-btn").forEach((button) => {
        button.removeEventListener("click", openModal);
      });
      closeModal.removeEventListener("click", () => (modal.style.display = "none"));
      window.removeEventListener("click", (event) => {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      });
    };
  }, []);

  const opcionesMoneda = [
    { value: "ARS", label: "ARS" },
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
    { value: "MEX", label: "MEX" },
  ];

  const manejarCambioMoneda = (e) => {
    setMonedaSeleccionada(e.target.value);
  };

  return (
    <div>
      <h2 className="bienvenida">Mis Cuentas</h2>
      <p className="p-cuentas">
        Aquí puedes ver y gestionar todas tus cuentas bancarias.
      </p>

      {/* Tabla de cuentas */}
      <table className="accounts-table">
        <thead>
          <tr>
            <th>Tipo de Cuenta</th>
            <th>Número de Cuenta</th>
            <th>
              <div>
                Saldo
                <Selector
                  name="moneda"
                  label=""
                  options={opcionesMoneda} // Aquí pasas las opciones de moneda
                  onChange={manejarCambioMoneda}
                />
              </div>
            </th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cuenta Corriente</td>
            <td>123-456789-00</td>
            <td>$50,000</td>
            <td>
              <Boton
                text="Ver Detalles"
                className="details-btn"
                dataAccount="123-456789-00"
              />
            </td>
          </tr>
          <tr>
            <td>Caja de Ahorro</td>
            <td>987-654321-00</td>
            <td>$15,300</td>
            <td>
              <Boton
                text="Ver Detalles"
                className="details-btn"
                dataAccount="987-654321-00"
              />
            </td>
          </tr>
        </tbody>
      </table>

      {/* Movimientos recientes */}
      <div className="account-summary">
        <h3>Movimientos Recientes</h3>
        <ul>
          <li>Depósito: $2,000 (01/09/2024)</li>
          <li>Transferencia: -$500 (02/09/2024)</li>
          <li>Pago de Servicios: -$1,200 (03/09/2024)</li>
        </ul>
      </div>

      {/* Gráfico ilustrativo */}
      <div className="account-charts">
        <h3>Resumen en Gráficos</h3>
        <img src="grafico-ejemplo.png" alt="Gráfico de ejemplo de saldos" />
      </div>

      {/* Modal */}
      <div id="accountModal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <h3>Detalles de la Cuenta</h3>
          <p id="modalAccountNumber"></p>
          <p>Información adicional sobre la cuenta seleccionada.</p>
        </div>
      </div>
    </div>
  );
}

export default Cuentas;


