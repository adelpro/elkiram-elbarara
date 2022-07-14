import React from "react";
import "./Sidebar.css";
import { List, ListItem, Box, Collapse, ListItemText } from "@mui/material";
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
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { data } from "../../Data";
export default function Sidebar() {
  const [open, setOpen] = React.useState(0);
  const handleAdministrationClick = () => {
    setOpen(open === 1 ? 0 : 1);
  };
  const handleEducationClick = () => {
    setOpen(open === 2 ? 0 : 2);
  };
  const handleFinancialClick = () => {
    setOpen(open === 3 ? 0 : 3);
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
          onClick={handleAdministrationClick}
        >
          <ListItemText
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            secondary={
              <NavLink
                className={(nav) => (nav.isActive ? "active" : "link")}
                to="/administration"
              >
                الشؤون الإدارية
              </NavLink>
            }
            primary={open === 1 ? <ExpandLess /> : <ExpandMore />}
          />
        </ListItem>
        <Collapse in={open === 1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ mr: 2 }}>
            <ListItem
              sx={{ display: "flex", justifyContent: "flex-end" }}
              secondaryAction={
                <IconButton aria-label="Students">
                  <ArrowLeftIcon />
                </IconButton>
              }
            >
              <NavLink
                className={(nav) => (nav.isActive ? "active" : "link")}
                to="/students"
              >
                الطلاب
              </NavLink>
            </ListItem>
            <ListItem
              sx={{ display: "flex", justifyContent: "flex-end" }}
              secondaryAction={
                <IconButton aria-label="Teachers">
                  <ArrowLeftIcon />
                </IconButton>
              }
            >
              <NavLink
                className={(nav) => (nav.isActive ? "active" : "link")}
                to="/teatchers"
              >
                المعلمين
              </NavLink>
            </ListItem>
            <ListItem
              sx={{ display: "flex", justifyContent: "flex-end" }}
              secondaryAction={
                <IconButton aria-label="Parents">
                  <ArrowLeftIcon />
                </IconButton>
              }
            >
              <NavLink
                className={(nav) => (nav.isActive ? "active" : "link")}
                to="/parents"
              >
                أولياء الأمور
              </NavLink>
            </ListItem>
            <ListItem
              sx={{ display: "flex", justifyContent: "flex-end" }}
              secondaryAction={
                <IconButton aria-label="Circles">
                  <ArrowLeftIcon />
                </IconButton>
              }
            >
              <NavLink
                className={(nav) => (nav.isActive ? "active" : "link")}
                to="/circles"
              >
                الحلقات
              </NavLink>
            </ListItem>
          </List>
        </Collapse>
        <ListItem
          sx={{ display: "flex", justifyContent: "flex-end" }}
          secondaryAction={
            <IconButton aria-label="الشؤون التعليمية">
              <ViewListRoundedIcon />
            </IconButton>
          }
          onClick={handleEducationClick}
        >
          <ListItemText
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            secondary={
              <NavLink
                className={(nav) => (nav.isActive ? "active" : "link")}
                to="/education"
              >
                الشؤون التعليمية
              </NavLink>
            }
            primary={open === 2 ? <ExpandLess /> : <ExpandMore />}
          />
        </ListItem>
        <Collapse in={open === 2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ mr: 2 }}>
            <ListItem
              sx={{ display: "flex", justifyContent: "flex-end" }}
              secondaryAction={
                <IconButton aria-label="merorizeAndReview">
                  <ArrowLeftIcon />
                </IconButton>
              }
            >
              <NavLink
                className={(nav) => (nav.isActive ? "active" : "link")}
                to="/merorizeandreview"
              >
                حفظ ومراجعة
              </NavLink>
            </ListItem>
            <ListItem
              sx={{ display: "flex", justifyContent: "flex-end" }}
              secondaryAction={
                <IconButton aria-label="plansanddecisions">
                  <ArrowLeftIcon />
                </IconButton>
              }
            >
              <NavLink
                className={(nav) => (nav.isActive ? "active" : "link")}
                to="/plansanddecisions"
              >
                الخطط والقرارات
              </NavLink>
            </ListItem>
            <ListItem
              sx={{ display: "flex", justifyContent: "flex-end" }}
              secondaryAction={
                <IconButton aria-label="Education Reports">
                  <ArrowLeftIcon />
                </IconButton>
              }
            >
              <NavLink
                className={(nav) => (nav.isActive ? "active" : "link")}
                to="/educationreports"
              >
                التقارير
              </NavLink>
            </ListItem>
            <ListItem
              sx={{ display: "flex", justifyContent: "flex-end" }}
              secondaryAction={
                <IconButton aria-label="Analytics">
                  <ArrowLeftIcon />
                </IconButton>
              }
            >
              <NavLink
                className={(nav) => (nav.isActive ? "active" : "link")}
                to="/analytics"
              >
                الإحصاءات
              </NavLink>
            </ListItem>
          </List>
        </Collapse>
        <ListItem
          sx={{ display: "flex", justifyContent: "flex-end" }}
          secondaryAction={
            <IconButton aria-label="الشؤون المالية">
              <ViewListRoundedIcon />
            </IconButton>
          }
          onClick={handleFinancialClick}
        >
          <ListItemText
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            secondary={
              <NavLink
                className={(nav) => (nav.isActive ? "active" : "link")}
                to="/financial"
              >
                الشؤون المالية
              </NavLink>
            }
            primary={open === 3 ? <ExpandLess /> : <ExpandMore />}
          />
        </ListItem>
        <Collapse in={open === 3} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ mr: 2 }}>
            <ListItem
              sx={{ display: "flex", justifyContent: "flex-end" }}
              secondaryAction={
                <IconButton aria-label="subscriptions">
                  <ArrowLeftIcon />
                </IconButton>
              }
            >
              <NavLink
                className={(nav) => (nav.isActive ? "active" : "link")}
                to="/subscriptions"
              >
                الإشتراكات
              </NavLink>
            </ListItem>
            <ListItem
              sx={{ display: "flex", justifyContent: "flex-end" }}
              secondaryAction={
                <IconButton aria-label="Income">
                  <ArrowLeftIcon />
                </IconButton>
              }
            >
              <NavLink
                className={(nav) => (nav.isActive ? "active" : "link")}
                to="/income"
              >
                المداخيل
              </NavLink>
            </ListItem>
            <ListItem
              sx={{ display: "flex", justifyContent: "flex-end" }}
              secondaryAction={
                <IconButton aria-label="Financial Reports">
                  <ArrowLeftIcon />
                </IconButton>
              }
            >
              <NavLink
                className={(nav) => (nav.isActive ? "active" : "link")}
                to="/financialreports"
              >
                التقارير المالية
              </NavLink>
            </ListItem>
          </List>
        </Collapse>
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
  );
}
