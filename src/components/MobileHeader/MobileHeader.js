import { Box } from "@mui/material";
import React from "react";
import logoSmall from "../../assets/logo_small_2.png";
import logoLarge from "../../assets/logo_large_2.png";
import "./MobileHeader.css";
export default function MobileHeader() {
  return (
    <>
      <Box
        component="div"
        sx={{
          display: ["flex", "none", "none"],
          alignItems: "center",
          justifyContent: "center",
          m: 2,
          p: 2,
        }}
      >
        <img
          src={logoSmall}
          alt="logo"
          className="mobile_header_logo"
          style={{ width: 200, height: 200, objectFit: "contain" }}
        />
      </Box>
      <Box
        component="div"
        sx={{
          display: ["none", "flex", "flex"],
          alignItems: "center",
          justifyContent: "center",
          m: 5,
        }}
      >
        <img
          src={logoLarge}
          alt="logo"
          className="mobile_header_logo"
          style={{ width: 400, height: 200, objectFit: "contain" }}
        />
      </Box>
    </>
  );
}
