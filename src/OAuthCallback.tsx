import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthenticationContext";
import { useHandleInvite } from "./useHandleInvite.ts";

type AuthResponse = {
  token: string;
};

const OAuthCallback = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const { handleInvite } = useHandleInvite();

  useEffect(() => {
    const exchangeCodeForToken = async () => {
      const code = new URLSearchParams(window.location.search).get("code");

      if (code) {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_BOARDS_BASE_URL}/auth/google-callback`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ code }),
            },
          );

          if (!response.ok) {
            throw new Error("Failed to exchange code for token");
          }

          const data: AuthResponse = await response.json();
          login(data.token);
          const inviteToken = localStorage.getItem("pendingInviteToken");

          if (inviteToken) {
            await handleInvite(inviteToken);
            localStorage.removeItem("pendingInviteToken");
          } else {
            navigate("/boards");
          }
        } catch (error) {
          console.error("Error exchanging code for token", error);
          navigate("/login");
        }
      }
    };

    exchangeCodeForToken();
  }, [handleInvite, login, navigate]);

  return <div>Processing login...</div>;
};

export { OAuthCallback };
