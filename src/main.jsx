import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.jsx";
import { AuthProvider } from "./context/authContext.jsx";
import UserDataContext from "./context/userDataContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <UserDataContext>
        <RouterProvider router={router} />
      </UserDataContext>
    </AuthProvider>
  </StrictMode>
);
