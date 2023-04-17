import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

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
            <Route path="/" element={<AuthLayout />}>
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/sign-in" element={<SignIn />} />
            </Route>
            <Route path="/" element={<RootLayout />}>
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
