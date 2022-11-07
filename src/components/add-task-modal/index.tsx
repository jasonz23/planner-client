import { Button, Dialog, Grid, TextField } from "@mui/material";
import { addSingleTask } from "../../slices/tasks";
import { useDispatch } from "react-redux";
import { useState } from "react";

interface PropsType {
  show: boolean;
  setShow: (bool: boolean) => void;
}

const AddTaskModal = (props: PropsType) => {
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const getTaskData = () => {
    return {
      taskName: taskName,
      startTime: startTime,
      endTime: endTime,
      taskDescription: taskDescription,
    };
  };

  return (
    <Dialog open={props.show}>
      <div style={{ padding: "20px" }}>
        <h1>Add Task</h1>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12}>
            <TextField
              variant="outlined"
              label="Task Name"
              value={taskName}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(
                e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
              ) => {
                setTaskName(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={6} sm={6}>
            <TextField
              variant="outlined"
              label="Start Time"
              fullWidth
              type="time"
              value={startTime}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(
                e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
              ) => {
                setStartTime(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              variant="outlined"
              label="End Time"
              fullWidth
              value={endTime}
              type="time"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(
                e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
              ) => {
                setEndTime(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField
              variant="outlined"
              label="Task Description"
              multiline
              fullWidth
              value={taskDescription}
              rows={3}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(
                e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
              ) => {
                setTaskDescription(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <Button
              variant="contained"
              style={{ marginRight: "20px" }}
              fullWidth
              onClick={() => {
                dispatch(addSingleTask(getTaskData()));
                props.setShow(false);
              }}
            >
              Save
            </Button>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => {
                props.setShow(false);
              }}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </div>
    </Dialog>
  );
};

export default AddTaskModal;
