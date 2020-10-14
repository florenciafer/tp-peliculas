import React from 'react';
import useDetail from '../../utils/hooks/useDetail';
import { FaImdb, FaInstagram, FaFacebook, FaTwitter, FaLink } from 'react-icons/fa';

const ExternalLinks = ({ media, id }) => {
    const [data] = useDetail(media, id, 'external_ids')
    return (
        <div>
            {
                data &&
                <ul className="social-media-info">
                    <li className="list-social-media">{data.facebook_id && <a href={`https://www.facebook.com/${data.facebook_id}`} target="_blank" rel="noopener noreferrer"><FaFacebook className="social-media-list" /></a>}</li>
                    <li className="list-social-media" >{data.instagram_id && <a href={`https://www.instagram.com/${data.instagram_id}`} target="_blank" rel="noopener noreferrer"><FaInstagram className="social-media-list" /></a>}</li>
                    <li className="list-social-media">{data.twitter_id && <a href={`https://twitter.com/${data.twitter_id}`} target="_blank" rel="noopener noreferrer"><FaTwitter className="social-media-list" /></a>}</li>
                    <li className="list-social-media">{data.imdb_id && <a href={`https://www.imdb.com/title/${data.imdb_id}`} target="_blank" rel="noopener noreferrer"><FaImdb className="social-media-list" /></a>}</li>
                    <li className="list-social-media">{data.id && <a href={`https://www.netflix.com/title/${data.id}`} target="_blank" rel="noopener noreferrer"><FaLink className="social-media-list" /></a>}</li>

                </ul>
            }

        </div >
    )
}

export default ExternalLinks

