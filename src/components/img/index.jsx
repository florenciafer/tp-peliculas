import React, { useState } from 'react'
import { MdBrokenImage } from 'react-icons/md';

const Img = ({ src, alt, className }) => {
    const [onload, setOnload] = useState();
    const [error, seterror] = useState();
    const handleOnload = () => {
        setOnload(true)
    }
    const handleOnError = () => {
        seterror(true)
    }
    return (
        <>
            {!error && (
                <img src={src}
                    alt={alt}
                    className={className}
                    onLoad={handleOnload}
                    onError={handleOnError} />
            )}
            {!onload && (
                <div className="img-error-deafult">
                    < MdBrokenImage className="img-error-icon" />
                </div>
            )}

        </>
    )
}

export default Img
