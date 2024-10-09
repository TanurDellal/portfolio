import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { IconButton, Menu, MenuItem, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { sections } from "../../index";
import styles from "./Navbar.module.css";
import img from "../../assets/images/logo/logo.png";

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 700px)");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" className={styles.navbar}>
      <Toolbar className={styles.toolbar}>
        <Typography
          variant="h6"
          component="div"
          className={styles.logoContainer}
        >
          <ScrollLink to="landing" smooth={true} duration={500}>
            <img
              src={img}
              alt="Logo"
              className={styles.logo}
              onDragStart={(e) => e.preventDefault()}
              draggable="false"
            />
          </ScrollLink>
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
              className={styles.menuButton}
            >
              <MenuIcon className={styles.icon} />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              sx={{
                "& .MuiPaper-root": {
                  backgroundColor: "rgba(0, 0, 0, 0.6)", // Transparent menu background
                  border: "1px solid rgba(255, 255, 255, 0.3)", // Border for the entire menu
                  backdropFilter: "blur(5px)",
                  color: "white",
                  margin: 0,
                },
                "& .MuiMenu-list": {
                  paddingTop: 0, // Remove the top padding
                  paddingBottom: 0, // Remove the bottom padding
                },
              }}
            >
              {sections.map((section) => (
                <MenuItem
                  key={section}
                  onClick={() => {
                    handleMenuClose();
                    document
                      .getElementById(section)
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                  className={styles.menuItem}
                  sx={{
                    fontFamily: "Poppins, sans-serif", // Apply Poppins font to MenuItem
                    fontWeight: "600",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                  }}
                >
                  {section.toUpperCase()}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box>
            {sections.map((section) => (
              <Button
                key={section}
                sx={{ marginRight: "12px", fontWeight: "600" }}
                className={styles.link}
                onClick={() => {
                  handleMenuClose();
                  document
                    .getElementById(section)
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                {section.toUpperCase()}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
