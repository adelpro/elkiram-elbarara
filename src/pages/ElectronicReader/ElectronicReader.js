import "./ElectronicReader.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { DataGrid } from "@mui/x-data-grid";
import { AppBar, Button, ButtonGroup, Stack } from "@mui/material";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
export default function ElectronicReader() {
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 30,
      hiden: true,
    },
    { field: "circle", headerName: "الحلقة", width: 150 },
    { field: "days", headerName: "الأيام", width: 150 },
    { field: "time", headerName: "التوقيت", width: 150 },
    {
      field: "status",
      headerName: "الحالة",
      width: 150,
    },
    { field: "login", headerName: "دخول", width: 150 },
  ];

  const rows = [
    {
      id: 1,
      circle: ".....",
      days: ".....",
      time: "...",
      status: 1,
    },
    {
      id: 2,
      circle: ".....",
      days: ".....",
      time: "...",
      status: 1,
    },
    {
      id: 3,
      circle: ".....",
      days: ".....",
      time: "...",
      status: 1,
    },
    {
      id: 4,
      circle: ".....",
      days: ".....",
      time: "...",
      status: 1,
    },
    {
      id: 5,
      circle: ".....",
      days: ".....",
      time: "...",
      status: 1,
    },
    {
      id: 6,
      circle: ".....",
      days: ".....",
      time: "...",
      status: 1,
    },
  ];

  return (
    <>
      <AppBar position="static" color="secondary">
        <Stack direction="row-reverse" spacing={1} alignItems={"center"}>
          <IconButton sx={{ color: "white" }}>
            <VideocamRoundedIcon />
          </IconButton>
          <Typography variant="h6">المقرأة الإلكترونية</Typography>
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
