import { Navigate, Route, Routes } from "react-router-dom";
import { Root } from "./routes/Root.tsx";
import { ProtectedRoute } from "./routes/ProtectedRoute.tsx";
import { Boards } from "./Boards.tsx";
import { AcceptInvitation } from "./routes/AcceptInvitation.tsx";
import { Login } from "./routes/Login.tsx";
import { Logout } from "./routes/Logout.tsx";
import { OAuthCallback } from "./OAuthCallback.tsx";
import React, { useCallback, useEffect } from "react";
import { useQueryLoader } from "react-relay";
import { ApplicationQuery as ApplicationQueryType } from "./queries/__generated__/ApplicationQuery.graphql.ts";
import { ApplicationQuery } from "./queries/ApplicationQuery.tsx";
import { BoardScreen } from "./BoardScreen.tsx";

export const Application = () => {
  const [applicationQueryRef, loadApplicationQuery] =
    useQueryLoader<ApplicationQueryType>(ApplicationQuery);

  const refreshApplicationQuery = useCallback(() => {
    loadApplicationQuery({});
  }, [loadApplicationQuery]);

  useEffect(() => {
    if (!applicationQueryRef) {
      loadApplicationQuery({});
    }
  }, [loadApplicationQuery, applicationQueryRef]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          applicationQueryRef ? (
            <Root
              queryRef={applicationQueryRef}
              refreshQuery={refreshApplicationQuery}
            />
          ) : (
            <div>Loading...</div>
          )
        }
      >
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
              <BoardScreen />
            </ProtectedRoute>
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
