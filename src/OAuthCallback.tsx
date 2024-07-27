import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthenticationContext";

const OAuthCallback = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const exchangeCodeForToken = async () => {
      const code = new URLSearchParams(window.location.search).get("code");

      if (code) {
        try {
          const response = await fetch(`${import.meta.env.VITE_BOARDS_BASE_URL}/auth/google-callback`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ code }),
          });

          if (!response.ok) {
            throw new Error("Failed to exchange code for token");
          }

          const data = await response.json();
          login(data);
          navigate("/boards");
        } catch (error) {
          console.error("Error exchanging code for token", error);
          navigate("/login");
        }
      }
    };

    exchangeCodeForToken();
  }, [login, navigate]);

  return <div>Processing login...</div>;
};

export default OAuthCallback;
