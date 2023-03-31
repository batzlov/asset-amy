import { useCallback, useEffect, useState } from "react";

export default function UseFetch(path: string) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const refetch = useCallback(() => {
        let url = `http://localhost:3000/${path}`;

        fetch(url, {
            headers: {
                Authorization: `Bearer `, // add bearer token here
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setData(json);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [path]);

    useEffect(() => {
        refetch();
    }, [refetch]);

    return { data, loading, error, refetch };
}
