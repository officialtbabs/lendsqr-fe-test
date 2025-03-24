import { memo, NamedExoticComponent } from "react";

interface TextInputProps {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const TextInputComponent: NamedExoticComponent<TextInputProps> = memo(
  ({ name, value, onChange, placeholder = "" }) => {
    return (
      <div className="inputContainer">
        <label htmlFor={name} className="inputLabel">
          {name}
        </label>
        <div className="inputFieldContainer">
          <input
            name={name}
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="inputField"
          />
        </div>
      </div>
    );
  },
);

export default TextInputComponent;
