import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthenticationContext.tsx";

const useHandleInvite = () => {
  const { token: userToken } = useAuth();
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
        console.log(data);

        navigate(`/board/${data.boardId}`);
      } catch (error) {
        console.log(error);
      }
    },
    [navigate, userToken],
  );

  return { handleInvite };
};

export { useHandleInvite };
