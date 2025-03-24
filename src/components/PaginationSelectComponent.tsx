import { memo, useState, useRef, useEffect } from "react";
import chevronDownIcon from "~/assets/svgs/icons/chevron-down-icon.svg";

interface CustomSelectProps {
  name: string;
  options: number[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const PaginationSelectComponent = memo(
  ({
    name,
    options,
    value,
    onChange,
    placeholder = "Select an option",
  }: CustomSelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const paginationSelectContainerRef = useRef<HTMLDivElement>(null);
    const paginationSelectInputRef = useRef<HTMLInputElement>(null);
    const toggleDropdown = () => {
      setIsOpen((prev) => !prev);
    };

    const handleSelect = (selectedValue: string) => {
      const syntheticEvent = {
        target: {
          name,
          value: selectedValue,
        },
      } as React.ChangeEvent<HTMLInputElement>;

      onChange(syntheticEvent);
      setIsOpen(false);
    };

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          paginationSelectContainerRef.current &&
          !paginationSelectContainerRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    return (
      <div
        className="paginationLimitSelectContainer"
        ref={paginationSelectContainerRef}
      >
        <div className="paginationLimitSelectInputFieldComtainer" onClick={toggleDropdown}>
          <input
            ref={paginationSelectInputRef}
            type="text"
            name={name}
            placeholder={placeholder}
            value={options.find((opt) => String(opt) === value) || ""}
            readOnly
            className="paginationLimitSelectInput"
          />

          <button
            type="button"
            className="paginationLimitSelectButton"
            onClick={toggleDropdown}
          >
            <img
              src={chevronDownIcon}
              alt="select input icon"
              onClick={toggleDropdown}
            />
          </button>
        </div>

        {isOpen && (
          <div className="dropdownList">
            {options.map((option, index) => (
              <div
                key={index}
                className="dropdownItem"
                onClick={() => handleSelect(String(option))}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  },
);

export default PaginationSelectComponent;
