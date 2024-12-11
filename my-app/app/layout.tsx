"use client";
import React, { useState } from "react";
import { AppBar, Menu, MenuItem, Toolbar, Typography, Button, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Image from 'next/image';

import Footer from "./components/footer";

const theme = createTheme({
  palette: {
    primary: { main: "#FFA500" },
    secondary: { main: "#195905" },
  },
  typography: {
    fontFamily: "ITC Galliard Roman, Georgia, serif",
  },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }


  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <AppBar position="static">
            <Toolbar>
              <Typography component={Link} href="/" variant="h6" sx={{ flexGrow: 1 }}>
                <Image width={500} height={500} src="/images/logo.png" alt="Logo" style={{ width: "20%", height: "auto" }} />
              </Typography>
              {/* Hamburger Menu for Mobile */}
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleMenuOpen}
                sx={{ display: { xs: "block", md: "none" } }} // Visible only on mobile
              >
                <MenuIcon />
              </IconButton>
              {/* Desktop Buttons */}
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Button color="inherit" component={Link} href="/">
                  Home
                </Button>
                <Button color="inherit" component={Link} href="/projects/partners">
                  Our Partners
                </Button>
                <Button color="inherit" component={Link} href="/projects/ongoing">
                  Our Work
                </Button>
                <Button color="inherit" component={Link} href="/donate">
                  Contribute
                </Button>
              </Box>
            </Toolbar>
          </AppBar>

          {/* Drawer for Mobile */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{
              display: { xs: "block", md: "none" },
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Soft shadow
              borderRadius: "8px", // Rounded corners
              padding: "10px", // Padding around the menu
            }}
          >

            <MenuItem onClick={handleMenuClose} color="inherit" component={Link} href="/" sx={{
              fontFamily: "Cursive, sans-serif",
              fontSize: "1.1rem",
              color: "#333",
              '&:hover': {
                backgroundColor: "#e0e0e0",
              },
            }}>
              Home
            </MenuItem>
            <MenuItem onClick={handleMenuClose} color="inherit" component={Link} href="/projects/partners" sx={{
              fontFamily: "Cursive, sans-serif",
              fontSize: "1.1rem",
              color: "#333",
              '&:hover': {
                backgroundColor: "#e0e0e0",
              },
            }}>
              Our Partners
            </MenuItem>
            <MenuItem onClick={handleMenuClose} color="inherit" component={Link} href="/projects/ongoing" sx={{
              fontFamily: "Cursive, sans-serif",
              fontSize: "1.1rem",
              color: "#333",
              '&:hover': {
                backgroundColor: "#e0e0e0",
              },
            }}>
              Our Work
            </MenuItem>
            <MenuItem onClick={handleMenuClose} color="inherit" component={Link} href="/donate" sx={{
              fontFamily: "Cursive, sans-serif",
              fontSize: "1.1rem",
              color: "#333",
              '&:hover': {
                backgroundColor: "#e0e0e0",
              },
            }}>
              Contribute
            </MenuItem>
          </Menu>

          {/* Page Content */}
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

