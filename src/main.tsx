import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RelayEnvironmentProvider } from "react-relay";
import environment from "./relay/environment.ts";
import { ErrorBoundary } from "react-error-boundary";

import { BrowserRouter as Router } from "react-router-dom";

import { NextUIProvider } from "@nextui-org/react";
import { AuthProvider } from "./AuthenticationContext.tsx";
import { Application } from "./Application.tsx";

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
                <Application />
              </Router>
            </RelayEnvironmentProvider>
          </NextUIProvider>
        </AuthProvider>
      </ErrorBoundary>
    </React.StrictMode>,
  ),
);