import { useCallback, useState } from "react";
import useAuth from "../components/store/AuthContext";
import { config } from "../config/config";

export default function usePost<T>(params: {
    path: string;
    onError?: (error: Error) => void;
    onSuccess?: (data: unknown) => void;
}) {
    const { token } = useAuth();

    const [data, setData] = useState<T>();
    const [response, setResponse] = useState<Response>();
    const [error, setError] = useState<Error>();

    const sendPost = useCallback(
        (payload: object) => {
            fetch(config.BASE_URL + params.path, {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            })
                .then(async (res) => {
                    if (!res.ok) {
                        throw new Error((await res.json()).message);
                    }

                    setResponse(res);
                    return res.json();
                })
                .then((json) => {
                    if (params.onSuccess) {
                        params.onSuccess(json.data);
                    }

                    return setData(json.data);
                })
                .catch((err) => {
                    if (params.onError) {
                        params.onError(err);
                    }

                    return setError(err);
                });
        },
        [params.path, token, params.onSuccess, params.onError]
    );

    return { data, response, error, sendPost };
}
