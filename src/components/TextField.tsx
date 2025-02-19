import React from "react";
import "./TextField.css";
import { RefObject } from "react";
import useOutsideRef from "../hooks/useOutsideRef";

interface TextFieldProps {
  id: string;
  inputType?:
    | "text"
    | "password"
    | "number"
    | "search"
    | "tel"
    | "date"
    | "time";
  label: string;
  value: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  onChange: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  inputRef?: RefObject<HTMLInputElement>;
}

const TextField: React.FC<TextFieldProps> = ({
  id,
  inputType = "text",
  label,
  value,
  placeholder,
  required,
  disabled,
  error,
  onChange,
  onBlur,
  onFocus,
  inputRef,
}) => {
  const ownInputRef = useOutsideRef(inputRef);

  return (
    <div className="custom-text-field-wrapper">
      <label htmlFor={id} className="custom-text-field-label">
        <span className={`${error ? "has-error" : ""}`}>{label}</span>
        {!required && (
          <span className="custom-text-field-optional-label" aria-hidden="true">
            Optional
          </span>
        )}
      </label>
      <input
        className={`custom-text-field 
                     ${error ? "has-error" : ""} 
                     ${disabled ? "disabled" : ""}`}
        type={inputType}
        id={id}
        name={id}
        value={value}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value, e)
        }
        onBlur={onBlur}
        onFocus={onFocus}
        ref={ownInputRef}
      />
      {error && <div className="custom-text-field-error-message">{error}</div>}
    </div>
  );
};

export default TextField;

// This is just a really basic implementation.
// In real implementation there might be more props to work with accessibility,
// internatlisation, styling, formatting etc.
