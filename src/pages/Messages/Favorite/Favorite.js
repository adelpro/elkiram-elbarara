import * as React from "react";
import Box from "@mui/material/Box";
import FolderSpecialRoundedIcon from "@mui/icons-material/FolderSpecialRounded";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { DataGrid } from "@mui/x-data-grid";
import { AppBar, Button, ButtonGroup, Stack } from "@mui/material";
import "./Favorite.css";
export default function Favorite() {
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "sender", headerName: "المرسل", width: 150 },
    { field: "subject", headerName: "العنوان", width: 150 },
    {
      field: "date",
      headerName: "التاريخ",
      type: "date",
      width: 100,
    },
  ];

  const rows = [
    {
      id: 1,
      sender: "amine@gmail.com",
      subject: "طلب اشتراك",
      date: "10/07/2022",
    },
    {
      id: 2,
      sender: "omar@gmail.com",
      subject: "موافقة",
      date: "15/05/2022",
    },
    {
      id: 3,
      sender: "mouhamed@gmail.com",
      subject: "تأكيد",
      date: "02/07/2022",
    },
    {
      id: 4,
      sender: "mouhamed@gmail.com",
      subject: "حفظ ",
      date: "4/04/2022",
    },
  ];

  return (
    <>
      <AppBar position="static" color="secondary">
        <Stack direction="row-reverse" spacing={1} alignItems={"center"}>
          <IconButton sx={{ color: "white" }}>
            <FolderSpecialRoundedIcon />
          </IconButton>
          <Typography variant="h6">المفضلة</Typography>
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
        <Button>إلغاء من المفضلة</Button>
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
