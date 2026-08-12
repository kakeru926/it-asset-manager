import { useState } from "react";
import AppHeader from "../components/layout/AppHeader";
import SideDrawer from "../components/layout/SideDrawer";

export default function MainLayout() {
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
