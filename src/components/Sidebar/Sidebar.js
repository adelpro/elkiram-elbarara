import React from "react";
import "./Sidebar.css";
import { Box, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import logo from "../../assets/logo_small_2.png";
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { data } from "../../Data";
import SideBarList from "../SideBarList/SideBarList";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
export default function Sidebar() {
  return (
    <Box
      component="div"
      sx={{
        display: ["none", "none", "flex"],
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "100vh",
        width: 280,
        overflow: "auto",
      }}
      className="sidebar_container"
    >
      <img
        src={logo}
        alt="logo"
        className="sidebar_logo"
        style={{ width: 200, height: 200, objectFit: "contain" }}
      />
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
          <Tooltip title="الملف الشخصي">
            <IconButton color="secondary" aria-label="Profile">
              <AccountCircleRoundedIcon />
            </IconButton>
          </Tooltip>
        </Link>
        <Link to="/messages">
          <Tooltip title="الرسائل">
            <IconButton color="secondary" aria-label="Messages">
              <EmailIcon />
            </IconButton>
          </Tooltip>
        </Link>
        <Link to="/configuration">
          <Tooltip title="الإعدادات">
            <IconButton color="primary" aria-label="Settings">
              <SettingsRoundedIcon />
            </IconButton>
          </Tooltip>
        </Link>
        <Tooltip title="تسجيل الخروج">
          <IconButton color="primary" aria-label="Logout">
            <LogoutIcon />
          </IconButton>
        </Tooltip>
      </Stack>
      <SideBarList />
    </Box>
  );
}
