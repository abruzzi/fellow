import React from "react";
import { Button } from "@nextui-org/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  const handleGoogleLogin = () => {
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${import.meta.env.VITE_GOOGLE_CLIENT_ID}&redirect_uri=${encodeURIComponent(import.meta.env.VITE_OAUTH_REDIRECT_URI)}&response_type=code&scope=openid%20profile%20email`;
  };

  const handleGithubLogin = () => {
    console.log("trying to login with github");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full container m-auto max-w-72 p-4 bg-white rounded-sm shadow-md">
        <h2 className="text-2xl text-center mb-2">Login to Your Account</h2>
        <div className="flex flex-col gap-2">
          <Button
            onPress={handleGoogleLogin}
            startContent={<FcGoogle />}
            color="primary"
          >
            Sign in with Google
          </Button>
          <Button onPress={handleGithubLogin} startContent={<FaGithub />}>
            Sign in with GitHub
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
