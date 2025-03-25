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

import OrganizationIcon from "~/assets/svgs/icons/organization-icon.svg";
import SavingsProductIcons from "~/assets/svgs/icons/savings-product-icon.svg";
import FeeAndChargesIcons from "~/assets/svgs/icons/fees-and-charges-icon.svg";
import TransactionIcons from "~/assets/svgs/icons/transaction-icon.svg";
import ServiceIcons from "~/assets/svgs/icons/service-icon.svg";
import ServiceAccountIcons from "~/assets/svgs/icons/service-account-icon.svg";
import SettlementIcons from "~/assets/svgs/icons/settlement-icon.svg";
import ReportIcons from "~/assets/svgs/icons/report-icon.svg";

import PreferencesIcons from "~/assets/svgs/icons/preferences-icon.svg";
import FeesAndPricingIcons from "~/assets/svgs/icons/fees-and-pricing.svg";
import AuditLogsIcons from "~/assets/svgs/icons/audit-logs.svg";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: NamedExoticComponent<MainLayoutProps> = memo(
  ({ children }) => {
    const customersNavItems: NavItem[] = [
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

    const businessesNavItems: NavItem[] = [
      {
        name: "Organizations",
        path: "/businesses/organizations",
        iconPath: OrganizationIcon,
      },
      {
        name: "Loan Products",
        path: "/businesses/loan-products",
        iconPath: LoanRequestsIcon,
      },
      {
        name: "Savings Products",
        path: "/businesses/service-products",
        iconPath: SavingsProductIcons,
      },
      {
        name: "Fees and Charges",
        path: "/businesses/fees-and-charges",
        iconPath: FeeAndChargesIcons,
      },
      {
        name: "Transactions",
        path: "/businesses/transactions",
        iconPath: TransactionIcons,
      },
      {
        name: "Services",
        path: "/businesses/services",
        iconPath: ServiceIcons,
      },
      {
        name: "Settlements",
        path: "/businesses/settlements",
        iconPath: SettlementIcons,
      },
      {
        name: "Service Account",
        path: "/businesses/service-account",
        iconPath: ServiceAccountIcons,
      },
      {
        name: "Reports",
        path: "/businesses/resports",
        iconPath: ReportIcons,
      },
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

            {customersNavItems.map((item) => (
              <Link key={item.name} to={item.path} className="navItemContainer">
                <img src={item.iconPath} alt="dashboard icon" className="" />

                <p>{item.name}</p>
              </Link>
            ))}

            <div className="navSectionTitleContainer">
              <h5>Businessess</h5>
            </div>

            {businessesNavItems.map((item) => (
              <Link key={item.name} to={item.path} className="navItemContainer">
                <img src={item.iconPath} alt="dashboard icon" className="" />

                <p>{item.name}</p>
              </Link>
            ))}

            <div className="navSectionTitleContainer">
              <h5>Settings</h5>
            </div>

            <Link to="/settings/preferences" className="navItemContainer">
              <img src={PreferencesIcons} alt="dashboard icon" className="" />

              <p>Preferences</p>
            </Link>

            <Link to="/settings/fees-and-pricing" className="navItemContainer">
              <img
                src={FeesAndPricingIcons}
                alt="dashboard icon"
                className=""
              />

              <p>Fees and Pricing</p>
            </Link>

            <Link to="/settings/audit-logs" className="navItemContainer">
              <img src={AuditLogsIcons} alt="dashboard icon" className="" />

              <p>Audit Logs</p>
            </Link>
          </div>

          <div className="navContentContainer">{children}</div>
        </div>
      </div>
    );
  },
);

export default MainLayout;
