import React from "react";

const Item = ({ icon, title, active }) => {
  return (
    <button className={"btn-side " + (active === true ? "active" : "")}>
      {icon}
      {title}
    </button>
  );
};

export default Item;
