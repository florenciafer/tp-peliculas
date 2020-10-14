import React from "react";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";

const obtenerIconos = (puntaje, icono) => {
    console.log(puntaje)
    const aux = [];
    if (puntaje >= 7.5) {
        return puntaje == 5
    }
    for (let i = 0; i < puntaje; i++) {
        aux.push(icono);
    }
    return aux;

};

const Puntaje = ({ puntuacion }) => {

    //puntuacion 7.8
    const icono = {
        filled: <BsStarFill></BsStarFill>,
        half: <BsStarHalf></BsStarHalf>,
        empty: <BsStar></BsStar>,
    };



    const resto = puntuacion % 2; //3.9
    const iconosLlenos = obtenerIconos((puntuacion - resto) / 2, icono.filled);

    const iconosVacios = obtenerIconos(
        (10 - puntuacion - resto) / 2,
        icono.empty
    );

    return [...iconosLlenos, ...iconosVacios];
};

export default Puntaje; 
