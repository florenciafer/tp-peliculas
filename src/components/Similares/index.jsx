import React from 'react'
import useDetail from '../../utils/hooks/useDetail'
import CardContainer from '../Card-Container';

const Similares = ({ media, id }) => {
    const [similar] = useDetail(media, id, "similar");
    if (similar) {
        return (
            <CardContainer cards={similar.results} media={media} />)
    }
    return null
}

export default Similares
