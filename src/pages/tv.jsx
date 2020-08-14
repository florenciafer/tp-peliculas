import React from 'react'
import CategoryPreview from "../components/CategoryPreview";

const Tv = () => {
    return (
        <div>
            <CategoryPreview media="tv" category="popular" />
            <CategoryPreview media="tv" category="top_rated" />
            <CategoryPreview media="tv" category="on_the_air" />
        </div>
    )
}

export default Tv;
