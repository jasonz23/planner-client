import React from "react";
import {
  AppBar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Toolbar,
  Divider,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from "@mui/icons-material/ListAlt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SettingsIcon from "@mui/icons-material/Settings";
import "./nav-bar.css";

const NavBar = () => {
  const content = {
    link1: "Home",
    link2: "Tasks",
    link3: "Calendar",
  };

  return (
    <div>
      <AppBar position="fixed" style={{ zIndex: "10000px" }}>
        <Toolbar style={{ display: "flex", justifyContent: "center" }}>
          <h1>Personal Planner</h1>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent">
        <Toolbar />
        <div>
          <List>
            <ListItem button key={content["link1"]}>
              <ListItemIcon className="icon-box">
                <HomeIcon style={{ fontSize: "35px", padding: "5px" }} />
              </ListItemIcon>
            </ListItem>
            <ListItem button key={content["link2"]}>
              <ListItemIcon className="icon-box">
                <ListAltIcon style={{ fontSize: "35px", padding: "5px" }} />
              </ListItemIcon>
            </ListItem>
            <ListItem button key={content["link3"]}>
              <ListItemIcon className="icon-box">
                <CalendarMonthIcon
                  style={{ fontSize: "35px", padding: "5px" }}
                />
              </ListItemIcon>
            </ListItem>
            <Divider />
            <ListItem button key={content["link3"]}>
              <ListItemIcon className="icon-box">
                <SettingsIcon style={{ fontSize: "35px", padding: "5px" }} />
              </ListItemIcon>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default NavBar;
