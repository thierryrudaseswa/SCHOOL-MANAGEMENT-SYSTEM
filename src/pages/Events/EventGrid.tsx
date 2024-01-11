// InvoiceGrid.tsx
import React from 'react';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import EventData from './EventData';

interface Props {
  columns: GridColDef[];
   rows:  EventData[];
}

const EventGrid = ({ columns, rows }: Props) => {
  return (
    <DataGrid
      checkboxSelection
      rows={rows}
      columns={columns}
      sx={{
        "& .MuiDataGrid-root": {
          border: "none",
          backgroundColor: "white",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
          "@apply text-sm": "",
        },
        "& .name-column--cell": {
          "@apply text-green-500": "",
        },
        "& .MuiDataGrid-columnHeaders": {
          "@apply bg-blue-700 text-white": "",
          borderBottom: "none",
        },
        "& .MuiDataGrid-virtualScroller": {
          "@apply bg-gray-200": "",
        },
        "& .MuiDataGrid-footerContainer": {
          "@apply bg-blue-700": "",
          borderTop: "none",
        },
        "& .MuiCheckbox-root": {
          "@apply text-green-300": "",
        },
      }}
    />
  );
};

export default EventGrid;
