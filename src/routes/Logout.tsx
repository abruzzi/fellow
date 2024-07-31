import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthenticationContext.tsx";

const Logout = () => {
  const { logout } = useAuth();

  useEffect(() => {
    logout();
  }, [logout]);

  return <Navigate to="/login" replace />;
};

export { Logout };
