import { useMemo, useState } from "react";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import {
  Box,
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";


const pcRows = [
  {
    id: 1,
    assetNo: "PC-2026-001",
    userId: "202601",
    userName: "田中 太郎",
    location: "東京",
    department: "システム部",
    os: "Windows 11 Pro",
    manufacturer: "Panasonic",
    model: "CF-SV9",
    displaySize: "13.3インチ",
    cpu: "Core i5-12500",
    storageType: "SSD",
    storage: "256 GB",
    remarks: "アダプター不良",
    purchaseDate: "2026-01-01",
    supplyYear: "2026",
    replaceYear: "2030",
    status: "利用中",
  },
  {
    id: 2,
    assetNo: "PC-2026-002",
    userId: "202602",
    userName: "佐藤 花子",
    location: "大阪",
    department: "営業部",
    os: "Windows 11 Pro",
    manufacturer: "Dell",
    model: "Latitude 5440",
    displaySize: "14インチ",
    cpu: "Core i5-1345U",
    storageType: "SSD",
    storage: "512 GB",
    remarks: "",
    purchaseDate: "2026-02-15",
    supplyYear: "2026",
    replaceYear: "2030",
    status: "利用中",
  },
  {
    id: 3,
    assetNo: "PC-2025-018",
    userId: "",
    userName: "",
    location: "東京",
    department: "情報システム部",
    os: "Windows 11 Pro",
    manufacturer: "Lenovo",
    model: "ThinkPad L14",
    displaySize: "14インチ",
    cpu: "Core i5-1235U",
    storageType: "SSD",
    storage: "256 GB",
    remarks: "貸出可能",
    purchaseDate: "2025-04-01",
    supplyYear: "2025",
    replaceYear: "2029",
    status: "予備",
  },
  {
    id: 4,
    assetNo: "PC-2024-042",
    userId: "202451",
    userName: "鈴木 一郎",
    location: "名古屋",
    department: "経理部",
    os: "Windows 10 Pro",
    manufacturer: "HP",
    model: "ProBook 450",
    displaySize: "15.6インチ",
    cpu: "Core i5-1135G7",
    storageType: "SSD",
    storage: "512 GB",
    remarks: "2027年度に更新予定",
    purchaseDate: "2024-06-20",
    supplyYear: "2024",
    replaceYear: "2027",
    status: "利用中",
  },
];


const statusColor = {
  利用中: "success",
  予備: "info",
  修理中: "warning",
  廃棄: "default",
};


export default function PcListPage() {
  const [filters, setFilters] = useState({
    assetNo: "",
    userName: "",
    department: "",
    status: "",
  });


  const rows = useMemo(
    () =>
      pcRows.filter(
        (row) =>
          (!filters.assetNo ||
            row.assetNo
              .toLowerCase()
              .includes(filters.assetNo.toLowerCase())) &&
          (!filters.userName ||
            row.userName.includes(filters.userName)) &&
          (!filters.department ||
            row.department === filters.department) &&
          (!filters.status ||
            row.status === filters.status)
      ),
    [filters]
  );


  const updateFilter = (key) => (event) =>
    setFilters((current) => ({
      ...current,
      [key]: event.target.value,
    }));


  const clearFilters = () =>
    setFilters({
      assetNo: "",
      userName: "",
      department: "",
      status: "",
    });


  const columns = [
    {
      field: "assetNo",
      headerName: "管理番号",
      minWidth: 135,
      flex: 0.9,
    },
    {
      field: "userId",
      headerName: "User ID",
      minWidth: 100,
      flex: 0.7,
    },
    {
      field: "userName",
      headerName: "利用者名",
      minWidth: 130,
      flex: 0.9,
    },
    {
      field: "location",
      headerName: "拠点",
      minWidth: 90,
      flex: 0.6,
    },
    {
      field: "department",
      headerName: "部署",
      minWidth: 130,
      flex: 0.9,
    },
    {
      field: "os",
      headerName: "OS",
      minWidth: 145,
      flex: 1,
    },
    {
      field: "manufacturer",
      headerName: "メーカー",
      minWidth: 105,
      flex: 0.7,
    },
    {
      field: "model",
      headerName: "型番",
      minWidth: 130,
      flex: 0.9,
    },
    {
      field: "displaySize",
      headerName: "画面サイズ",
      minWidth: 105,
      flex: 0.7,
    },
    {
      field: "cpu",
      headerName: "CPU",
      minWidth: 145,
      flex: 1,
    },
    {
      field: "storageType",
      headerName: "ストレージ",
      minWidth: 100,
      flex: 0.7,
    },
    {
      field: "storage",
      headerName: "容量",
      minWidth: 90,
      flex: 0.6,
    },
    {
      field: "remarks",
      headerName: "備考",
      minWidth: 160,
      flex: 1.1,
    },
    {
      field: "purchaseDate",
      headerName: "購入日",
      minWidth: 110,
      flex: 0.7,
    },
    {
      field: "supplyYear",
      headerName: "支給年",
      minWidth: 85,
      flex: 0.6,
    },
    {
      field: "replaceYear",
      headerName: "買替年",
      minWidth: 85,
      flex: 0.6,
    },
    {
      field: "status",
      headerName: "ステータス",
      minWidth: 105,
      flex: 0.7,
      renderCell: ({ value }) => (
        <Chip
          label={value}
          color={statusColor[value]}
          size="small"
          variant="outlined"
        />
      ),
    },
    {
      field: "actions",
      headerName: "操作",
      minWidth: 76,
      sortable: false,
      filterable: false,
      renderCell: () => (
        <Button
          size="small"
          startIcon={<VisibilityOutlinedIcon />}
        >
          詳細
        </Button>
      ),
    },
  ];


  return (
    <Box>

      {/* ページタイトル */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ sm: "center" }}
        spacing={2}
        sx={{ mb: 3 }}
      >
        <Box>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 700,
              color: "#172033",
              mb: 0.5,
            }}
          >
            PC一覧
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            PC資産の登録情報を確認・管理できます。
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<AddOutlinedIcon />}
          sx={{
            alignSelf: {
              xs: "flex-start",
              sm: "auto",
            },
            px: 2.25,
            py: 1,
            boxShadow: "none",
          }}
        >
          PCを登録
        </Button>
      </Stack>


      {/* クイックサーチ */}
      <Paper
        elevation={0}
        sx={{
          p: 2.5,
          mb: 2.5,
          border: "1px solid #e8edf5",
          borderRadius: 2.5,
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{ mb: 2 }}
        >
          <FilterListOutlinedIcon
            fontSize="small"
            color="primary"
          />

          <Typography fontWeight={700}>
            クイックサーチ
          </Typography>
        </Stack>


        {/* 検索フォーム */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: 2,
          }}
        >
          <TextField
            label="管理番号"
            size="small"
            value={filters.assetNo}
            onChange={updateFilter("assetNo")}
          />

          <TextField
            label="利用者"
            size="small"
            value={filters.userName}
            onChange={updateFilter("userName")}
          />

          <FormControl size="small">
            <InputLabel>部署</InputLabel>

            <Select
              label="部署"
              value={filters.department}
              onChange={updateFilter("department")}
            >
              <MenuItem value="">
                すべて
              </MenuItem>

              <MenuItem value="システム部">
                システム部
              </MenuItem>

              <MenuItem value="営業部">
                営業部
              </MenuItem>

              <MenuItem value="経理部">
                経理部
              </MenuItem>

              <MenuItem value="情報システム部">
                情報システム部
              </MenuItem>
            </Select>
          </FormControl>


          <FormControl size="small">
            <InputLabel>ステータス</InputLabel>

            <Select
              label="ステータス"
              value={filters.status}
              onChange={updateFilter("status")}
            >
              <MenuItem value="">
                すべて
              </MenuItem>

              <MenuItem value="利用中">
                利用中
              </MenuItem>

              <MenuItem value="予備">
                予備
              </MenuItem>

              <MenuItem value="修理中">
                修理中
              </MenuItem>

              <MenuItem value="廃棄">
                廃棄
              </MenuItem>
            </Select>
          </FormControl>
        </Box>


        {/* 検索ボタン */}
        <Stack
          direction="row"
          spacing={1.25}
          justifyContent="flex-end"
          sx={{ mt: 2.5 }}
        >
          <Button
            variant="outlined"
            color="inherit"
            startIcon={<RefreshOutlinedIcon />}
            onClick={clearFilters}
          >
            クリア
          </Button>

          <Button
            variant="contained"
            startIcon={<SearchOutlinedIcon />}
          >
            検索
          </Button>
        </Stack>
      </Paper>


      {/* PC一覧 */}
      <Paper
        elevation={0}
        sx={{
          border: "1px solid #e8edf5",
          borderRadius: 2.5,
          overflow: "hidden",
        }}
      >

        {/* 一覧ヘッダー */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ sm: "center" }}
          spacing={1}
          sx={{
            px: 2.5,
            py: 2,
            borderBottom: "1px solid #e8edf5",
          }}
        >
          <Typography fontWeight={700}>
            PC{" "}
            <Typography
              component="span"
              variant="body2"
              color="text.secondary"
            >
              （{rows.length}件）
            </Typography>
          </Typography>


          <Stack
            direction="row"
            spacing={1}
          >
            <Button
              size="small"
              startIcon={<DownloadOutlinedIcon />}
            >
              CSV出力
            </Button>

            <Button
              size="small"
              startIcon={<SettingsOutlinedIcon />}
            >
              表示設定
            </Button>
          </Stack>
        </Stack>


        {/* DataGrid */}
        <Box
          sx={{
            height: 515,
            width: "100%",
          }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            checkboxSelection
            disableRowSelectionOnClick
            pageSizeOptions={[10, 25, 50]}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                  page: 0,
                },
              },
            }}
            sx={{
              border: 0,

              "& .MuiDataGrid-columnHeaders": {
                bgcolor: "#f8fafc",
                borderBottomColor: "#e8edf5",
              },

              "& .MuiDataGrid-columnHeaderTitle": {
                fontWeight: 700,
                color: "#475467",
              },

              "& .MuiDataGrid-cell": {
                borderBottomColor: "#eef2f7",
              },

              "& .MuiDataGrid-row:hover": {
                bgcolor: "#f8fbff",
              },
            }}
          />
        </Box>
      </Paper>

    </Box>
  );
}