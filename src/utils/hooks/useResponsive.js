import { useState, useEffect } from 'react'


const useResponsive = () => {
    const [size, setsize] = useState();

    //agregar el elemento window es asincronico 
    //cuando hay un cambio de anchura me  setee en setsize con window.innnerwitdh va a recibir handlewithd
    const handleWidth = () => {
        setsize(window.innerWidth) // obtengo el ancho 
    }

    useEffect(() => {
        window.addEventListener("resize", handleWidth)// obtengo el ancho y lo guardo en mi funcion handlewidth 
        return () => {
            window.removeEventListener("resize", handleWidth) // para que no se acumule cada vez que se reenderiza 
            // el componente si no lo saca lo va a ejecutar varias veces 
        }
    }, [])
    return size
}

export default useResponsive
