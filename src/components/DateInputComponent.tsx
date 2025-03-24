import { memo, NamedExoticComponent, useRef } from "react";
import chevronDownIcon from "~/assets/svgs/icons/calender-icon.svg";

interface DateInputProps {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const DateInputComponent: NamedExoticComponent<DateInputProps> = memo(
  ({ name, value, onChange }) => {
    const dateInputRef = useRef<HTMLInputElement>(null);

    const handleDateButtonClick = () => {
      if (dateInputRef.current) {
        dateInputRef.current.showPicker();
      }
    };

    const handleManualChange = (newDate: string) => {
      if (dateInputRef.current) {
        // Create and dispatch a synthetic event
        const syntheticEvent = {
          target: {
            name,
            value: newDate,
          },
        } as React.ChangeEvent<HTMLInputElement>;

        onChange(syntheticEvent);
      }
    };

    return (
      <div className="inputContainer">
        <label htmlFor={name} className="inputLabel">
          {name}
        </label>

        <div className="inputFieldContainer">
          <input
            ref={dateInputRef}
            name={name}
            type="date"
            value={value}
            onChange={(e) => handleManualChange(e.target.value)}
            className="inputField"
          />

          <button
            type="button"
            className="rightButton"
            onClick={handleDateButtonClick}
          >
            <img src={chevronDownIcon} alt="select input icon" />
          </button>
        </div>
      </div>
    );
  },
);

export default DateInputComponent;
