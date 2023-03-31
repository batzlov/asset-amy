import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import { AssetAllocation, Expenses, Overview, Revenues } from "./pages";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<RootLayout />}
        >
            <Route
                index
                element={<Overview />}
            />
            <Route
                path="revenues"
                element={<Revenues />}
            />
            <Route
                path="expenses"
                element={<Expenses />}
            />
            <Route
                path="asset-allocation"
                element={<AssetAllocation />}
            />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
