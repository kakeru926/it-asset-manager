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

export default function AppHeader({drawerWidth}) {

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,

        // Drawerの右側からHeaderを開始
        width: `calc(100% - ${drawerWidth}px)`,

        ml: `${drawerWidth}px`,

        bgcolor: "#fff",
        color: "#172033",

        borderBottom: "1px solid #e8edf5",

        transition: (theme) =>
          theme.transitions.create(
            ["width", "margin"],
            {
              easing: theme.transitions.easing.sharp,
              duration:
                theme.transitions.duration.standard,
            }
          ),
      }}
    >
      <Toolbar
        sx={{
          minHeight: 72,
          px: 3,
        }}
      >
        {/* タイトル */}
        <Typography
          variant="h6"
          component="h1"
          sx={{
            fontWeight: 700,
            letterSpacing: "0.02em",
          }}
        >
          PC管理台帳
        </Typography>

        {/* 右側へ押し出す */}
        <Box sx={{ flexGrow: 1 }} />

        {/* 通知 */}
        <Tooltip title="通知">
          <IconButton
            aria-label="通知"
            sx={{
              color: "#475467",
              mr: 1,
            }}
          >
            <NotificationsNoneIcon />
          </IconButton>
        </Tooltip>

        {/* ユーザー情報 */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{
            ml: 1,
          }}
        >
          <Avatar
            sx={{
              width: 36,
              height: 36,
              bgcolor: "#1d4ed8",
            }}
          >
            ad
          </Avatar>

          <Box>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              admin
            </Typography>

            <Typography
              variant="caption"
              color="text.secondary"
            >
              システム管理者
            </Typography>
          </Box>

          <IconButton
            aria-label="プロフィールメニュー"
            size="small"
            sx={{
              color: "#667085",
            }}
          >
            <KeyboardArrowDownIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}