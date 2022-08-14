import "./StudentsDetailedReport.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { DataGrid } from "@mui/x-data-grid";
import { AppBar, Button, ButtonGroup, Stack } from "@mui/material";
import AssessmentRounded from "@mui/icons-material/AssessmentRounded";
export default function StudentsDetailedReport() {
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 30,
      hiden: true,
    },
    { field: "day", headerName: "اليوم", width: 50 },
    { field: "typeofachievement", headerName: "نوع الانجاز", width: 150 },
    { field: "from", headerName: "من", width: 150 },
    {
      field: "to",
      headerName: "إلى",
      width: 100,
    },
    { field: "degree", headerName: "الدرجة", width: 150 },
    {
      field: "note",
      headerName: "الملاحظة",
      width: 150,
    },
    { field: "numberofpages", headerName: "عدد الصفحات", width: 150 },
  ];

  const rows = [
    {
      id: 1,
      typeofachievement: "....",
      from: ".....",
      to: "....",
      note: ".....",
      numberofpages: "............",
    },
    {
      id: 2,
      typeofachievement: "....",
      from: ".....",
      to: "....",
      note: ".....",
      numberofpages: "............",
    },
    {
      id: 3,
      typeofachievement: "....",
      from: ".....",
      to: "....",
      note: ".....",
      numberofpages: "............",
    },
    {
      id: 4,
      typeofachievement: "....",
      from: ".....",
      to: "....",
      note: ".....",
      numberofpages: "............",
    },
    {
      id: 5,
      typeofachievement: "....",
      from: ".....",
      to: "....",
      note: ".....",
      numberofpages: "............",
    },
    {
      id: 6,
      typeofachievement: "....",
      from: ".....",
      to: "....",
      note: ".....",
      numberofpages: "............",
    },
  ];

  return (
    <>
      <AppBar position="static" color="secondary">
        <Stack direction="row-reverse" spacing={1} alignItems={"center"}>
          <IconButton sx={{ color: "white" }}>
            <AssessmentRounded />
          </IconButton>
          <Typography variant="h6">التقرير التفصيلي للطلبة</Typography>
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
