import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; //파이썬에선 .으로 안으로 들어갔는데 여기는 /롤 들어간다
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
