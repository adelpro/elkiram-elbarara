import "./StudentsReports.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { AppBar, Button, ButtonGroup, Stack } from "@mui/material";
import AssessmentRounded from "@mui/icons-material/AssessmentRounded";
import { useNavigate } from "react-router-dom";
export default function StudentsReports() {
  const navigate = useNavigate();
  return (
    <>
      <AppBar position="static" color="secondary">
        <Stack direction="row-reverse" spacing={1} alignItems={"center"}>
          <IconButton sx={{ color: "white" }}>
            <AssessmentRounded />
          </IconButton>
          <Typography variant="h6">تقارير الطلبة</Typography>
        </Stack>
      </AppBar>
      <Box
        sx={{
          flex: 1,
          width: "100%",
          direction: "rtl",
        }}
      >
        <ButtonGroup
          variant="button"
          aria-label=" button group"
          sx={{
            m: 2,
            flex: 1,
            width: "100%",
            direction: "rtl",
          }}
        >
          <Button
            sx={{
              color: "white",
              backgroundColor: "#0096C7",
              height: 60,
              margin: 1,
            }}
            onClick={() => navigate("studentsdetailedreport")}
          >
            التقرير التفصيلي للطبة
          </Button>
          <Button
            sx={{
              color: "white",
              backgroundColor: "#0096C7",
              height: 60,
              margin: 1,
            }}
            onClick={() => navigate("studentsglobalcheckreport")}
          >
            تقرير مواضبة الطلاب الإجمالي
          </Button>
        </ButtonGroup>
      </Box>
    </>
  );
}
