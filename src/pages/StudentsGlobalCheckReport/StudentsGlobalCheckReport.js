import "./StudentsGlobalCheckReport.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { DataGrid } from "@mui/x-data-grid";
import { AppBar, Button, ButtonGroup, Stack } from "@mui/material";
import AssessmentRounded from "@mui/icons-material/AssessmentRounded";
export default function StudentsGlobalCheckReport() {
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 30,
      hiden: true,
    },
    { field: "student", headerName: "الطالب", width: 150 },
    { field: "presence", headerName: "الحضور", width: 150 },
    { field: "lateness", headerName: "التأخر", width: 150 },
    { field: "absence", headerName: "الغياب", width: 150 },
    { field: "absencewithexcuse", headerName: "الغياب بعذر", width: 150 },
  ];

  const rows = [
    {
      id: 1,
      student: "....",
      presence: ".....",
      lateness: "....",
      absence: ".....",
      absencewithexcuse: "............",
    },
    {
      id: 2,
      student: "....",
      presence: ".....",
      lateness: "....",
      absence: ".....",
      absencewithexcuse: "............",
    },
    {
      id: 3,
      student: "....",
      presence: ".....",
      lateness: "....",
      absence: ".....",
      absencewithexcuse: "............",
    },
    {
      id: 4,
      student: "....",
      presence: ".....",
      lateness: "....",
      absence: ".....",
      absencewithexcuse: "............",
    },
    {
      id: 5,
      student: "....",
      presence: ".....",
      lateness: "....",
      absence: ".....",
      absencewithexcuse: "............",
    },
    {
      id: 6,
      student: "....",
      presence: ".....",
      lateness: "....",
      absence: ".....",
      absencewithexcuse: "............",
    },
  ];

  return (
    <>
      <AppBar position="static" color="secondary">
        <Stack direction="row-reverse" spacing={1} alignItems={"center"}>
          <IconButton sx={{ color: "white" }}>
            <AssessmentRounded />
          </IconButton>
          <Typography variant="h6">تقرير مواضبة الطلاب الإجمالي</Typography>
        </Stack>
      </AppBar>

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
        <Button>إضافة</Button>
        <Button>تعديل</Button>
        <Button>حذف</Button>
      </ButtonGroup>

      <Box
        sx={{
          flex: 1,
          width: "100%",
          direction: "rtl",
        }}
      >
        <DataGrid
          sx={{
            height: 400,
          }}
          scrollbarSize={0}
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableVirtualization
        />
      </Box>
    </>
  );
}
