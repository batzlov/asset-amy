import { useCallback, useState } from "react";
import useAuth from "../components/store/AuthContext";

export default function usePost<T>(
    path: string,
    onSuccess = (data: unknown) => {},
    onError = (error: Error) => {}
) {
    console.log(process);
    if (!process.env.REACT_APP_BACKEND_URL) {
        throw new Error(
            "REACT_APP_BACKEND_URL not set in environment variables"
        );
    }

    const { token } = useAuth();

    const [data, setData] = useState<T>();
    const [response, setResponse] = useState<Response>();
    const [error, setError] = useState<Error>();

    const sendPost = useCallback(
        (payload: object) => {
            fetch(process.env.REACT_APP_BACKEND_URL + path, {
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
                    onSuccess(json.data);
                    return setData(json.data);
                })
                .catch((err) => {
                    onError(err);
                    return setError(err);
                });
        },
        [path, token, onSuccess, onError]
    );

    return { data, response, error, sendPost };
}
