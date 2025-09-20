import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <h1 className="text-blue-900 font-bold text-xlclea">Hello world</h1>
  </StrictMode>
);
