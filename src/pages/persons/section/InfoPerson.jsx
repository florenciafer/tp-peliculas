import React from 'react'

import ExternalLinks from '../../../components/ExternalLink';
import useDetail from '../../../utils/hooks/useDetail';

const InfoPerson = ({ media, id }) => {
    const [infoPerson] = useDetail("person", id,);
    if (infoPerson) {
        return (
            <div>
                <img src={`https://image.tmdb.org/t/p/w342/${infoPerson.profile_path}`} alt="" className="hero-info" />
                <h1 className="info-title">{infoPerson.name}</h1>
                <p className="info-rating">{infoPerson.biography}</p>
                <ExternalLinks media={media} id={id} />
            </div>
        )
    }
    return null

}

export default InfoPerson
