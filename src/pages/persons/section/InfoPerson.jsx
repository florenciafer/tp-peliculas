import React from 'react'
import useDetail from '../../../utils/hooks/useDetail';
import ExternalLinks from '../../../components/ExternalLink';

const InfoPerson = ({ id }) => {
    const [infoPerson] = useDetail("person", id);
    if (infoPerson) {
        return (
            <div className="container-info">
                <div className="img-person">
                    <img src={`https://image.tmdb.org/t/p/w342/${infoPerson.profile_path}`} alt="" className="img-person" />
                </div>
                <div className="container-textInfo">
                    <h1 className="info-title">{infoPerson.name}</h1>
                    <p className="info-description">{infoPerson.biography}</p>
                    <div> <ExternalLinks media="person" id={id} /></div>

                </div>


            </div>



        )
    }
    return null

}

export default InfoPerson
