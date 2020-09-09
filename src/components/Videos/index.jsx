import React from 'react'
import useDetail from '../../utils/hooks/useDetail'

const Videos = ({ media, id }) => {
    const [videos] = useDetail(media, id, "videos");
    if (videos) {
        return (
            <div className="container-video">
                {videos.results.map((video) =>
                    <iframe className="video --youtube"
                        id="player"
                        type="text/html"
                        width="640"
                        height="360"
                        src={`http://www.youtube.com/embed/${video.key}`}
                        frameborder="0"
                        title={video.name}
                    />

                )}

            </div>
        )
    }

    return null
}

export default Videos
