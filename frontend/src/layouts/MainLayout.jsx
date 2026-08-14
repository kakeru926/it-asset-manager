import { useState } from "react";
import {
  Box,
  CssBaseline,
  Toolbar,
} from "@mui/material";
import AppHeader from "../components/layout/AppHeader";
import SideDrawer from "../components/layout/SideDrawer";

const DRAWER_WIDTH = 220;
const MINI_DRAWER_WIDTH = 70;

export default function MainLayout({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const currentDrawerWidth = drawerOpen
    ? DRAWER_WIDTH
    : MINI_DRAWER_WIDTH;

  const handleDrawerToggle = () => {
    setDrawerOpen((previous) => !previous);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f6f8fc" }}>
      <CssBaseline />

      <SideDrawer
        open={drawerOpen}
        onToggle={handleDrawerToggle}
        drawerWidth={DRAWER_WIDTH}
        miniDrawerWidth={MINI_DRAWER_WIDTH}
      />

      <AppHeader
        drawerWidth={currentDrawerWidth}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minWidth: 0,
          p: 3,
          ml: `${currentDrawerWidth}px`, //ml: margin-left
          transition: (theme) =>
            theme.transitions.create("margin", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
        }}
      >
        <Toolbar sx={{ minHeight: "72px !important" }} />
        {children}
      </Box>
    </Box>
  );
}