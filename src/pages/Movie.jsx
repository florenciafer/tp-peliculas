import React from 'react'
import CategoryPreview from '../components/CategoryPreview'

const Movie = () => {
    return (
        <div>
            <CategoryPreview media="movie" category="popular" />
            <CategoryPreview media="movie" category="top_rated" />
            <CategoryPreview media="movie" category="now_playing" />
            <CategoryPreview media="movie" category="upcoming" />
        </div>
    )
}

export default Movie
