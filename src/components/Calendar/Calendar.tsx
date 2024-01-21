import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { createTheme, ThemeProvider, Theme } from '@mui/material/styles';

const themeOptions: Theme = createTheme();

export default function BasicDateCalendar() {
  const theme: Theme = createTheme({
    components: {
      MuiTypography: {
        styleOverrides: {
          caption: {
            color: 'white', // Change the color of the text
          },
        },
      },
      MuiButtonBase: {
        styleOverrides: {
          root: {
            color: 'white', // Change the color of the entire button, including text
          },
        },
      },
    },
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <DateCalendar
          sx={{
            width: '200px',
            height: '300px',
          }}
        />
      </ThemeProvider>
    </LocalizationProvider>
  );
}
