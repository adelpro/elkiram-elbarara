import {
  AppBar,
  Avatar,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useRecoilState } from "recoil";
import { loggedinState, datastate } from "../../recoil/atom";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import "./Profile.css";
import { Box } from "@mui/system";
export default function Profile() {
  const [data, setdata] = useRecoilState(datastate);
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
    },
  };
  return (
    <>
      <AppBar position="static" color="secondary">
        <Stack direction="row-reverse" spacing={1} alignItems={"center"}>
          <IconButton sx={{ color: "white" }}>
            <AccountCircleRoundedIcon />
          </IconButton>
          <Typography variant="h6">الملف الشخصي</Typography>
        </Stack>
      </AppBar>
      <div className="profile_avatar">
        <Avatar
          src={data.profilepic}
          alt="avatar"
          sx={{ width: 150, height: 150, mt: 2, mb: 2 }}
        />
        <span className="profile_avatar_badge">✎</span>
      </div>
      <Box
        sx={{
          p: 2,
          m: 5,
          textAlign: "right",
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            flexDirection: "row-reverse",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Grid item xs={12} sm={6}>
            <TextField
              sx={InputStyle}
              id="firstName"
              variant="standard"
              label=": الإسم الأول"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              sx={InputStyle}
              id="lastName"
              label=": الإسم الأخير"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              sx={InputStyle}
              id="sex"
              label=": الجنس"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              sx={InputStyle}
              id="lastName"
              label=": تاريخ الميلاد"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              sx={InputStyle}
              id="phone"
              label=": رقم الهاتف"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              sx={InputStyle}
              id="email"
              label=": البريد الإلكتروني"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              sx={[InputStyle, { maxWidth: "800px" }]}
              id="adress"
              label=": العنوان"
              variant="standard"
              multiline
              rows={2}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
