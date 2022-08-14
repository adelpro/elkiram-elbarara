import {
  Divider,
  IconButton,
  SwipeableDrawer,
  Toolbar,
  Stack,
  Avatar,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React from "react";
import { useState } from "react";
import "./MobileSideBar.css";
import { useRecoilState, useSetRecoilState } from "recoil";
import { loggedinState, datastate } from "../../recoil/atom";
import logo from "../../assets/logo_small_2.png";
import SideBarListDirector from "../SideBarListDirector/SideBarListDirector";
import SideBarListStudent from "../SideBarListStudent/SideBarListStudent";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
export default function MobileSideBar() {
  const [data, setdata] = useRecoilState(datastate);
  const [loggedin, setLoggedin] = useRecoilState(loggedinState);
  const [open, setopen] = useState(false);
  const logoutHundler = () => {
    console.log("logout");
    setLoggedin(false);
    setdata({});
  };
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
            backgroundColor: "#fcfbfb",
          }}
          className="mobile_sidebar_container"
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
          <div className="mobile_sidebar_user">
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
              <IconButton color="secondary" aria-label="الملف الشخصي">
                <AccountCircleRoundedIcon />
              </IconButton>
            </Link>
            <Link to="/configuration">
              <IconButton color="primary" aria-label="Settings">
                <SettingsRoundedIcon />
              </IconButton>
            </Link>

            <IconButton
              color="primary"
              aria-label="Logout"
              onClick={logoutHundler}
            >
              <LogoutIcon />
            </IconButton>
          </Stack>
          {data.role === "مدير" ? <SideBarListDirector /> : null}
          {data.role === "طالب" ? <SideBarListStudent /> : null}
        </Box>
      </SwipeableDrawer>
    </>
  );
}
