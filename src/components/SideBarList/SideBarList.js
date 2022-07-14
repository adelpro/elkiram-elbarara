import React from "react";
import "./SideBarList.css";
import { List, ListItem, Collapse, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import ViewListRoundedIcon from "@mui/icons-material/ViewListRounded";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
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
        <NavLink className={(nav) => (nav.isActive ? "active" : "link")} to="/">
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
          secondary={<p className="link">الشؤون الإدارية</p>}
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
          secondary={<p className="link">الشؤون التعليمية</p>}
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
          secondary={<p className="link">الشؤون المالية</p>}
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
  );
}
