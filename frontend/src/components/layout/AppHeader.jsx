import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function AppHeader({ onMenuClick }) {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        //width: `calc(100% - ${leftOffset}px)`,
        //ml: `${leftOffset}px`,
        bgcolor: "#ffffff",
        color: "#172033",
        borderBottom: "1px solid #e8edf5",
        transition: (theme) =>
          theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
      }}  
    >
    <Toolbar sx={{ minHeight: 72, px: { xs: 1.5, sm: 3 } }}>
      <IconButton
        //onClick={onMenuClick}
        edge="start"
        aria-label="メニューを開閉"
        sx={{ mr: 2, color: "#344054" }}
      >
        <MenuIcon />
      </IconButton>
      <Typography
        variant="h6"
        component="h1"
        sx={{ fontWeight: 700, letterSpacing: "0.02em" }}
      >
        PC台帳管理システム
      </Typography>


      <Box sx={{ flexGrow: 1 }} />
      <Tooltip title="通知">
        <IconButton aria-label="通知" sx={{ color: "#475467", mr: 1 }}>
          <NotificationsNoneIcon />
        </IconButton>
      </Tooltip>
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{ ml: { xs: 0, sm: 1 } }}
      >
        <Avatar sx={{ width: 36, height: 36, bgcolor: "#1d4ed8" }}>
          管
        </Avatar>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Typography variant="body2" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
            管理者 太郎
          </Typography>
          <Typography variant="caption" color="text.secondary">
            システム管理者
          </Typography>
        </Box>
        <IconButton
          aria-label="プロフィールメニュー"
          size="small"
          sx={{ color: "#667085" }}
        >
          <KeyboardArrowDownIcon />
        </IconButton>
      </Stack>
    </Toolbar>
  </AppBar>
  );
}