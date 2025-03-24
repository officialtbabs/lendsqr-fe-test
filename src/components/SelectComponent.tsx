import { memo, useState, useRef, useEffect } from "react";
import chevronDownIcon from "~/assets/svgs/icons/chevron-down-icon.svg";

interface CustomSelectProps {
  name: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const SelectComponent = memo(
  ({
    name,
    options,
    value,
    onChange,
    placeholder = "Select an option",
  }: CustomSelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectContainerRef = useRef<HTMLDivElement>(null);
    const selectInputRef = useRef<HTMLInputElement>(null);

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

    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          selectContainerRef.current &&
          !selectContainerRef.current.contains(event.target as Node)
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
      <div className="inputContainer" ref={selectContainerRef}>
        <label htmlFor={name} className="inputLabel">
          {name}
        </label>

        <div className="inputFieldContainer" onClick={toggleDropdown}>
          <input
            ref={selectInputRef}
            type="text"
            name={name}
            placeholder={placeholder}
            value={options.find((opt) => opt.value === value)?.label || ""}
            readOnly
            className="inputField"
          />

          <button
            type="button"
            className="rightButton"
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
            {options.map((option) => (
              <div
                key={option.value}
                className="dropdownItem"
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  },
);

export default SelectComponent;
