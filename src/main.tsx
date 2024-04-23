import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { GlobalStyles } from "./styles/GlobalStyles.ts";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.ts";

import App from "./App.tsx";
import { Profile } from "./components/Profile/Profile.tsx";
import { Artists } from "./components/Artists/Artists.tsx";
import { Tracks } from "./components/Tracks/Tracks.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/profile", element: <Profile /> },
      { path: "/top-artists", element: <Artists /> },
      { path: "/top-tracks", element: <Tracks /> },
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
