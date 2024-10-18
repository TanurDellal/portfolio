// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "800",
  },
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#fff",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#020617",
          boxShadow: "none",
        },
      },
    },
  },

  MuiIconButton: {
    styleOverrides: {
      root: {
        color: "#fff",
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        fontFamily: "Poppins, sans-serif", // Apply Poppins font to MenuItem
        fontWeight: "700", // You can adjust the weight as needed
      },
    },
  },
});

export default theme;
