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
          const response = await fetch("https://oauth2.googleapis.com/token", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
              code,
              client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
              client_secret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
              redirect_uri: process.env.REACT_APP_OAUTH_REDIRECT_URI,
              grant_type: "authorization_code",
            }),
          });

          const data = await response.json();
          login(data.id_token); // or access_token, depending on your setup
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
