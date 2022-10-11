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

const Task = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Accordion elevation={1} expanded={expanded} style={{ cursor: "" }}>
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
              <p style={{ marginBottom: "0" }}>2:30pm</p>
              <p style={{ marginTop: "0" }}>2hour</p>
            </div>
          </div>

          <div style={{ fontSize: "20px" }}>Do Homework</div>
          <div style={{ marginLeft: "auto", marginRight: "20px" }}>
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
        <Grid>
          <TextField variant="outlined" label="Task Name" />
          <TextField variant="outlined" label="Start Time" />
          <TextField variant="outlined" label="End Time" />
          <TextField variant="outlined" label="Task Description" />
          <Button variant="contained">Save</Button>
          <Button variant="contained">Clear</Button>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default Task;
