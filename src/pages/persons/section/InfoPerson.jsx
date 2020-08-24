import React from 'react'
import useDetail from '../../../utils/hooks/useDetail';
import ExternalLinks from '../../../components/ExternalLink';

const InfoPerson = ({ id }) => {
    const [infoPerson] = useDetail("person", id);

    if (infoPerson) {
        return (
            <div>
                <img src={`https://image.tmdb.org/t/p/w342/${infoPerson.profile_path}`} alt="" className="hero-info" />
                <h1 className="info-title">{infoPerson.name}</h1>
                <p className="i</ExternalLinks>nfo-rating">{infoPerson.biography}</p>
                <div> <ExternalLinks media="person" id={id} /></div>


            </div>
        )
    }
    return null

}

export default InfoPerson
