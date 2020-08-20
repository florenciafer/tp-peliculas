import React from 'react'
import useDetail from '../../utils/hooks/useDetail'
import { useHistory, useParams } from 'react-router-dom';

const Season = ({ id, seasons }) => {
    const { season } = useParams();
    const history = useHistory();
    const [data] = useDetail("tv", id, `season/${season}`)

    const onSelect = (event) => {
        console.log("temporadaseleccionada", event.target.value)
        history.push(`/tv/${id}/seasons/${event.target.value}`)

    }
    if (data) {
        return (
            <div>

                <select name="temporada" onClick={onSelect}>
                    {seasons.map((season, index) => {
                        return <option
                            key={season.id}
                            value={index}
                        >
                            {season.name}
                        </option>
                    })}
                </select>
            </div>
        )
    }
    return null


}

export default Season
