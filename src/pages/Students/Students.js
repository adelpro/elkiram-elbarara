import "./Students.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { DataGrid } from "@mui/x-data-grid";
import { AppBar, Button, ButtonGroup, Stack } from "@mui/material";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
export default function Students() {
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 30,
      hiden: true,
    },
    { field: "firstName", headerName: "الإسم الأول", width: 50 },
    { field: "secondName", headerName: "الإسم الثاني", width: 150 },
    { field: "sex", headerName: "", width: 150 },
    {
      field: "sex",
      headerName: "الجنس",
      width: 100,
    },
    { field: "userName", headerName: "إسم المستخدم", width: 150 },
    {
      field: "dateOfBirth",
      headerName: "تاريخ الميلاد",
      width: 150,
      type: "date",
    },
    { field: "parent", headerName: "ولي الأمر", width: 150 },
    { field: "notes", headerName: "ملاحظات", width: 150 },
  ];

  const rows = [
    {
      id: 1,
      firstName: "محمد",
      secondName: "الأمين",
      sex: 1,
      date: "10/07/2012",
      parent: 1,
      notes: "............",
    },
    {
      id: 2,
      firstName: "محمد",
      secondName: "الأمين",
      sex: 1,
      date: "10/07/2012",
      parent: 1,
      notes: "............",
    },
    {
      id: 3,
      firstName: "محمد",
      secondName: "الأمين",
      sex: 1,
      date: "10/07/2012",
      parent: 2,
      notes: "............",
    },
    {
      id: 4,
      firstName: "عمر",
      secondName: "سعيد",
      sex: 1,
      date: "10/08/2010",
      parent: 2,
      notes: "............",
    },
    {
      id: 5,
      firstName: "علي",
      secondName: "مختار",
      sex: 1,
      date: "10/07/2009",
      parent: 3,
      notes: "............",
    },
    {
      id: 6,
      firstName: "عثمان",
      secondName: "سمير",
      sex: 1,
      date: "10/07/2015",
      parent: 4,
      notes: "............",
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
