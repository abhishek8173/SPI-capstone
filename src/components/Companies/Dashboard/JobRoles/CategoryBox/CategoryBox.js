import React from "react";

const CategoryBox = (props) => {
  return (
    <div className="categoryBox">
      <div onClick={props.click} className="category">
        {props.name}
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default CategoryBox;
