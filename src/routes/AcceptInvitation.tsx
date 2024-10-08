import { useAuth } from "../AuthenticationContext.tsx";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useHandleInvite } from "../useHandleInvite.ts";

const AcceptInvitation = () => {
  const { token: userToken } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const { handleInvite } = useHandleInvite();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const inviteToken = params.get("token");
    localStorage.setItem("pendingInviteToken", inviteToken);

    if (inviteToken) {
      if (userToken) {
        handleInvite(inviteToken);
      } else {
        navigate("/login");
      }
    }
  }, [handleInvite, location, navigate, userToken]);

  return <div></div>;
};

export { AcceptInvitation };
