import React from 'react'
import CardContainer from '../../../components/Card-Container';
import useDetail from '../../../utils/hooks/useDetail';
const Credits = ({ id }) => {
    const [credits] = useDetail("person", id, "combined_credits");
    if (credits) {
        return (
            <CardContainer cards={credits.cast} media="person" />)
    }
    return null
}

export default Credits
