"use client";
import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Image from 'next/image';

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
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <AppBar position="static">
            <Toolbar>
              <Typography component={Link} href="/" variant="h6" sx={{ flexGrow: 1 }}>
                <Image width={400} height={400} src="/images/logo.png" alt="Logo" style={{ width: "15%", height: "auto" }} />
              </Typography>
              {/* Hamburger Menu for Mobile */}
              <IconButton
                color="inherit"
                edge="start"
                onClick={toggleDrawer(true)}
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
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            sx={{ display: { xs: "block", md: "none" } }} // Visible only on mobile
          >
            <Box
              sx={{ width: 250, p: 2 }}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <Button fullWidth color="inherit" component={Link} href="/">
                Home
              </Button>
              <Button fullWidth color="inherit" component={Link} href="/projects/partners">
                Creating Libraries
              </Button>
              <Button fullWidth color="inherit" component={Link} href="/projects/ongoing">
                On-Going Projects
              </Button>
              <Button fullWidth color="inherit" component={Link} href="/donate">
                Donate
              </Button>
            </Box>
          </Drawer>

          {/* Page Content */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

