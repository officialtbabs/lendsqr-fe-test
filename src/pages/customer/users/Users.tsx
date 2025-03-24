import UsersOutlinedIcon from "~/assets/svgs/icons/users-outlined-icon-with-bg.svg";
import ActiveUsersOutlinedIcon from "~/assets/svgs/icons/active-users-outlined-icon-with-bg.svg";
import UsersWithLoansOutlinedIcon from "~/assets/svgs/icons/users-with-loan-outined-icon-with-bg.svg";
import UsersWithSavingOutlinedIcon from "~/assets/svgs/icons/users-with-saving-outlined-icon-with-bg.svg";
import UserAnalyticsCard, {
  UserAnalyticsCardProps,
} from "~/components/UserAnalyticsCard";
import TableComponent from "~/components/TableComponent";
import { useEffect, useMemo, useState } from "react";
import { getFormatedDateTime } from "~/utils/utils";
import PaginationComponent from "~/components/PaginationComponent";
import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchUsersQueryOptions } from "~/apis/users";

const Users = () => {
  const userAnalyticsCardContent: UserAnalyticsCardProps[] = [
    {
      statTitle: "Users",
      iconPath: UsersOutlinedIcon,
      statValue: 2453,
    },

    {
      statTitle: "Active Users",
      iconPath: ActiveUsersOutlinedIcon,
      statValue: 2453,
    },

    {
      statTitle: "Users with Loans",
      iconPath: UsersWithLoansOutlinedIcon,
      statValue: 12453,
    },

    {
      statTitle: "Users with Savings",
      iconPath: UsersWithSavingOutlinedIcon,
      statValue: 102453,
    },
  ];

  const columns = [
    { key: "organization", title: "Organization" },
    { key: "username", title: "Username" },
    { key: "email", title: "Email" },
    { key: "phoneNumber", title: "Phone Number" },
    { key: "dateJoined", title: "Date Joined" },
    { key: "status", title: "Status" },
    { key: "actions", title: "" },
  ];

  const limitOptions = [10, 20, 30];
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLimit, setCurrentLimit] = useState(limitOptions[0]);

  const usersQuery = useSuspenseQuery(
    fetchUsersQueryOptions({ page: currentPage, limit: currentLimit }),
  );

  const totalPages = useMemo(
    () => Math.ceil(usersQuery.data.total / currentLimit),
    [usersQuery],
  );

  const mappedUsersData = useMemo(
    () =>
      usersQuery.data.users.map((user) => ({
        id: user.id,
        organization: "Lendsqr",
        username: `${user.firstName} ${user.lastName}`,
        email: user.email,
        phoneNumber: user.phone,
        dateJoined: getFormatedDateTime(user.birthDate),
        status: "Active",
        actions: "",
      })),
    [usersQuery],
  );

  const handleLimitChange = (newLimit: number) => {
    if (newLimit) {
      setCurrentLimit(newLimit);
    }
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      //   mutate();
      console.log("hello");
    }
  };

  useEffect(() => {
    console.log("Users", usersQuery.data.users);
  }, [usersQuery]);

  return (
    <div className="userPageContainer">
      <div className="userPageHeader">
        <h1 className="headerTitle">Users</h1>
      </div>

      <div className="userPageContent">
        <div className="userAnalyticsContainer">
          {userAnalyticsCardContent.map(
            ({ statTitle, iconPath, statValue }, index) => (
              <UserAnalyticsCard
                key={index}
                statTitle={statTitle}
                iconPath={iconPath}
                statValue={statValue}
              />
            ),
          )}
        </div>

        <TableComponent columns={columns} rows={mappedUsersData} />

        <PaginationComponent
          page={currentPage}
          limit={currentLimit}
          totalItems={usersQuery.data.total}
          totalPages={totalPages}
          limitOptions={limitOptions}
          handleLimitChange={handleLimitChange}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Users;
