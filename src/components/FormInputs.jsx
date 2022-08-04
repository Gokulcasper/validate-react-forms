import React from "react";
import "./FormInputs.css";

const FormInputs = (props) => {
  const { label, onChange, id, ...inputprops } = props;
  //   console.log(props);
  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...inputprops} onChange={onChange} />
    </div>
  );
};

export default FormInputs;
