import React from "react";
import "./TextFieldCustom.css";

const TextFieldCustom = (props) => {
  //   const textFieldColor =
  //     document.documentElement.style.getPropertyValue("--text-faded");
  return (
    <div
      tabIndex="-1"
      className="TextFieldCustom"
      style={{ width: props.width, minWidth: props.minWidth }}
    >
      <input
        type={props.type}
        id={props.id}
        name={props.id}
        required=""
        min={props.min}
        max={props.max}
      />
      <label style={{ backgroundColor: props.bgColor }}>{props.label}</label>
    </div>
  );
};

export default TextFieldCustom;
