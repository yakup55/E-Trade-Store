import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link, useNavigate } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
const settings = ["Profile", "Account", "Dashboard"];
const pages = [
  {
    id: 1,
    name: "Products",
    url: "/products/list",
  },
  {
    id: 6,
    name: "Categories",
    url: "/categories/list",
  },

  {
    id: 3,
    name: "Contact",
    url: "/contact",
  },
];

const Navi = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleLogout = () => {
    handleCloseUserMenu();
    // setIsLogin(false);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (url) => {
    setAnchorElNav(null);
    navigate(url);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <header>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              E-TRADE-STORE
            </Typography>

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
                {pages.map((page) => (
                  <MenuItem
                    key={page.id}
                    onClick={() => handleCloseNavMenu(page.url)}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              E-TRADE-STORE
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  onClick={() => handleCloseNavMenu(page.url)}
                  sx={{ my: 2, color: "white", display: "block" }}
                  key={page.id}
                >
                  {page.name}
                </Button>
              ))}
            </Box>

            {/* <Badge badgeContent={cart.length} color="secondary"> */}
            <IconButton aria-label="favori">
              <FavoriteIcon
                onClick={() => navigate("/favoriteList")}
              ></FavoriteIcon>
            </IconButton>

            <IconButton aria-label="cart">
              <ShoppingBasketIcon onClick={() => navigate("/basketlist")} />
            </IconButton>
            <Button
              onClick={() => navigate("/login")}
              variant="contained"
              color="secondary"
            >
              Login
            </Button>
            <Button
              style={{ marginLeft: 10 }}
              variant="contained"
              color="secondary"
            >
              Kayıt Ol
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};
export default Navi;
