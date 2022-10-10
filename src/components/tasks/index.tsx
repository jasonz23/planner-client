import React, { ReactNode } from "react";
import { JsxElement } from "typescript";
import { tasks } from "../../slices/tasks";
import "./tasks.css";

const Tasks = () => {
  const currentMonth = (): string => {
    return new Date().toLocaleString("en-US", { month: "long" });
  };

  const currentDay = (): string => {
    return new Date().toLocaleString("en-US", { day: "2-digit" });
  };

  const getTasks = (): ReactNode | null => {
    return <h1>COW</h1>;
  };

  const getSubtitle = (): ReactNode | null => {
    return <h2>Tasks etc</h2>;
  };

  return (
    <div>
      <div>
        <h1 className="current-date-title">
          {currentMonth()} {currentDay()}
        </h1>
      </div>
      <div>{getSubtitle()}</div>
      {getTasks()}
    </div>
  );
};

export default Tasks;
