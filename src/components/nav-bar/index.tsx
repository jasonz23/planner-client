import React from "react";
import {
  AppBar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Toolbar,
  Divider,
  Button,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from "@mui/icons-material/ListAlt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import "./nav-bar.css";

const NavBar = () => {
  const CONTENTS = {
    link1: "Home",
    link2: "Tasks",
    link3: "Calendar",
    link4: "Settings",
    link5: "Account",
  };

  const ROUTES = {
    home: "/",
    settings: "/settings",
  };

  return (
    <div>
      <AppBar position="fixed" style={{ zIndex: "10000px", height: "73px" }}>
        <Toolbar
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {window.innerWidth <= 900 && (
            <div style={{ alignSelf: "flex-start" }}>
              <Button>
                <MenuIcon style={{ color: "white" }} />
              </Button>
            </div>
          )}
          <h1 style={window.innerWidth <= 900 ? { marginTop: "-22px" } : {}}>
            Personal Planner
          </h1>
          {window.innerWidth > 900 && (
            <div style={{ alignSelf: "flex-end", marginTop: "-60px" }}>
              <Button
                variant="outlined"
                style={{
                  color: "#ffff",
                  border: "1px solid white",
                  marginRight: "20px",
                }}
              >
                Log In
              </Button>
              <Button
                variant="outlined"
                style={{
                  color: "#ffff",
                  border: "1px solid white",
                }}
              >
                Sign Up
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>

      {window.innerWidth > 900 && (
        <Drawer variant="permanent">
          <Toolbar />
          <div>
            <List
              style={{
                height: "90vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <ListItem button key={CONTENTS["link1"]}>
                <ListItemIcon className="icon-box">
                  <HomeIcon style={{ fontSize: "35px", padding: "5px" }} />
                </ListItemIcon>
              </ListItem>
              <ListItem button key={CONTENTS["link2"]}>
                <ListItemIcon className="icon-box">
                  <ListAltIcon style={{ fontSize: "35px", padding: "5px" }} />
                </ListItemIcon>
              </ListItem>
              <ListItem button key={CONTENTS["link3"]}>
                <ListItemIcon className="icon-box">
                  <CalendarMonthIcon
                    style={{ fontSize: "35px", padding: "5px" }}
                  />
                </ListItemIcon>
              </ListItem>
              <Divider />
              <ListItem button key={CONTENTS["link4"]}>
                <ListItemIcon className="icon-box">
                  <SettingsIcon style={{ fontSize: "35px", padding: "5px" }} />
                </ListItemIcon>
              </ListItem>
              <ListItem
                button
                key={CONTENTS["link5"]}
                style={{ marginTop: "auto" }}
              >
                <ListItemIcon className="icon-box">
                  <AccountCircleIcon
                    style={{ fontSize: "35px", padding: "5px" }}
                  />
                </ListItemIcon>
              </ListItem>
            </List>
          </div>
        </Drawer>
      )}
    </div>
  );
};

export default NavBar;
