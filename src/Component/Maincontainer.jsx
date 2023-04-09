import React, { useState, useContext } from "react";
import "./header.css";
import { Authentication } from "./DataProvider";

const Maincontainer = () => {
  const [state, setState] = useState("");

  const { isCompleted, updateTodo, input, addTodo, deletebutton } =
    useContext(Authentication);

  const handleclick = () => {
    input(state);

    setState("");
    console.log(input);
  };
  return (
    <div className="head_container">
      <div className="head2_container">
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <button onSubmit={handleclick}>ADD</button>
      </div>
      <div className="head3_container">
        <div className="head4_container">
          {input.map((item, i) => {
            return <div key={item.id}>{item.title}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Maincontainer;
