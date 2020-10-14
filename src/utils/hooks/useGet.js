import { useState, useEffect } from 'react';
import Axios from "axios";

const useGet = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const getData = () => {
        setLoading(true);
        Axios.get(url)
            .then(results => {
                setData(results.data);
                setLoading(false);
            })
            .catch(error => {
                setError(true);
                setLoading(false);
            })

    }
    useEffect(() => {
        getData()

    }, [url])//criteriodecambio url
    return [data, loading, error]
}

export default useGet;