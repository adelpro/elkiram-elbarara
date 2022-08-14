import React from "react";
import "./Sidebar.css";
import { Box, Tooltip } from "@mui/material";
import { useRecoilState, useSetRecoilState } from "recoil";
import { loggedinState, datastate } from "../../recoil/atom";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import logo from "../../assets/logo_small_2.png";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import SideBarListDirector from "../SideBarListDirector/SideBarListDirector";
import SideBarListStudent from "../SideBarListStudent/SideBarListStudent";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
export default function Sidebar() {
  const [data, setdata] = useRecoilState(datastate);
  const [loggedin, setLoggedin] = useRecoilState(loggedinState);
  const logoutHundler = () => {
    console.log("logout");
    setLoggedin(false);
    setdata({});
  };
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
        backgroundColor: "#fcfbfb",
      }}
      className="sidebar_container"
    >
      <Box
        component="img"
        sx={{
          height: 120,
          width: 120,
          objectFit: "cover",
          mt: 2,
        }}
        alt="Logo"
        src={logo}
      />

      <div className="sidebar_user">
        <Avatar
          src={data.profilepic}
          alt="avatar"
          sx={{ width: 100, height: 100, mt: 2, mb: 2 }}
        />
        <span className="mobile_avatar_badge">{data.role}</span>
      </div>
      <div className="mobile_sidebar_user_info">{data.name}</div>

      <Stack direction="row" spacing={1} sx={{ mt: 2, mb: 0 }}>
        <Link to="/profile">
          <Tooltip title="الملف الشخصي">
            <IconButton color="secondary" aria-label="Profile">
              <AccountCircleRoundedIcon />
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
          <IconButton
            color="primary"
            aria-label="Logout"
            onClick={logoutHundler}
          >
            <LogoutIcon />
          </IconButton>
        </Tooltip>
      </Stack>
      {data.role === "مدير" ? <SideBarListDirector /> : null}
      {data.role === "طالب" ? <SideBarListStudent /> : null}
    </Box>
  );
}
