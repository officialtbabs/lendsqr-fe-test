import ArrowBackIcon from "~/assets/svgs/icons/arrow-back-icon.svg";
import UserIcon from "~/assets/svgs/icons/user-icon.svg";
import StarFilledIcon from "~/assets/svgs/icons/star-filled-icon.svg";
import StarOutlinedIcon from "~/assets/svgs/icons/star-outlined-icon.svg";
import { memo, NamedExoticComponent, ReactNode } from "react";
import { Link, useParams } from "@tanstack/react-router";

interface UserDetailsLayoutProps {
  children: ReactNode;
}

const UserDetailsLayout: NamedExoticComponent<UserDetailsLayoutProps> = memo(
  ({ children }) => {
    const { userId } = useParams({ from: "/customers/users/$userId" });

    return (
      <div className="userDetailsLayoutContainer">
        <div className="userDetailsLayoutHeader">
          <Link to="/customers/users" className="backButton">
            <img src={ArrowBackIcon} alt="back icon" />
            <p className="backButtonText">Back to Users</p>
          </Link>

          <div className="headerContainer">
            <h1 className="headerTitle">User Details</h1>

            <div className="actionButtonsContainer">
              <button className="blacklistUserButton">Blacklist User</button>

              <button className="activateUserButton">Activate User</button>
            </div>
          </div>
        </div>

        <div className="userDetailsLayoutContent">
          <div className="userDetailsBasicInfoHeaderContainer">
            <div className="basicInfoCardContainer">
              <div className="profileDataContainer">
                <div className="profileImageContainer">
                  <img src={UserIcon} alt="user icon" />
                </div>

                <div className="profileData">
                  <p className="profileDataTitle">Grace Effiom</p>
                  <p className="profileDataValue">LSQFf587g90</p>
                </div>
              </div>

              <div className="profileRatingContainer">
                <div>
                  <p className="profileRatingHeader">User’s Tier</p>

                  <div className="profileRatingValue">
                    {Array.from({ length: 3 }).map((_, index) => (
                      <img
                        src={index <= 1 ? StarFilledIcon : StarOutlinedIcon}
                        alt=""
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="LoanDetailsContainer">
                <div>
                  <p className="loanAmount">₦200,000.00</p>

                  <p className="loanRecipentAccount">
                    9912345678/Providus Bank
                  </p>
                </div>
              </div>
            </div>

            <div className="profileNavContainer">
              <Link
                to={`/customers/users/$userId/details`}
                params={{ userId: userId ?? "" }}
                className="profileNavItem"
              >
                General Details
              </Link>

              <Link
                to={`/customers/users/$userId/documents`}
                params={{ userId: userId ?? "" }}
                className="profileNavItem"
              >
                Documents
              </Link>

              <Link
                to={`/customers/users/$userId/bank-details`}
                params={{ userId: userId ?? "" }}
                className="profileNavItem"
              >
                Bank Details
              </Link>

              <Link
                to={`/customers/users/$userId/loans`}
                params={{ userId: userId ?? "" }}
                className="profileNavItem"
              >
                Loans
              </Link>

              <Link
                to={`/customers/users/$userId/savings`}
                params={{ userId: userId ?? "" }}
                className="profileNavItem"
              >
                Savings
              </Link>

              <Link
                to={`/customers/users/$userId/app-and-system`}
                params={{ userId: userId ?? "" }}
                className="profileNavItem"
              >
                App and System
              </Link>
            </div>
          </div>

          <div className="userDetailsBasicInfoContentContainer">{children}</div>
        </div>
      </div>
    );
  },
);

export default UserDetailsLayout;
