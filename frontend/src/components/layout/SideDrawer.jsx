import Drawer from '@mui/material/Drawer';

export default function SideDrawer({ open, onClose }) {
  return (
     <div>
        <Drawer
          anchor="left"
          open={open}
          onClose={onClose}
        >
        <div style={{ width: 280 }}>
          <h4>メニュー</h4>
          <div>PC台帳</div>
          <div>ユーザー管理</div>
          <div>資産管理</div>
          <div>設定</div>
        </div>
        </Drawer>
      </div>
  )
};