import React from 'react'
import useDetail from '../../utils/hooks/useDetail'

const Videos = ({ media, id, language }) => {
    const [videos] = useDetail(media, id, "videos", language);
    if (videos) {
        return (
            <div className="container-video">
                {videos.results.map((video) =>
                    <iframe className="video --youtube"
                        id="player"
                        type="text/html"
                        width="640"
                        height="360"
                        src={video.key ?`https://www.youtube.com/embed/${video.key}` : `https://www.youtube.com/watch?v=TURbeWK2wwg`  }                     
                        frameborder="0"
                        title={video.name ? video.name : "Hola Mundo"}
                    />

                )}

            </div>
        )
    }else

    return null
}

export default Videos
