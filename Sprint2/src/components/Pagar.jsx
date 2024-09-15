import { useState } from 'react';

function Pagar() {
    const [accion, setAccion] = useState('transferencia');
    const [mensaje, setMensaje] = useState('');

    // Handler para el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        let mensajeAlerta = '';

        if (accion === 'transferencia') {
            mensajeAlerta = 'Transferencia realizada. Le enviaremos por correo el comprobante';
        } else if (accion === 'pago') {
            mensajeAlerta = 'Pago de servicio realizado. ¡Gracias por elegirnos!';
        }

        setMensaje(mensajeAlerta);
        clearInputs();
        window.alert(mensajeAlerta);
    };

    // Handler para limpiar los inputs
    const clearInputs = () => {
        document.getElementById('cbu').value = '';
        document.getElementById('monto-transferencia').value = '';
        document.getElementById('codigo-pago').value = '';
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
                {accion === 'transferencia' && (
                    <article className="input-transferencia">
                        <section>
                            <label htmlFor="cbu">Ingrese CBU</label>
                            <input type="number" name="cbu" id="cbu" />
                        </section>
                        <section>
                            <label htmlFor="monto-transferencia">Ingrese el monto: $</label>
                            <input type="number" name="monto-transferencia" id="monto-transferencia" />
                        </section>
                    </article>
                )}

                {accion === 'pago' && (
                    <article className="input-pago">
                        <section>
                            <label htmlFor="codigo-pago">Ingrese el código de pago</label>
                            <input type="number" name="codigo-pago" id="codigo-pago" />
                        </section>
                    </article>
                )}

                <article className="buttons">
                    <input type="submit" value="Enviar" id="enviarFormu" />
                    <input type="reset" value="Limpiar" onClick={clearInputs} />
                </article>
            </form>

            <section>
                <p id="mensaje">{mensaje}</p>
            </section>
        </>
    );
}

export default Pagar;
