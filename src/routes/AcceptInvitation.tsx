import { useAuth } from "../AuthenticationContext.tsx";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useCallback, useEffect } from "react";

const AcceptInvitation = () => {
  const { token: userToken } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleInvite = useCallback(
    async (invitationToken: string) => {
      try {
        const response = await fetch("/accept-invitation", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
          body: JSON.stringify({ invitationToken }),
        });

        const data = await response.json();
        navigate(`/board/${data.boardId}`);
      } catch (error) {
        console.log(error);
      }
    },
    [navigate, userToken],
  );

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const inviteToken = params.get("token");
    const boardId = params.get("board");

    if (inviteToken) {
      if (userToken) {
        handleInvite(inviteToken);
      } else {
        navigate("/login", {
          state: {
            redirectUrl: `/accept-invitation?token=${inviteToken}&board=${boardId}`,
          },
        });
      }
    }
  }, [handleInvite, location, navigate, userToken]);

  return <div>{/* You can add a loading indicator or message here */}</div>;
};

export { AcceptInvitation };
