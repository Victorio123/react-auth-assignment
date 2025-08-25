import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

export default function App() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="container">
      {isLogin ? (
        <LoginForm toggle={() => setIsLogin(false)} />
      ) : (
        <SignupForm toggle={() => setIsLogin(true)} />
      )}
    </div>
  );
}
