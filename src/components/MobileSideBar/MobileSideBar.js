import {
  Divider,
  IconButton,
  List,
  ListItem,
  SwipeableDrawer,
  Toolbar,
  Stack,
  Avatar,
  Box,
} from "@mui/material";
import logo from "../../assets/logo_small_2.png";
import { data } from "../../Data";
import { NavLink, Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import EmailIcon from "@mui/icons-material/Email";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import ViewListRoundedIcon from "@mui/icons-material/ViewListRounded";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React from "react";
import { useState } from "react";
import "./MobileSideBar.css";
export default function MobileSideBar() {
  const [open, setopen] = useState(false);
  return (
    <>
      <Toolbar sx={{ display: ["flex", "flex", "none"], ml: "auto" }}>
        <IconButton onClick={() => setopen(true)}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={() => {
          setopen(true);
        }}
        onClose={() => {
          setopen(false);
        }}
      >
        <div>
          <IconButton onClick={() => setopen(false)}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <Box
          component="div"
          sx={{
            display: ["flex", "flex", "none"],
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            height: "100vh",
            width: 280,
            overflow: "auto",
          }}
          className="sidebar_container"
        >
          <img src={logo} alt="logo" className="sidebar_logo" />
          <div className="sidebar_user">
            <Avatar
              src={data.image}
              alt="avatar"
              sx={{ width: 100, height: 100, mt: 2, mb: 2 }}
            />
            <span className="avatar_badge">مدير</span>
          </div>
          <div>
            <p className="sidebar_user_info">{data.user}</p>
          </div>

          <Stack direction="row" spacing={1} sx={{ mt: 2, mb: 0 }}>
            <Link to="/messages">
              <IconButton color="secondary" aria-label="Messages">
                <EmailIcon />
              </IconButton>
            </Link>
            <Link to="/configuration">
              <IconButton color="primary" aria-label="Settings">
                <SettingsRoundedIcon />
              </IconButton>
            </Link>

            <IconButton color="primary" aria-label="Logout">
              <LogoutIcon />
            </IconButton>
          </Stack>

          <List sx={{ width: "100%" }}>
            <ListItem
              sx={{ display: "flex", justifyContent: "flex-end" }}
              secondaryAction={
                <IconButton aria-label="الرئيسية">
                  <HomeRoundedIcon />
                </IconButton>
              }
            >
              <NavLink
                className={(nav) => (nav.isActive ? "active" : "link")}
                to="/"
              >
                الرئيسية
              </NavLink>
            </ListItem>
            <ListItem
              sx={{ display: "flex", justifyContent: "flex-end" }}
              secondaryAction={
                <IconButton aria-label="الشؤون الإدارية">
                  <ViewListRoundedIcon />
                </IconButton>
              }
            >
              <NavLink
                className={(nav) => (nav.isActive ? "active" : "link")}
                to="/administration"
              >
                الشؤون الإدارية
              </NavLink>
            </ListItem>
            <ListItem
              sx={{ display: "flex", justifyContent: "flex-end" }}
              secondaryAction={
                <IconButton aria-label="الشؤون التعليمية">
                  <ViewListRoundedIcon />
                </IconButton>
              }
            >
              <NavLink
                className={(nav) => (nav.isActive ? "active" : "link")}
                to="/education"
              >
                الشؤون التعليمية
              </NavLink>
            </ListItem>
            <ListItem
              sx={{ display: "flex", justifyContent: "flex-end" }}
              secondaryAction={
                <IconButton aria-label="الشؤون المالية">
                  <ViewListRoundedIcon />
                </IconButton>
              }
            >
              <NavLink
                className={(nav) => (nav.isActive ? "active" : "link")}
                to="/financial"
              >
                الشؤون المالية
              </NavLink>
            </ListItem>
            <ListItem
              sx={{ display: "flex", justifyContent: "flex-end" }}
              secondaryAction={
                <IconButton aria-label="حول البرنامج">
                  <InfoRoundedIcon />
                </IconButton>
              }
            >
              <NavLink
                className={(nav) => (nav.isActive ? "active" : "link")}
                to="/about"
              >
                حول البرنامج
              </NavLink>
            </ListItem>
          </List>
        </Box>
      </SwipeableDrawer>
    </>
  );
}
