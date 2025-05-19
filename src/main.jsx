import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
