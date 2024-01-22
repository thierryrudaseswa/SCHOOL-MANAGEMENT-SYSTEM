// InvoiceGrid.tsx
import React from 'react';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { InvoiceData, FeeData } from './InvoiceData';
import "./Finance.css"

interface Props {
  columns: GridColDef[];
  rows: InvoiceData[];
  darkMode?: boolean;
}

const InvoiceGrid = ({ columns, rows, darkMode = false }: Props) => {
  return (
    <DataGrid
      checkboxSelection
      rows={rows}
      columns={columns}
      getRowId={(row) => row.id}
      getRowClassName={(params) => (darkMode ? 'dark-mode-row' : '#808080')}
      sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-columnHeaders": {
          "@apply bg-blue-700 text-green": "#808080 ",
          color: darkMode ? 'white' : '#808080 ', 
          borderBottom: "none",
        },
        "& .MuiDataGrid-virtualScroller": {
          scrollbarWidth: "thin",  
          "&::-webkit-scrollbar": {
            width: "3px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: darkMode ? 'white' : '#808080 ',
          },
        },
        "& .MuiDataGrid-footerContainer": {
          "@apply bg-blue-700": "",
          background:"#cccccc",
          color: darkMode ? 'white' : '#808080 ', 
          borderTop: "none",
        },
        "& .MuiCheckbox-root": {
          "@apply text-green-300": "",
        },
        "& .MuiDataGrid-cell": {
          color: darkMode ? 'white' : '#808080 ', 
        },
        "& .MuiDataGrid-cell[data-field='email']": {
          color: darkMode ? 'white' : '#808080 ', 
        },
        "& .MuiDataGrid-cell[data-field='name']": {
          color: darkMode ? 'white' : '#808080 ', 
        },
        "& .MuiDataGrid-cell[data-field='id']": {
          color: darkMode ? 'white' : '#808080 ', 
        },
        "& .MuiDataGrid-cell[data-field='gender']": {
          color: darkMode ? 'white' : '#808080 ', 
        },
        "& .MuiDataGrid-cell[data-field='remaining']": {
          color: darkMode ? 'white' : '#808080 ', 
        },
        "& .MuiDataGrid-cell[data-field='paid']": {
          color: darkMode ? 'white' : '#808080 ', 
        },
        "& .MuiDataGrid-row:hover": {
          background: darkMode ? '#374151' : '#CBD5E0', 
        },
      }}
      className=' '
      style={{height:"69vh"}}
    />
  );
};

export default InvoiceGrid;
