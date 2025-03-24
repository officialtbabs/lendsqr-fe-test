import { memo, NamedExoticComponent, ReactNode } from "react";
import LendSqrLogo from "~/assets/svgs/lendsqr-logo.svg";
import LoginIllustration from "~/assets/illustrations/login-illustration.png";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: NamedExoticComponent<AuthLayoutProps> = memo(
  ({ children }) => {
    return (
      <div className="authLayoutContainer">
        <div className="layoutIllustrationContainer">
          <img src={LendSqrLogo} alt="lendsqr icon" className="logo" />

          <img
            src={LoginIllustration}
            alt="login illustration"
            className="illustration"
          />
        </div>

        <div className="layoutContent">{children}</div>
      </div>
    );
  },
);

export default AuthLayout;
