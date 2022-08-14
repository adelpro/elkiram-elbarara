import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import "./Login.css";
import { useRecoilState } from "recoil";
import { loggedinState, datastate } from "../../recoil/atom";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
export default function Login() {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loggedin, setLoggedin] = useRecoilState(loggedinState);
  const [data, setdata] = useRecoilState(datastate);
  const loginHandler = () => {
    setdata({});

    if (userName === "director123" && password === "director123") {
      setLoggedin(true);
      setdata({
        id: "1",
        user: "director123",
        password: "director123",
        name: "أحمد",
        role: "مدير",
        profilepic:
          "https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_960_720.png",
      });
      console.log("loginin as director");
    }
    if (userName === "student123" && password === "student123") {
      setLoggedin(true);
      setdata({
        id: "1",
        user: "student123",
        password: "student123",
        name: "عثمان",
        role: "طالب",
        profilepic:
          "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
      });
      console.log("loginin as student");
    }
  };
  const InputStyle = {
    width: "100%",
    maxWidth: "400px",
    "& input": { textAlign: "right", fontWeight: 400 },
    "& label": {
      transformOrigin: "right !important",
      left: "inherit !important",
      right: "1.75rem !important",
      fontSize: "small",
      color: "#807D7B",
      fontWeight: 400,
      overflow: "unset",
      mt: 0,
      p: 0,
    },
  };
  return (
    <>
      <AppBar position="static" color="secondary">
        <Stack direction="row-reverse" spacing={1} alignItems={"center"}>
          <IconButton sx={{ color: "white" }}>
            <LockOpenRoundedIcon />
          </IconButton>
          <Typography variant="h6">تسجيل الدخول</Typography>
        </Stack>
      </AppBar>
      <Box
        variant="div"
        sx={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          p: 2,
          m: 2,
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            flexDirection: "colomn",
            justifyContent: "center",
            alignItems: "center",
            width: 400,
            height: 250,
            p: 2,
            borderColor: "#807D7B",
            borderStyle: "solid",
            borderWidth: 1,
            borderRadius: "5px",
          }}
        >
          <Grid item xs={12}>
            <TextField
              sx={InputStyle}
              id="userName"
              variant="standard"
              label="إسم المستخدم"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              sx={InputStyle}
              id="password"
              label="كلمة المرور"
              variant="standard"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Button variant="contained" onClick={loginHandler}>
            تسجيل الدخول
          </Button>
        </Grid>
        <Stack direction="column" spacing={1} sx={{ mt: 2, mb: 0 }}>
          <Box sx={{ textAlign: "center", color: "#cccc" }}>
            user: director123/ pass: director123
          </Box>
          <Box sx={{ textAlign: "center", color: "#cccc" }}>or</Box>
          <Box sx={{ textAlign: "center", color: "#cccc" }}>
            user: student123/ pass: student123
          </Box>
        </Stack>
      </Box>
    </>
  );
}
