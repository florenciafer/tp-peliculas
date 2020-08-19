import React from 'react';
import useDetail from '../../utils/hooks/useDetail';
import { FaImdb, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const ExternalLinks = ({ media, id }) => {
    const [data] = useDetail(media, id, 'external_ids')
    return (
        <div>
            {
                data &&
                <ul >
                    <li>{data.facebook_id && <a href={`https://www.facebook.com/${data.facebook_id}`} target="_blank"><FaFacebook /></a>}</li>
                    <li>{data.instagram_id && <a href={`https://www.instagram.com/${data.instagram_id}`} target="_blank"><FaInstagram /></a>}</li>
                    <li>{data.twitter_id && <a href={`https://twitter.com/${data.twitter_id}`} target="_blank"><FaTwitter /></a>}</li>
                    <li>{data.imdb_id && <a href={`https://www.imdb.com/title/${data.imdb_id}`} target="_blank"><FaImdb /></a>}</li>
                    <li>{data.id && <a href={`https://www.netflix.com/title/${data.id}`} target="_blank"><FaTwitter /></a>}</li>

                </ul>
            }

        </div >
    )
}

export default ExternalLinks

