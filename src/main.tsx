import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RelayEnvironmentProvider } from "react-relay";
import environment from "./relay/environment.ts";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/Root.tsx";
import { ErrorPage } from "./ErrorPage.tsx";
import { Board } from "./routes/Board.tsx";
import { Boards } from "./Boards.tsx";
import { NextUIProvider } from "@nextui-org/react";
import Login from "./routes/Login.tsx";
import OAuthCallback from "./OAuthCallback.tsx";
import ProtectedRoute from "./routes/ProtectedRoute.tsx";
import { AuthProvider } from "./AuthenticationContext.tsx";
import { Recent } from "./routes/Recent.tsx";
import { Starred } from "./routes/Starred.tsx";

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("./mocks/browser");

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "boards",
        element: (
          <ProtectedRoute>
            <Boards />
          </ProtectedRoute>
        ),
      },
      {
        path: "recent",
        element: (
          <ProtectedRoute>
            <Recent />
          </ProtectedRoute>
        ),
      },
      {
        path: "starred",
        element: (
          <ProtectedRoute>
            <Starred />
          </ProtectedRoute>
        ),
      },
      {
        path: "boards/:boardId",
        element: (
          <ProtectedRoute>
            <Board />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/oauth/callback",
    element: <OAuthCallback />,
  },
]);

enableMocking().then(() =>
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <AuthProvider>
        <NextUIProvider>
          <RelayEnvironmentProvider environment={environment}>
            <RouterProvider router={router} />
          </RelayEnvironmentProvider>
        </NextUIProvider>
      </AuthProvider>
    </React.StrictMode>,
  ),
);
