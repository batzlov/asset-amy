import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import { AuthProvider } from "./components/store/AuthContext";

import { AuthLayout, RootLayout } from "./layouts";
import {
    AssetAllocation,
    Expenses,
    Landing,
    Overview,
    Revenues,
    SignIn,
    SignUp,
} from "./pages";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                path="/"
                element={
                    <AuthProvider>
                        <AuthLayout />
                    </AuthProvider>
                }
            >
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/sign-in" element={<SignIn />} />
            </Route>
            <Route
                path="/"
                element={
                    <AuthProvider>
                        <RootLayout />
                    </AuthProvider>
                }
            >
                <Route index element={<Landing />} />
                <Route path="overview" element={<Overview />} />
                <Route path="revenues" element={<Revenues />} />
                <Route path="expenses" element={<Expenses />} />
                <Route path="asset-allocation" element={<AssetAllocation />} />
            </Route>
        </>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
