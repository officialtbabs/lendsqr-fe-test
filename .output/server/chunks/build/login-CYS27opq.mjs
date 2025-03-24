import { jsx, jsxs } from 'react/jsx-runtime';
import { memo, useState } from 'react';
import { C as C$1 } from './lendsqr-logo-Dm91HNax.mjs';
import { useNavigate } from '@tanstack/react-router';

const g = "/_build/assets/login-illustration-BW319DUi.png", h = memo(({ children: e }) => jsxs("div", { className: "authLayoutContainer", children: [jsxs("div", { className: "layoutIllustrationContainer", children: [jsx("img", { src: C$1, alt: "lendsqr icon", className: "logo" }), jsx("img", { src: g, alt: "login illustration", className: "illustration" })] }), jsx("div", { className: "layoutContent", children: e })] })), N = () => {
  const [e, r] = useState(""), [s, c] = useState(""), [l, i] = useState(""), u = useNavigate();
  return jsx("div", { className: "loginContainer", children: jsxs("div", { className: "loginContent", children: [jsxs("div", { className: "loginHeader", children: [jsx("h1", { children: "Welcome!" }), jsx("p", { children: "Enter details to login." })] }), jsxs("form", { className: "loginForm", onSubmit: (n) => {
    if (n.preventDefault(), i(""), !e.includes("@") || s.length < 6) {
      i("Invalid email or password (min 6 characters)");
      return;
    }
    localStorage.setItem("user", JSON.stringify({ email: e })), u({ to: "/" });
  }, children: [l && jsx("p", { className: "error", children: l }), jsx("input", { type: "email", placeholder: "Email", value: e, onChange: (n) => r(n.target.value), className: "inputField" }), jsxs("div", { className: "passwordField", children: [jsx("input", { type: "password", placeholder: "Password", value: s, onChange: (n) => c(n.target.value), className: "inputField" }), jsx("button", { type: "button", className: "showPasswordButton textButton", children: "Show" })] }), jsx("button", { type: "button", className: "forgotPasswordButton textButton", children: "Forgot Password?" }), jsx("button", { type: "submit", className: "loginButton textButton", children: "Log in" })] })] }) });
}, C = function() {
  return jsx(h, { children: jsx(N, {}) });
};

export { C as component };
//# sourceMappingURL=login-CYS27opq.mjs.map
