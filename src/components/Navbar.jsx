import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { IconButton, Menu, MenuItem, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
//import svg from "public/td-high-resolution-logo-white-transparent.svg";
const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            height: "64px", // Ensure it doesn't exceed the height of the Toolbar
            width: "64px",
            padding: "10px 0",
          }}
        >
          <Link to="/">
            <img
              src="src/assets/logo.png"
              alt="Logo"
              style={{
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Link>
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              sx={{
                "& .MuiPaper-root": {
                  backgroundColor: "rgba(0, 0, 0, 0.6)", // Transparent menu background
                  border: "1px solid rgba(255, 255, 255, 0.3)", // Border for the entire menu
                  color: "white",
                  margin: 0,
                },
                "& .MuiMenu-list": {
                  paddingTop: 0, // Remove the top padding
                  paddingBottom: 0, // Remove the bottom padding
                },
              }}
            >
              <MenuItem
                onClick={handleMenuClose}
                component={NavLink}
                to="/about"
                sx={{ borderBottom: "1px solid rgba(255, 255, 255, 0.3)" }}
              >
                About
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                component={NavLink}
                to="/projects"
                sx={{ borderBottom: "1px solid rgba(255, 255, 255, 0.3)" }}
              >
                Projects
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                component={NavLink}
                to="/tech"
                sx={{ borderBottom: "1px solid rgba(255, 255, 255, 0.3)" }}
              >
                Tech
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                component={NavLink}
                to="/experience"
                sx={{ borderBottom: "1px solid rgba(255, 255, 255, 0.3)" }}
              >
                Experience
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                component={NavLink}
                to="/contact"
              >
                Contact
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Box>
            <Button
              sx={{
                color: "white",
                position: "relative",
                "&:hover": {
                  backgroundColor: "transparent",
                  backdropFilter: "blur(1px)",
                  webkitBackdropFilter: "blur(1px)",
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "0",
                  height: "2px",
                  bottom: "0",
                  left: "50%",
                  backgroundColor: "white",
                  transition: "width 0.3s ease, left 0.3s ease",
                },
                "&:hover::after": {
                  width: "100%",
                  left: "0",
                },
              }}
            >
              About
            </Button>
            <Button
              sx={{
                color: "white",
                position: "relative",
                "&:hover": {
                  backgroundColor: "transparent",
                  backdropFilter: "blur(1px)",
                  webkitBackdropFilter: "blur(1px)",
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "0",
                  height: "2px",
                  bottom: "0",
                  left: "50%",
                  backgroundColor: "white",
                  transition: "width 0.3s ease, left 0.3s ease",
                },
                "&:hover::after": {
                  width: "100%",
                  left: "0",
                },
              }}
            >
              Projects
            </Button>
            <Button
              sx={{
                color: "white",
                position: "relative",
                "&:hover": {
                  backgroundColor: "transparent",
                  backdropFilter: "blur(1px)",
                  webkitBackdropFilter: "blur(1px)",
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "0",
                  height: "2px",
                  bottom: "0",
                  left: "50%",
                  backgroundColor: "white",
                  transition: "width 0.3s ease, left 0.3s ease",
                },
                "&:hover::after": {
                  width: "100%",
                  left: "0",
                },
              }}
            >
              Tech
            </Button>
            <Button
              sx={{
                color: "white",
                position: "relative",
                "&:hover": {
                  backgroundColor: "transparent",
                  backdropFilter: "blur(1px)",
                  webkitBackdropFilter: "blur(1px)",
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "0",
                  height: "2px",
                  bottom: "0",
                  left: "50%",
                  backgroundColor: "white",
                  transition: "width 0.3s ease, left 0.3s ease",
                },
                "&:hover::after": {
                  width: "100%",
                  left: "0",
                },
              }}
            >
              Experience
            </Button>
            <Button
              sx={{
                color: "white",
                position: "relative",
                backdropFilter: "blur(1px)",
                webkitBackdropFilter: "blur(1px)",
                "&:hover": { backgroundColor: "transparent" },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "0",
                  height: "2px",
                  bottom: "0",
                  left: "50%",
                  backgroundColor: "white",
                  transition: "width 0.3s ease, left 0.3s ease",
                },
                "&:hover::after": {
                  width: "100%",
                  left: "0",
                },
              }}
            >
              Contact
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
