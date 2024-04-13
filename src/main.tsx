import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { GlobalStyles } from "./styles/GlobalStyles.ts";

import App from "./App.tsx";
// import { Profile } from "./components/Profile/Profile.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  // { path: "/profile", element: <Profile /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <GlobalStyles />
  </React.StrictMode>
);
