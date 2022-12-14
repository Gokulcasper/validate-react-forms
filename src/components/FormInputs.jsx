import React, { useState } from "react";
import "./FormInputs.css";

const FormInputs = (props) => {
  const [focused, setFocused] = useState(false);
  console.log("props", props);
  const { label, errorMessage, onChange, id, ...inputprops } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputprops}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputprops.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInputs;
