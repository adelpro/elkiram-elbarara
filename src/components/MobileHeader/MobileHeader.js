import { Box } from "@mui/material";
import React from "react";
import logoLarge from "../../assets/logo_large_2.png";
import logoSmall from "../../assets/logo_small_2.png";
import "./MobileHeader.css";
export default function MobileHeader() {
  return (
    <>
      <Box
        component="img"
        sx={{
          display: ["flex", "none", "none"],
          height: 150,
          width: 150,
          objectFit: "contain",
          mt: 2,
        }}
        alt="Logo"
        src={logoSmall}
      />
      <Box
        component="img"
        sx={{
          display: ["none", "flex", "flex"],
          height: 150,
          width: 400,
          objectFit: "contain",
          mt: 2,
        }}
        alt="Logo"
        src={logoLarge}
      />
    </>
  );
}
