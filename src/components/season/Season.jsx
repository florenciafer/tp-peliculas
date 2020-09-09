import React from 'react'
import useDetail from '../../utils/hooks/useDetail'
import { useHistory, useParams } from 'react-router-dom';
import EspisodeCard from '../EpisodeCard'

const Season = ({ id, seasons }) => {
    const { season } = useParams();
    const history = useHistory();
    const [data] = useDetail("tv", id, `season/${season}`)
    console.log(data)


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
                {data.episodes.map(episodio => {
                    return <EspisodeCard key={episodio.id}
                        img={episodio.still_path}
                        overview={episodio.overview}
                        title={episodio.name}
                        episodeNumber={episodio.episode_number} />
                })}
            </div>
        )
    }
    return null


}

export default Season
