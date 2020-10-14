import React from 'react'
import Img from '../img'

const EpisodeCard = ({ img, title, overview, episodeNumber }) => {
    return (
        <div className="episodecard-container">
            <Img className="episodecard-img" src={`https://image.tmdb.org/t/p/w400/${img}`} alt={`ìmg-${episodeNumber}`} />
            <div className="episodecard-info">
                <div className="episodecard-title"> <p className="espisodecard-subtitle">EP{episodeNumber} </p><h4>-{title}</h4></div>
                <p className="episodecard-overview">{overview}</p>
            </div>

        </div>
    )
}

export default EpisodeCard

