import { memo, NamedExoticComponent } from "react";
import { numberWithCommas } from "~/utils/utils";

export interface UserAnalyticsCardProps {
  statTitle: string;
  iconPath: string;
  statValue: string | number;
}

const UserAnalyticsCard: NamedExoticComponent<UserAnalyticsCardProps> = memo(
  ({ statTitle, iconPath, statValue }) => {
    return (
      <div className="userAnalyticsCardContainer">
        <div className="iconContainer">
          <img src={iconPath} alt="user analytics card icon" className="icon" />
        </div>

        <p className="analyticsCardTitle">{statTitle}</p>

        <p className="analyticsCardValue">{numberWithCommas(statValue)}</p>
      </div>
    );
  },
);

export default UserAnalyticsCard;
