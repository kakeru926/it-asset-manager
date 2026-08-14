import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ComputerIcon from "@mui/icons-material/Computer";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
//import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const menuItems = [
  {
    label: "PC台帳",
    icon: <DashboardOutlinedIcon />,
    selected: true,
  },
  {
    label: "資産管理",
    icon: <Inventory2OutlinedIcon />,
  },
  {
    label: "設定",
    icon: <SettingsOutlinedIcon />,
  },
];

export default function SideDrawer({ open, onToggle, drawerWidth, miniDrawerWidth }) {

  const currentWidth = open
    ? drawerWidth
    : miniDrawerWidth;

  const drawerContent = (
    <Box
        sx={{
          height: "100%",
          bgcolor: "#272727",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Drawer Header */}
        <Box
          sx={{
            height: 72,
            flexShrink: 0,

            display: "flex",
            alignItems: "center",

            px: open ? 2 : 1,

            transition: (theme) =>
              theme.transitions.create("padding", {
                duration: theme.transitions.duration.standard,
              }),
          }}
        >
          {/* ハンバーガーボタン */}
          <IconButton
            onClick={onToggle}
            aria-label="メニュー開閉"
            sx={{
              color: "#fff",
              width: 40,
              height: 40,
              flexShrink: 0,
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.12)" }} />

      <List sx={{ px: 1.5, py: 2 }}>
        {menuItems.map((item) => (
          <ListItemButton
              key={item.label}
              selected={item.selected}
              sx={{
                minHeight: 52,
                mb: 0.75,
                px: open ? 2 : 0,
                borderRadius: 2,
                justifyContent: open ? "initial" : "center",

                "& .MuiListItemIcon-root": {
                  minWidth: open ? 40 : 0,
                  mr: open ? 1 : 0,
                  justifyContent: "center",
                  color: item.selected
                    ? "#fff"
                    : "#9fb3cc",
                },

                "&.Mui-selected": {
                  bgcolor: "#4b4e57",
                  boxShadow:
                    "0 4px 12px rgba(0, 0, 0, 0.2)",
                },

                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.08)",
                },
              }}
            >
            <ListItemIcon>{item.icon}</ListItemIcon>
            {open && (
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: item.selected ? 700 : 500,
                    whiteSpace: "nowrap",
                  }}
                />
              )}
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: currentWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: currentWidth,
          boxSizing: "border-box",
          border: 0,
          transition: (theme) =>
            theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.standard,
            }),
        },
      }}
    >
      {drawerContent}
    </Drawer>
  );
}