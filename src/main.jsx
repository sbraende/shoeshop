import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.jsx";
import { AuthProvider } from "./context/authContext.jsx";
import CartProvider from "./context/cartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </CartProvider>
  </StrictMode>
);
