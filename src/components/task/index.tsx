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
              <p style={{ marginBottom: "0" }}>2:30pm</p>
              <p style={{ marginTop: "0" }}>2hour</p>
            </div>
          </div>

          <div style={{ fontSize: "20px" }}>Do Homework</div>
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
            <TextField variant="outlined" label="Task Name" fullWidth />
          </Grid>

          <Grid item xs={6} sm={6}>
            <TextField variant="outlined" label="Start Time" fullWidth />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField variant="outlined" label="End Time" fullWidth />
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField
              variant="outlined"
              label="Task Description"
              multiline
              fullWidth
              rows={3}
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <Button
              variant="contained"
              onClick={() => {
                setExpanded(false);
              }}
              style={{ marginRight: "20px" }}
              fullWidth
            >
              Save
            </Button>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Button variant="contained" fullWidth>
              Clear
            </Button>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default Task;
