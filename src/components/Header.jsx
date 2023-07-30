import { AppBar, Box, Button, Link, Toolbar, Typography } from "@mui/material";
import React from "react";

const pages = ["Profile", "Groups", "Settings"]


const Header = () => {
  return (
    <Box
    sx={{ flexGrow: 1 }}
    >
    <AppBar 
    // position="static"
    >
      <Toolbar>
        <Link 
        href="#link to my profile"
        color="inherit"
        variant="h6"
        component="span"
        >
        Profile
        </Link>
        <Typography
        variant="h6" 
        component="span"
        sx={{ flexGrow: 1 }}
        >
          News
        </Typography>
        <Button
        color="inherit"
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
    </Box>
    
    // <img src="https://png.pngtree.com/png-clipart/20190604/original/pngtree-creative-company-logo-png-image_1197025.jpg" />
  );
};

export default Header;
