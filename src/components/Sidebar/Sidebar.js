import React from "react";
import "./Sidebar.css";
import { List, ListItem } from "@mui/material";
import { NavLink, Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import logo from "../../assets/logo_small_2.png";
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import ViewListRoundedIcon from "@mui/icons-material/ViewListRounded";
import { data } from "../../Data";
export default function Sidebar() {
  console.log(data.image);
  return (
    <div className="sidebar_container">
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

      <Stack direction="row" spacing={1} sx={{ mt: 3, mb: 3 }}>
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
      <List sx={{ width: "100%", maxWidth: 360 }}>
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
    </div>
  );
}
