import { useState, useEffect } from "react";
import Moneda from "./Moneda";
import Card from "./Card";

function Inicio() {
    // Genera un número de 6 cifras aleatorio
    const generateRandomPesos = () => {
        return Math.floor(100000 + Math.random() * 900000).toString();
    };

    // Establece el número aleatorio como valor inicial 
    const [pesos1, setPesos] = useState(generateRandomPesos());
    const [pesos2, setPesos2] = useState(generateRandomPesos());
    const [pesos3, setPesos3] = useState(generateRandomPesos());

    while (pesos2 === pesos1) {
        setPesos2(generateRandomPesos());
    }
    while (pesos3 === pesos1 || pesos3 === pesos2) {
        setPesos3(generateRandomPesos());
    }

    

    return (
        <>
            <section className="area-principal">
                <h2 className="bienvenida">¡Bienvenido!</h2>
                <Moneda />
                <Card pesos={pesos1} />
                <Card pesos={pesos2} />
                <Card pesos={pesos3} />
                
            </section>
        </>
    );
}

export default Inicio;