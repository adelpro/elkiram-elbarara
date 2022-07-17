import {
  Divider,
  IconButton,
  SwipeableDrawer,
  Toolbar,
  Stack,
  Avatar,
  Box,
} from "@mui/material";

import { data } from "../../Data";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import EmailIcon from "@mui/icons-material/Email";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React from "react";
import { useState } from "react";
import "./MobileSideBar.css";
import logo from "../../assets/logo_small_2.png";
import SideBarList from "../SideBarList/SideBarList";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
export default function MobileSideBar() {
  const [open, setopen] = useState(false);
  return (
    <>
      <Toolbar sx={{ display: ["flex", "flex", "none"] }}>
        <IconButton onClick={() => setopen(true)}>
          <MenuIcon fontSize="large" />
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
        <img
          src={logo}
          alt="logo"
          className="sidebar_logo"
          style={{ width: 200, height: 200, objectFit: "contain" }}
        />
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
            <Link to="/profile">
              <IconButton color="secondary" aria-label="الملف الشخصي">
                <AccountCircleRoundedIcon />
              </IconButton>
            </Link>
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
          <SideBarList />
        </Box>
      </SwipeableDrawer>
    </>
  );
}
