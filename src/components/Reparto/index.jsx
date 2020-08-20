import React from 'react';
import useDetail from '../../utils/hooks/useDetail';
import CardContainer from '../Card-Container';

const Reparto = ({ media, id }) => {
    const [credits] = useDetail(media, id, "credits");
    console.log(credits)
    if (credits) {
        return (
            <CardContainer cards={credits.cast} media="person" />
        )
    }

    return null

}

export default Reparto
