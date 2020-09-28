import React from 'react'

const EpisodeCard = ({ img, title, overview, episodeNumber }) => {
    return (
        <div className="episodecard-container">
            <img className="episodecard-img" src={`https://image.tmdb.org/t/p/w400/${img}`} alt={`ìmg-${episodeNumber}`} />
            <div className="episodecard-title"> <p>EP{episodeNumber} </p><h4>-{title}</h4></div>
            <p>{overview}</p>
        </div>
    )
}

export default EpisodeCard

