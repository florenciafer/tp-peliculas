import React from 'react'
import useDetail from '../../utils/hooks/useDetail'
import { useHistory, useParams } from 'react-router-dom';

import EpisodeCard from '../EpisodeCard';

const Seasons = ({ id }) => {
    const { season } = useParams();
    const [data] = useDetail("tv", id, "", "es-ES");
    console.log(data)
    const [seasonData] = useDetail("tv", id, `season/${season}`, "es-ES");
    const history = useHistory()

    const handleSeasonChange = (event) => {
        history.push(`/tv/${id}/seasons/${event.target.value}`)
    }

    if (data && seasonData) {
        const { episodes = [] } = seasonData;

        return (
            <div className="season-container">
                <div className="selectContainer">
                    <select className="season-select" onChange={handleSeasonChange}>
                        {data.seasons.map((dataSeason) => (
                            <option className="season-select" key={dataSeason.id}
                                value={dataSeason.season_number}>
                                Temporada: {dataSeason.season_number}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="containerCards">
                    {episodes.map((episode) => (
                        <EpisodeCard
                            key={episode.id}
                            img={episode.still_path}
                            title={episode.name}
                            overview={episode.overview}
                            episodeNumber={episode.episode_number}
                        />
                    ))}
                </div>
            </div>

        )
    }
    return null


};



export default Seasons
