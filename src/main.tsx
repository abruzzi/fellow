import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RelayEnvironmentProvider } from "react-relay";
import environment from "./relay/environment.ts";

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Root } from "./routes/Root.tsx";
import { ErrorPage } from "./ErrorPage.tsx";
import { BoardPage } from "./routes/BoardPage.tsx";
import { Boards } from "./Boards.tsx";
import { NextUIProvider } from "@nextui-org/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "boards",
        element: <Boards />,
      },
      {
        path: "boards/:boardId",
        element: <BoardPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <RelayEnvironmentProvider environment={environment}>
        <RouterProvider router={router} />
      </RelayEnvironmentProvider>
    </NextUIProvider>
  </React.StrictMode>,
);
