import { useRouter } from "@tanstack/react-router";
import { memo, useEffect, useRef, useState } from "react";
import filterIcon from "~/assets/svgs/icons/filter-icon.svg";
import moreVerticalIcon from "~/assets/svgs/icons/more-vertical-icon.svg";
import SelectComponent from "./SelectComponent";
import TextInputComponent from "./TextInputComponent";
import DateInputComponent from "./DateInputComponent";

interface TableHeaderDataProps {
  key: string;
  title: string;
}

interface TableBodyDataProps {
  [k: string]: string;
}

interface TableComponentProps {
  columns: TableHeaderDataProps[];
  rows: TableBodyDataProps[];
}

const TableComponent = memo(({ columns, rows }: TableComponentProps) => {
  const router = useRouter();
  const [openedFilterIndex, setOpenedFilterIndex] = useState<number | null>(
    null,
  );
  const tableColumnRefs = useRef<(HTMLTableHeaderCellElement | null)[]>([]);
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);
  const filterButtons = useRef<(HTMLButtonElement | null)[]>([]);
  const [filters, setFilters] = useState({
    organization: "",
    username: "",
    email: "",
    phoneNumber: "",
    status: "",
  });

  const handleFilterButtonClick = (index: number) => {
    setOpenedFilterIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleRowClick = (userId: string) => {
    router.navigate({
      to: "/customers/users/$userId/details",
      params: { userId: String(userId) },
    });
  };

  const handleFilterMenuBlur = (event: MouseEvent) => {
    if (!event.target) return;
    if (
      !dropdownRefs.current.some((ref) =>
        ref?.contains(event.target as Node),
      ) &&
      !filterButtons.current.some((btn) => btn === event.target)
    ) {
      setOpenedFilterIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleFilterMenuBlur);
    return () =>
      document.removeEventListener("mousedown", handleFilterMenuBlur);
  }, []);

  return (
    <div className="tableContainer">
      <table>
        <thead>
          <tr className="tableHeaderRow">
            {columns.map(({ key, title }, index) => (
              <th
                key={key}
                ref={(el) => {
                  tableColumnRefs.current[index] = el;
                }}
              >
                <div className="tableColumnContainer">
                  <p className="tableColumnTitle"> {title}</p>
                  {index < columns.length - 1 && (
                    <button
                      type="button"
                      ref={(el) => {
                        filterButtons.current[index] = el;
                      }}
                      onClick={() => handleFilterButtonClick(index)}
                    >
                      <img
                        src={filterIcon}
                        alt="filter icon"
                        className="filterIcon"
                      />
                    </button>
                  )}
                </div>

                {index < columns.length - 1 && openedFilterIndex === index && (
                  <div
                    ref={(el) => {
                      dropdownRefs.current[index] = el;
                    }}
                    className="filtersContainer"
                    // onClick={(e) => e.stopPropagation()} // Prevents click from propagating
                  >
                    <SelectComponent
                      name="Organization"
                      value={filters.organization}
                      options={[{ value: "1", label: "Organization 1" }]}
                      onChange={(e) =>
                        setFilters({
                          ...filters,
                          organization: e.target.value,
                        })
                      }
                      placeholder="Select"
                    />

                    <TextInputComponent
                      name="Username"
                      value={filters.username}
                      onChange={(e) =>
                        setFilters({ ...filters, username: e.target.value })
                      }
                      placeholder="Username"
                    />

                    <TextInputComponent
                      name="Email"
                      value={filters.email}
                      onChange={(e) =>
                        setFilters({ ...filters, email: e.target.value })
                      }
                      placeholder="Email"
                    />

                    <DateInputComponent
                      name="Date"
                      value={filters.phoneNumber}
                      onChange={(e) =>
                        setFilters({
                          ...filters,
                          phoneNumber: e.target.value,
                        })
                      }
                    />

                    <TextInputComponent
                      name="Phone Number"
                      value={filters.phoneNumber}
                      onChange={(e) =>
                        setFilters({
                          ...filters,
                          phoneNumber: e.target.value,
                        })
                      }
                      placeholder="Phone Number"
                    />

                    <SelectComponent
                      name="Status"
                      value={filters.status}
                      options={[{ value: "1", label: "Organization 1" }]}
                      onChange={(e) =>
                        setFilters({ ...filters, status: e.target.value })
                      }
                      placeholder="Select"
                    />
                  </div>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((data, index) => (
            <tr
              key={index}
              className="tableBodyRow"
              onClick={() => handleRowClick(data.id)}
            >
              {columns.map(({ key }) => (
                <td key={key} className="tableRowData">
                  {data[key]}
                </td>
              ))}
              <td className="tableRowData">
                <button>
                  <img src={moreVerticalIcon} alt="more info icon" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

export default TableComponent;
