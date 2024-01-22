// EventGrid.tsx
import React from 'react';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import EventData from './EventData';

interface Props {
  columns: GridColDef[];
  rows: EventData[];
  darkMode?: boolean;
}

const EventGrid = ({ columns, rows, darkMode = false }: Props) => {
  const footerBackgroundColor = darkMode ? '#374151' : '#1976D2';

  return (
    <DataGrid
      checkboxSelection
      rows={rows}
      columns={columns}
      getRowId={(row) => row.id}
      getRowClassName={(params) => (darkMode ? 'dark-mode-row' : '#808080')}
      className=' dark:bg-dark'
      sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-columnHeaders": {
          "@apply bg-blue-700 text-green": "#808080 ",
          color: darkMode ? 'white' : '#808080 ',
          borderBottom: "none",
        },
        "& .name-column--cell": {
          "@apply text-green-500": "",
        },
        "& .MuiDataGrid-virtualScroller": {
          scrollbarWidth: "thin",
          "&::-webkit-scrollbar": {
            width: "3px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: darkMode ? 'white' : '#808080',
          },
        },
        "& .MuiDataGrid-footerContainer": {
          background: "#ccc",
          borderTop: "none",
        },
        "& .MuiCheckbox-root": {
          "@apply text-green-300": "",
        },
        "& .MuiDataGrid-cell": {
          color: darkMode ? 'white' : '#808080 ',
        },
        "& .MuiDataGrid-cell[data-field='name']": {
          color: darkMode ? 'white' : '#808080 ',
        },
        "& .MuiDataGrid-cell[data-field='id']": {
          color: darkMode ? 'white' : '#808080 ',
        },
        "& .MuiDataGrid-row:hover": {
          background: darkMode ? '#374151' : '#CBD5E0', 
        },
      }}
    />
  );
};

export default EventGrid;
