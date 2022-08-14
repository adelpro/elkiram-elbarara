import React from "react";
import { Box, Typography } from "@mui/material";
import "./Home.css";
export default function home() {
  return (
    <Box
      sx={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h2" component="h2">
        لوحة التحكم الرئيسية
      </Typography>
    </Box>
  );
}
