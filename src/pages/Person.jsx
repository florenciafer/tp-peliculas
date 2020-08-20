import React from 'react'
import { useParams } from 'react-router-dom';
import useDetail from '../utils/hooks/useDetail';


const Person = () => {
    const { id } = useParams();
    const [data] = useDetail("person", id, "combined_credits");
    const [infoPerson] = useDetail("person", id,);
    console.log(data, infoPerson)

    return (
        <div>
            <h1>hola</h1>
        </div>
    )
}

export default Person
