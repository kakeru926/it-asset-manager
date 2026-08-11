import {
  Drawer,
  Toolbar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ComputerIcon from "@mui/icons-material/Computer";
import PeopleIcon from "@mui/icons-material/People";
import BusinessIcon from "@mui/icons-material/Business";

const drawerWidth = 240;

const menus = [
  {
    text: "ダッシュボード",
    icon: <DashboardIcon />,
  },
  {
    text: "PC一覧",
    icon: <ComputerIcon />,
  },
  {
    text: "利用者一覧",
    icon: <PeopleIcon />,
  },
  {
    text: "部署一覧",
    icon: <BusinessIcon />,
  },
];

const SideDrawer = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      {/* Headerの高さ分下げる */}
      <Toolbar />

      <List>
        {menus.map((menu) => (
          <ListItemButton key={menu.text}>
            <ListItemIcon>{menu.icon}</ListItemIcon>
            <ListItemText primary={menu.text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default SideDrawer;