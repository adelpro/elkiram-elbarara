import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
export default function Footer() {
  return (
    <AppBar
      position="sticky"
      color="inherit"
      style={{
        top: "auto",
        bottom: 0,
        background: "transparent",
      }}
    >
      <Typography
        variant="subtitle2"
        align="center"
        component="div"
        gutterBottom
      >
        تطبيق الكرام البررة @2022
      </Typography>
    </AppBar>
  );
}
