import React from 'react';
import useGet from "../../utils/hooks/useGet";
import CardContainer from '../Card-Container';
import { URL_BASE } from "../../constantes/apiConfig";
import { FiArrowRight } from "react-icons/fi";
import useTitle from "../../utils/hooks/useTitle";
import { Link } from 'react-router-dom';
import useBreakpoint from '../../utils/hooks/useBreakpoint';





const CategoryPreview = ({ media, category }) => {

    const breackpoint = useBreakpoint();//cortamos las cards segun su withd que sacamos de use responsive

    const createURL = () => {
        if (category === "trending") {
            return `${URL_BASE}${category}/${media}/week?api_key=${process.env.REACT_APP_API_KEY}`;
        }
        return `${URL_BASE}${media}/${category}?api_key=${process.env.REACT_APP_API_KEY}`;
    }

    const [data, loading] = useGet(createURL())
    const title = useTitle(media, category);


    if (loading) {
        return (<div className="preloader"></div>)
    }
    if (data) {
        return (
            <div className="containerGeneral-preview">
                <div className="categoryPreview-container">
                    <Link to={`/${media}/${category}/page/1`} className="categoryPreview-title">

                        {title}
                        <FiArrowRight className="categoryPreview-arrow" />
                    </Link>
                    <CardContainer cards={data.results.slice(0, breackpoint)} media={media} />

                </div>
            </div>

        )
    }
    return null;
}



export default CategoryPreview;
