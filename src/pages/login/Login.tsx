import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { loginFn } from "~/apis/auth";
import { useNavigate } from "@tanstack/react-router";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { mutate } = useMutation({
    mutationFn: loginFn,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.includes("@") || password.length < 6) {
      setError("Invalid email or password (min 6 characters)");
      return;
    }

    mutate(
      {
        data: {
          email,
          password,
        },
      },
      {
        onSuccess: (loginRes) => {
          if (loginRes) {
            localStorage.setItem("user", JSON.stringify(loginRes.user));
          }
          navigate({ to: "/" });
        },
      },
    );
  };

  return (
    <div className="loginContainer">
      <div className="loginContent">
        <div className="loginHeader">
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>
        </div>

        <form className="loginForm" onSubmit={handleSubmit}>
          {error && <p className="error">{error}</p>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="inputField"
          />

          <div className="passwordField">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="inputField"
            />

            <button type="button" className="showPasswordButton textButton">
              Show
            </button>
          </div>

          <button type="button" className="forgotPasswordButton textButton">
            Forgot Password?
          </button>

          <button type="submit" className="loginButton textButton">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
