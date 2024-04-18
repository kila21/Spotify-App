import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.tsx";

import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.ts";
import { GlobalStyles } from "./styles/GlobalStyles.ts";

// import { Profile } from "./components/Profile/Profile.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  // { path: "/profile", element: <Profile /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);
