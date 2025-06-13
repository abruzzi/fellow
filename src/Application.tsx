import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Root } from "./routes/Root.tsx";
import { Boards } from "./Boards.tsx";
import { AcceptInvitation } from "./routes/AcceptInvitation.tsx";
import { Login } from "./routes/Login.tsx";
import { Logout } from "./routes/Logout.tsx";
import { OAuthCallback } from "./OAuthCallback.tsx";
import { BoardScreen } from "./BoardScreen.tsx";

export const Application = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to="/boards" replace />} />
        <Route
          path="boards"
          element={
            <Boards />
          }
        />
        <Route
          path="boards/:boardId"
          element={
            <BoardScreen />
          }
        />
      </Route>
      <Route path="/accept-invitation" element={<AcceptInvitation />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/oauth/callback" element={<OAuthCallback />} />
    </Routes>
  );
};
