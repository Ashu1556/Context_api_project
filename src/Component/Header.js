import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header_container">
      <span style={{ fontSize: "50px" }}>Todo App</span>
      <span style={{ fontSize: "20px", color: "gray" }}>
        Item will presist in the Browser Local Storage
      </span>
    </div>
  );
};

export default Header;
