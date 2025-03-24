import { Link } from "@tanstack/react-router";
import { memo, NamedExoticComponent, ReactNode } from "react";
import LendSqrLogo from "~/assets/svgs/lendsqr-logo.svg";
import { NavItem } from "~/constants/types";
import DashboardIcon from "~/assets/svgs/icons/dashboard-icon.svg";
import UsersIcon from "~/assets/svgs/icons/users-icon.svg";
import GuarantorsIcon from "~/assets/svgs/icons/guarantors-icon.svg";
import LoansIcon from "~/assets/svgs/icons/loans-icon.svg";
import DecisionModelsIcon from "~/assets/svgs/icons/decision-models-icon.svg";
import SavingsIcon from "~/assets/svgs/icons/savings-icon.svg";
import LoanRequestsIcon from "~/assets/svgs/icons/loan-requests-icon.svg";
import WhitelistIcons from "~/assets/svgs/icons/whitelist-icon.svg";
import KarmaIcons from "~/assets/svgs/icons/karma-icon.svg";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: NamedExoticComponent<MainLayoutProps> = memo(
  ({ children }) => {
    const customerNavItems: NavItem[] = [
      { name: "Users", path: "/customers/users", iconPath: UsersIcon },
      {
        name: "Guarantors",
        path: "/customers/guarantors",
        iconPath: GuarantorsIcon,
      },
      { name: "Loans", path: "/customers/loans", iconPath: LoansIcon },
      {
        name: "Decision Models",
        path: "/customers/decision-models",
        iconPath: DecisionModelsIcon,
      },
      { name: "Savings", path: "/customers/savings", iconPath: SavingsIcon },
      {
        name: "Loan Requests",
        path: "/customers/loans-requests",
        iconPath: LoanRequestsIcon,
      },
      {
        name: "Whitelist",
        path: "/customers/whitelist",
        iconPath: WhitelistIcons,
      },
      { name: "Karma", path: "/customers/karma", iconPath: KarmaIcons },
    ];

    return (
      <div className="mainLayoutContainer">
        <div className="mainLayoutHeader">
          <div className="logoContainer">
            <img src={LendSqrLogo} alt="lendsqr icon" className="logo" />
          </div>
          <div></div>
        </div>

        <div className="mainLayoutContent">
          <div className="navContainer">
            <Link to="/" className="navItemContainer">
              <img src={DashboardIcon} alt="dashboard icon" className="" />

              <p>Dashboard</p>
            </Link>

            <div className="navSectionTitleContainer">
              <h5>Customers</h5>
            </div>

            {customerNavItems.map((item) => (
              <Link key={item.name} to={item.path} className="navItemContainer">
                <img src={item.iconPath} alt="dashboard icon" className="" />

                <p>{item.name}</p>
              </Link>
            ))}

            <div className="navSectionTitleContainer">
              <h5>Businessess</h5>
            </div>

            <button type="button" className="navItemContainer">
              <img src={DashboardIcon} alt="dashboard icon" className="" />

              <p>Settings</p>
            </button>
            <button type="button" className="navItemContainer">
              <img src={DashboardIcon} alt="dashboard icon" className="" />

              <p>Logout</p>
            </button>
          </div>

          <div className="navContentContainer">{children}</div>
        </div>
      </div>
    );
  },
);

export default MainLayout;
