import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/secular-one";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <ChakraProvider theme={theme}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ChakraProvider>
);
