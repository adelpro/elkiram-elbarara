import "./StudentStatistics.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { AppBar, Stack } from "@mui/material";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
export default function StudentStatistics() {
  return (
    <>
      <AppBar position="static" color="secondary">
        <Stack direction="row-reverse" spacing={1} alignItems={"center"}>
          <IconButton sx={{ color: "white" }}>
            <QueryStatsRoundedIcon />
          </IconButton>
          <Typography variant="h6">إحصاءات الطلبة</Typography>
        </Stack>
      </AppBar>
      <Box
        sx={{
          flex: 1,
          width: "100%",
          direction: "rtl",
        }}
      ></Box>
    </>
  );
}
