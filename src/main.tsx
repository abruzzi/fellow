import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RelayEnvironmentProvider } from "react-relay";
import environment from "./relay/environment.ts";
import { ErrorBoundary } from "react-error-boundary";

import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import { NextUIProvider } from "@nextui-org/react";

import { Root } from "./routes/Root.tsx";
import { Board } from "./routes/Board.tsx";
import { Boards } from "./Boards.tsx";
import { Login } from "./routes/Login.tsx";
import { Logout } from "./routes/Logout.tsx";
import { OAuthCallback } from "./OAuthCallback.tsx";
import { ProtectedRoute } from "./routes/ProtectedRoute.tsx";
import { AuthProvider } from "./AuthenticationContext.tsx";
import { AcceptInvitation } from "./routes/AcceptInvitation.tsx";

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("./mocks/browser");

  return worker.start();
}

enableMocking().then(() =>
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <ErrorBoundary
        fallback={
          <div>
            If you could see this, that means something seriously wrong.
          </div>
        }
      >
        <AuthProvider>
          <NextUIProvider>
            <RelayEnvironmentProvider environment={environment}>
              <Router>
                <Routes>
                  <Route path="/" element={<Root />}>
                    <Route index element={<Navigate to="/boards" replace />} />
                    <Route
                      path="boards"
                      element={
                        <ProtectedRoute>
                          <Boards />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="boards/:boardId"
                      element={
                        <ProtectedRoute>
                          <Board />
                        </ProtectedRoute>
                      }
                    />
                  </Route>
                  <Route
                    path="/accept-invitation"
                    element={<AcceptInvitation />}
                  />
                  <Route path="/login" element={<Login />} />
                  <Route path="/logout" element={<Logout />} />
                  <Route path="/oauth/callback" element={<OAuthCallback />} />
                </Routes>
              </Router>
            </RelayEnvironmentProvider>
          </NextUIProvider>
        </AuthProvider>
      </ErrorBoundary>
    </React.StrictMode>,
  ),
);
