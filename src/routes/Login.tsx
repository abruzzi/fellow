import React from "react";

const Login = () => {
  const handleGoogleLogin = () => {
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&redirect_uri=${encodeURIComponent(process.env.REACT_APP_OAUTH_REDIRECT_URI)}&response_type=code&scope=openid%20profile%20email`;
  };

  return <button onClick={handleGoogleLogin}>Login with Google</button>;

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;
