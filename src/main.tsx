import React from "react";
import ReactDOM from "react-dom/client";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.ts";
import { GlobalStyles } from "./styles/GlobalStyles.ts";

import App from "./App.tsx";
import { Profile } from "./components/Profile/Profile.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Navigate to="/profile" /> },
      { path: "/profile", element: <Profile /> },
      { path: "/top-artists", element: <Profile /> },
      { path: "/top-tracks", element: <Profile /> },
      { path: "/recent", element: <Profile /> },
      { path: "/playlist", element: <Profile /> },
    ],
  },
  {
    path: "*",
    element: <div>ERROOOOOOOOOOOR</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);
