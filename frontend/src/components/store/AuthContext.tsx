import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
    token?: string;
    loading: boolean;
    error: Error;
    user: any | undefined;
    signIn: (email: string, password: string) => void;
    signOut: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({
    children,
}: {
    children: ReactNode;
}): JSX.Element {
    const navigate = useNavigate();

    const [token, setToken] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);
    const [loadingInitial, setLoadingInitial] = useState<boolean>(true);
    const [error, setError] = useState<Error>();
    const [user, setUser] = useState<any | null>(null);

    useEffect(() => {
        if (error) {
            setError(undefined);
        }
    }, [error]);

    useEffect(() => {
        const storedToken = localStorage.getItem("access_token") as string;

        if (storedToken) {
            setToken(storedToken);
        }

        setLoadingInitial(false);
    }, []);

    const signIn = useCallback(
        (email: string, password: string) => {
            setLoading(true);

            fetch("http://localhost:3000/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            })
                .then((response) => response.json())
                .then((json) => {
                    localStorage.setItem("access_token", json.access_token);
                    localStorage.setItem(
                        "user",
                        JSON.stringify(json.current_user)
                    );

                    setToken(json.access_token);
                    setUser(json.current_user);
                    setLoading(false);
                    navigate("/overview");
                })
                .catch((error) => setError(error))
                .finally(() => setLoading(false));
        },
        [navigate]
    );

    const signOut = useCallback(() => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("user");

        setToken(undefined);
        setUser(null);
        navigate("/");
    }, []);

    const memoedValue = useMemo(
        () => ({
            token,
            loading,
            error,
            user,
            signIn,
            signOut,
        }),
        [token, loading, error, user, signIn, signOut]
    );

    return (
        <AuthContext.Provider value={memoedValue}>
            {!loadingInitial && children}
        </AuthContext.Provider>
    );
}

export default function useAuth() {
    return useContext(AuthContext);
}
