import { Box, Typography } from "@mui/material";
import React from "react";

export default function PageNotFound() {
  return (
    <Box
      sx={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h1" color={"red"} sx={{ fontWeight: "Bold" }}>
        404
      </Typography>
      <Typography variant="subtitle1" color={"gray"}>
        الصفحة غير متوفرة
      </Typography>
      <Typography variant="subtitle2" color={"gray"}>
        يرجى التحقق من العنوان وإعادة المحاولة مرة أخرى
      </Typography>
    </Box>
  );
}
