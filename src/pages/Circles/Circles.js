import "./Circles.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { DataGrid } from "@mui/x-data-grid";
import { AppBar, Button, ButtonGroup, Stack } from "@mui/material";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
export default function Circles() {
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 30,
      hiden: true,
    },
    { field: "Name", headerName: "الإسم", width: 50 },
    { field: "type", headerName: "النوع", width: 150 },
    { field: "sex", headerName: "الجنس", width: 150 },
    { field: "teachersList", headerName: "قائمة المعلمين", width: 150 },
    { field: "studentList", headerName: "قائمة الطلاب", width: 150 },
  ];

  const rows = [
    {
      id: 1,
      name: "الحلقة 1",
      type: "قران",
      sex: 1,
      teachersList: "1,2,3",
      studentsList: "1,2,3",
    },
    {
      id: 2,
      name: "2",
      type: "الحديث",
      sex: 2,
      teachersList: "1,2,3",
      studentsList: "1,2,3",
    },
  ];

  return (
    <>
      <AppBar position="static" color="secondary">
        <Stack direction="row-reverse" spacing={1} alignItems={"center"}>
          <IconButton sx={{ color: "white" }}>
            <PermContactCalendarIcon />
          </IconButton>
          <Typography variant="h6">الطلاب</Typography>
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
