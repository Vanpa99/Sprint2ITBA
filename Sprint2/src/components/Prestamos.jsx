import { useEffect } from 'react';
import Boton from './Boton';

function Prestamos() {

    useEffect(() => {
        const form = document.getElementById('form_prest');
        const resultado_form = document.getElementById('resultado');
        const acumulado_form = document.getElementById('acumulado');

        const handleFormSubmit = (e) => {
            e.preventDefault(); 

            const monto = document.getElementById('monto').value;
            const periodo = document.getElementById('periodo').value;
            const tasa = 0.02;

            const numerador = tasa * monto;
            const denominador = 1 - ( (1 + tasa) ** (-periodo) );

            const resul = numerador / denominador;
            const resultado = resul.toFixed(2);

            const acum = resultado * periodo;
            const acumulado = acum.toFixed(2);

            resultado_form.value = resultado;
            acumulado_form.value = acumulado;
        };

        form.addEventListener('submit', handleFormSubmit);

        // Cleanup: Remover el event listener cuando el componente se desmonte
        return () => {
            form.removeEventListener('submit', handleFormSubmit);
        };
    }, []); // El array vacío asegura que useEffect se ejecute solo una vez, después de que el componente se monte

    return (
        <div>
            <h2 className="bienvenida">Calculadora De Préstamos</h2>
            
            <h3>Para conocer el valor de los pagos mensuales que debe realizar, ingrese los siguientes datos:</h3>
            <p>Se considerará una tasa mensual del 2%.</p>
            <form id="form_prest">
                <nav>
                    <label htmlFor="monto">Ingrese el monto en pesos del préstamo que desea realizar:</label>
                    <input type="number" id="monto" name="monto" placeholder="Monto del préstamo" required />
                </nav>
                <nav>
                    <label htmlFor="periodo">Ingrese el periodo de tiempo en meses en el cual abonará el préstamo:</label>
                    <input type="number" id="periodo" name="periodo" placeholder="Periodo" required />
                </nav>
                <nav>
                    <Boton type='submit' text='Calcular' />
                </nav>
                <nav>
                    <label htmlFor="resultado">Valor calculado de los pagos mensuales a realizar:</label>
                    <input type="number" id="resultado" name="resultado" disabled />
                    <label htmlFor="acumulado">Valor total acumulado en el periodo indicado:</label>
                    <input type="number" id="acumulado" name="acumulado" disabled />
                </nav>
            </form>
        </div>
    );
}

export default Prestamos;
