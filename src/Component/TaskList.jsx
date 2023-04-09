import React from "react";
import { useTasks } from "./DataProvider";
import Task from "./Task";
import "./header.css";

const TaskList = () => {
  const { tasks } = useTasks();

  return (
    <div className="table_container">
      <table>
        <tbody>
          {tasks.map((task, i) => (
            <Task {...task} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
