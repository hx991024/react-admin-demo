import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import "virtual:uno.css";
import "./main.less";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
