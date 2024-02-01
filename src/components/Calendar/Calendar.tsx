import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { createTheme, ThemeProvider, Theme } from '@mui/material/styles';
import React from 'react';

const themeOptions: Theme = createTheme();

export default function BasicDateCalendar() {
  const [darkMode, setDarkMode] = useState(false);

  const theme: Theme = createTheme({
    components: {
      MuiTypography: {
        styleOverrides: {
          caption: {
            color: darkMode ? 'white' : 'black',
          },
        },
      },
      MuiButtonBase: {
        styleOverrides: {
          root: {
            color: darkMode ? 'white' : 'black',
          },
        },
      },
    },
  });

  const darkModeClassName = darkMode ? 'dark bg-dark text-white' : '';

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <DateCalendar
          className={darkModeClassName}
          sx={{
            width: '200px',
            height: '300px',
            color: darkMode ? '#ccc' : '#ccc', // change the text color based on the mode
            '& .MuiPickersDay-day': {
              color: darkMode ? '#ccc' : '#ccc', // change the day color based on the mode
            },
          }}
        />
      </ThemeProvider>
    </LocalizationProvider>
  );
}
