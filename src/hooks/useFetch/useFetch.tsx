import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url: any) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fethData() {
        try {
            const { data: response }: any = await axios.get(url);
            setData(response);
            setLoading(false);
        } catch (error: any) {
            setError(error.message);
            setLoading(false);
        }

    }

    useEffect(() => {
        fethData();
    }, [])

    return ({ error, loading, data })
}

export default useFetch;