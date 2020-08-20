import React from 'react'

const EpisodeCard = ({ img, title, overview, episodeNumber }) => {
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w400/${img}`} alt={`ìmg-${episodeNumber}`} />
            <h1>EP{episodeNumber} - {title}</h1>
            <p>{overview}</p>
        </div>
    )
}

export default EpisodeCard

