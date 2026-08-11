import { Box, Toolbar } from "@mui/material";

import AppHeader from "../components/layout/AppHeader";
import SideDrawer from "../components/layout/SideDrawer";

const drawerWidth = 240;

const MainLayout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <AppHeader onMenuClick={handleDrawerOpen} />

      <SideDrawer
        open={drawerOpen}
        onClose={handleDrawerClose}
      />
      <main>
        メインコンテンツ
      </main>
    </>
      

      
  );
};

export default MainLayout;