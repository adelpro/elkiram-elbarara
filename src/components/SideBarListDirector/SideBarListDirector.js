import React from "react";
import "./SideBarListDirector.css";
import {
  List,
  ListItem,
  Collapse,
  ListItemText,
  Stack,
  Box,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import ViewListRoundedIcon from "@mui/icons-material/ViewListRounded";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import MoveToInboxRoundedIcon from "@mui/icons-material/MoveToInboxRounded";
import OutboxRoundedIcon from "@mui/icons-material/OutboxRounded";
import FolderSpecialRoundedIcon from "@mui/icons-material/FolderSpecialRounded";
import FolderDeleteRoundedIcon from "@mui/icons-material/FolderDeleteRounded";
export default function SideBarList() {
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
  const handleMessageslClick = () => {
    setOpen(open === 4 ? 0 : 4);
  };
  return (
    <List sx={{ width: "100%" }}>
      <ListItem
        sx={{ display: "flex", justifyContent: "flex-end" }}
        secondaryAction={
          <IconButton aria-label="الرئيسية">
            <HomeRoundedIcon />
          </IconButton>
        }
      >
        <ListItemText sx={{ display: "flex", justifyContent: "flex-end" }}>
          <NavLink
            className={(nav) => (nav.isActive ? "active" : "link")}
            to="/"
          >
            الرئيسية
          </NavLink>
        </ListItemText>
      </ListItem>
      <ListItem
        sx={{ display: "flex", justifyContent: "flex-end" }}
        secondaryAction={
          <IconButton aria-label="الرسائل">
            <ViewListRoundedIcon />
          </IconButton>
        }
        onClick={handleMessageslClick}
      >
        <ListItemText
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          secondary={<div className="link">الرسائل</div>}
          primary={open === 4 ? <ExpandLess /> : <ExpandMore />}
        />
      </ListItem>
      <Collapse in={open === 4} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ mr: 2 }}>
          <ListItem
            sx={{ display: "flex", justifyContent: "flex-end" }}
            secondaryAction={
              <IconButton aria-label="Inbox">
                <MoveToInboxRoundedIcon />
              </IconButton>
            }
          >
            <Stack
              direction="row-reverse"
              justifyContent="space-between"
              alignItems="center"
              spacing={1}
              sx={{ flex: 1 }}
            >
              <NavLink
                className={(nav) =>
                  nav.isActive ? "active sub_link" : "link sub_link"
                }
                to="/messages/inbox"
              >
                البريد الوارد
              </NavLink>
              <Box variant="div">5</Box>
            </Stack>
          </ListItem>
          <ListItem
            sx={{ display: "flex", justifyContent: "flex-end" }}
            secondaryAction={
              <IconButton aria-label="Outbox">
                <OutboxRoundedIcon />
              </IconButton>
            }
          >
            <Stack
              direction="row-reverse"
              justifyContent="space-between"
              alignItems="center"
              spacing={1}
              sx={{ flex: 1 }}
            >
              <NavLink
                className={(nav) =>
                  nav.isActive ? "active sub_link" : "link sub_link"
                }
                to="/messages/outbox"
              >
                البريد الصادر
              </NavLink>
              <Box variant="div">1</Box>
            </Stack>
          </ListItem>
          <ListItem
            sx={{ display: "flex", justifyContent: "flex-end" }}
            secondaryAction={
              <IconButton aria-label="Favorite">
                <FolderSpecialRoundedIcon />
              </IconButton>
            }
          >
            <Stack
              direction="row-reverse"
              justifyContent="space-between"
              alignItems="center"
              spacing={1}
              sx={{ flex: 1 }}
            >
              <NavLink
                className={(nav) =>
                  nav.isActive ? "active sub_link" : "link sub_link"
                }
                to="/messages/favorite"
              >
                المفضلة
              </NavLink>{" "}
              <Box variant="div">1</Box>
            </Stack>
          </ListItem>
          <ListItem
            sx={{ display: "flex", justifyContent: "flex-end" }}
            secondaryAction={
              <IconButton aria-label="Deleted">
                <FolderDeleteRoundedIcon />
              </IconButton>
            }
          >
            <Stack
              direction="row-reverse"
              justifyContent="space-between"
              alignItems="center"
              spacing={1}
              sx={{ flex: 1 }}
            >
              <NavLink
                className={(nav) =>
                  nav.isActive ? "active sub_link" : "link sub_link"
                }
                to="/messages/deleted"
              >
                المحذوفات
              </NavLink>{" "}
              <Box variant="div">1</Box>
            </Stack>
          </ListItem>
        </List>
      </Collapse>
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
          secondary={<div className="link">الشؤون الإدارية</div>}
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
              className={(nav) =>
                nav.isActive ? "active sub_link" : "link  sub_link"
              }
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
              className={(nav) =>
                nav.isActive ? "active sub_link" : "link sub_link"
              }
              to="/teachers"
            >
              المعلمون
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
              className={(nav) =>
                nav.isActive ? "active sub_link" : "link sub_link"
              }
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
          secondary={<div className="link">الشؤون التعليمية</div>}
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
              className={(nav) =>
                nav.isActive ? "active sub_link" : "link sub_link"
              }
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
              className={(nav) =>
                nav.isActive ? "active sub_link" : "link sub_link"
              }
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
              className={(nav) =>
                nav.isActive ? "active sub_link" : "link sub_link"
              }
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
              className={(nav) =>
                nav.isActive ? "active sub_link" : "link sub_link"
              }
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
          secondary={<div className="link">الشؤون المالية</div>}
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
              className={(nav) =>
                nav.isActive ? "active sub_link" : "link sub_link"
              }
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
              className={(nav) =>
                nav.isActive ? "active sub_link" : "link sub_link"
              }
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
              className={(nav) =>
                nav.isActive ? "active sub_link" : "link sub_link"
              }
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
        <ListItemText sx={{ display: "flex", justifyContent: "flex-end" }}>
          <NavLink
            className={(nav) => (nav.isActive ? "active" : "link")}
            to="/about"
          >
            حول البرنامج
          </NavLink>
        </ListItemText>
      </ListItem>
    </List>
  );
}
