import {
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import "./task.css";

interface PropsState {
  data: any;
  key: number;
}

const Task = (props: PropsState) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <Accordion expanded={expanded} style={{ cursor: "" }}>
        <AccordionSummary>
          <div className="task-root">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  marginRight: "10px",
                  marginLeft: "10px",
                  color: "#1976d2",
                }}
              >
                <AssignmentLateIcon style={{ fontSize: "30px" }} />
              </div>
              <div style={{ marginRight: "20px" }}>
                <p style={{ marginBottom: "0" }}>{props.data.startTime}</p>
                <p style={{ marginTop: "0" }}>{props.data.endTime}</p>
              </div>
            </div>

            <div style={{ fontSize: "20px" }}>{props.data.taskName}</div>
            <div style={{ marginLeft: "auto", marginRight: "10px" }}>
              <Button
                onClick={() => {
                  setExpanded(!expanded);
                }}
              >
                <EditIcon style={{ fontSize: "30px" }} />
              </Button>
              <Button>
                <DeleteForeverIcon style={{ fontSize: "30px" }} />
              </Button>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                label="Task Name"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue={props.data.taskName}
              />
            </Grid>

            <Grid item xs={6} sm={6}>
              <TextField
                variant="outlined"
                label="Start Time"
                fullWidth
                type="time"
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue={props.data.startTime}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField
                variant="outlined"
                label="End Time"
                fullWidth
                type="time"
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue={props.data.endTime}
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                label="Task Description"
                multiline
                fullWidth
                rows={3}
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue={props.data.taskDescription}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <Button
                variant="contained"
                style={{ marginRight: "20px" }}
                fullWidth
              >
                Save
              </Button>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => {
                  setExpanded(false);
                }}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Task;
