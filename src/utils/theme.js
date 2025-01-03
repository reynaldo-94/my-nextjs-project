import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: {
    fontFamily: "'Geist Sans', 'Geist Mono', 'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
});

export default theme;
