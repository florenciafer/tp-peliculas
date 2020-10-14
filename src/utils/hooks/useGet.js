import { useState, useEffect } from 'react';
import Axios from "axios";

const useGet = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        Axios.get(url)
            .then(results => {
                setData(results.data);
                setLoading(false);
            })
            .catch(error => {
                setError(true);
            });
    }, [url]);
    return [data, loading, error]
};

export default useGet;