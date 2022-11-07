import React, { ReactNode, useState } from "react";
import Task from "../task";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import "./tasks.css";
import AddTaskModal from "../add-task-modal";
import { RootState } from "../../slices/reducers";
import { useSelector } from "react-redux";

const Tasks = () => {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const tasks = useSelector((state: RootState) => state.tasks.tasksList);
  const currentMonth = (): string => {
    return new Date().toLocaleString("en-US", { month: "long" });
  };

  const currentDay = (): string => {
    return new Date().toLocaleString("en-US", { day: "2-digit" });
  };

  const getTasks = (): ReactNode | null => {
    return tasks?.map((task: any, index: number) => {
      return <Task data={task} key={index} />;
    });
  };

  const getSubtitle = (): ReactNode | null => {
    return (
      <h2>
        {tasks.length} {tasks.length > 1 ? "Tasks" : "Task"}
      </h2>
    );
  };

  return (
    <>
      <AddTaskModal
        show={showAddTaskModal}
        setShow={(bool: boolean) => setShowAddTaskModal(bool)}
      />
      <div style={{ flex: 1.5, marginRight: "10px" }}>
        <div>
          <h1 className="current-date-title">
            {currentMonth()} {currentDay()}
          </h1>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {getSubtitle()}
          <ControlPointOutlinedIcon
            style={{ color: "blue", marginLeft: "10px", cursor: "pointer" }}
            onClick={() => {
              setShowAddTaskModal(!showAddTaskModal);
            }}
          />
        </div>
        {getTasks()}
      </div>
    </>
  );
};

export default Tasks;
