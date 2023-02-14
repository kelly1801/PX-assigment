import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyles } from "./styles/GlobalStyles";
import { CardProvider } from "./context/CardContext";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CardProvider>
      <GlobalStyles />
      <App />
    </CardProvider>
  </React.StrictMode>
);
