import React from "react";
import ReactDOM from "react-dom/client";
import { ColorModeScript, ChakraProvider, theme } from "@chakra-ui/react";
import "./styles/general.css";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
