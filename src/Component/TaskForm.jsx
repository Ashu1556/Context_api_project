import React, { useContext, useState } from "react";
import { useTasks } from "./DataProvider";
import "./header.css";

const TaskForm = () => {
  const [task, setTask] = useState("");
  const { addTasks } = useTasks();
  // const {addTasks} = useContext(TaskContext);

  const submit = (e) => {
    e.preventDefault();
    addTasks(task);
    setTask("");
  };

  return (
    <div className="head_container">
      <div className="head2_container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn" onClick={submit}>
          Add
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
