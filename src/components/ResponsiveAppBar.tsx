import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";

import { Badge } from "@mui/material";
import { routes } from "../Routers/routes";

const BADGE_CONTENT = 0;

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const title = "Início";
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (url: string) => {
    setAnchorElNav(null);
    navigate(url);
  };

  return (
    <AppBar
      style={{ backgroundColor: "#FFFFFF", color: "#F97316" }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Badge badgeContent={BADGE_CONTENT} color="secondary">
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "sans-serif",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {title}
            </Typography>
          </Badge>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {routes.map((page) => (
                <MenuItem
                  key={page.path}
                  onClick={() => handleCloseNavMenu(page.path)}
                >
                  {page.path === "/" ? (
                    <Badge badgeContent={BADGE_CONTENT} color="secondary">
                      <Typography textAlign="center">{page.label}</Typography>
                    </Badge>
                  ) : (
                    <Typography textAlign="center">{page.label}</Typography>
                  )}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "sans-serif",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {title}
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: { md: "flex-end" },
            }}
          >
            {routes.map((page) => {
              return page.path === "/" ? (
                <Button
                  key={page.path}
                  onClick={() => handleCloseNavMenu(page.path)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Badge badgeContent={BADGE_CONTENT} color="secondary">
                    {page.label}
                  </Badge>
                </Button>
              ) : (
                <Button
                  key={page.path}
                  onClick={() => handleCloseNavMenu(page.path)}
                  sx={{ my: 2, color: "#000", display: "block" }}
                >
                  {page.label}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
