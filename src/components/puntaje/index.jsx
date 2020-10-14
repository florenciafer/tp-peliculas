import React from "react";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";

const obtenerIconos = (puntaje, icono) => {
    console.log(puntaje);
    const aux = [];
    for (let i = 0; i < puntaje; i++) {
        aux.push(icono);
    }

    return aux;
};

const Puntaje = ({ puntuacion }) => {
    //puntuacion 6.6
    const icono = {
        filled: <BsStarFill></BsStarFill>,
        half: <BsStarHalf></BsStarHalf>,
        empty: <BsStar></BsStar>
    };

    const resto = puntuacion % 2; //3
    const iconosLlenos = obtenerIconos(Math.trunc(puntuacion) / 2, icono.filled);
    const iconosMedios = resto ? icono.half : null;
    if (resto) iconosLlenos.pop();
    const iconosVacios = obtenerIconos(
        (10 - puntuacion - resto) / 2,
        icono.empty
    );

    return [...iconosLlenos, iconosMedios, ...iconosVacios];
};

export default Puntaje;
