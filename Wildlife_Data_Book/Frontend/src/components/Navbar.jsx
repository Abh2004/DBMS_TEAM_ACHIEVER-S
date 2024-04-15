import React, { useState } from "react"
import { Link as RouterLink, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { FlexRC } from "../styles"
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Divider,
  Popover,
  Stack,
} from "@mui/material"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import MenuIcon from "@mui/icons-material/Menu"

import { appName, navLinks, userLinks, font, images } from "../constants"
import { handleLogout } from "../actions/auth"

function LogoBox({ sx }) {
  return (
    <Box sx={sx}>
      <RouterLink to="/">
        <FlexRC>
          <Box
            component="img"
            alt="Logo"
            src={images.logo}
            sx={{
              width: { xs: 43, md: 45 },
              height: { xs: 43, md: 45 },
              mr: 2,
            }}
          />
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {appName}
          </Typography>
        </FlexRC>
      </RouterLink>
    </Box>
  )
}

export default function Navbar(props) {
  const { user, setUser } = props

  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleUserLogout = () => {
    dispatch(handleLogout(navigate))
    setUser(null)
    handleCloseUserMenu()
  }

  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <LogoBox sx={{ display: { xs: "none", md: "flex" } }} />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
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
              {navLinks.map((link) => (
                <MenuItem
                  key={`navmenu_${link.name}`}
                  onClick={handleCloseNavMenu}
                >
                  <Typography
                    textAlign="center"
                    component={RouterLink}
                    to={link.path}
                  >
                    {link.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <LogoBox sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }} />

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {navLinks.map((link) => (
              <Button
                key={`navlink_${link.name}`}
                color="inherit"
                LinkComponent={RouterLink}
                to={link.path}
                sx={{
                  fontFamily: font.secondary,
                  px: 2,
                }}
              >
                {link.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {user ? (
              <>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <AccountCircleIcon sx={{ fontSize: 40 }} />
                </IconButton>
                <Popover
                  open={Boolean(anchorElUser)}
                  anchorEl={anchorElUser}
                  onClose={handleCloseUserMenu}
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                  sx={{ mt: 1 }}
                >
                  <Box sx={{ my: 1.5, px: 2.5 }}>
                    <Typography variant="subtitle2" noWrap>
                      {`${user.first_name} ${user.last_name}`}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                      noWrap
                    >
                      {user.email}
                    </Typography>
                  </Box>

                  <Divider sx={{ borderStyle: "dashed" }} />

                  <Stack>
                    {userLinks.map(
                      (link) =>
                        user.user_type === link.userType && (
                          <MenuItem
                            key={link.name}
                            component={RouterLink}
                            to={link.path}
                            onClick={handleCloseUserMenu}
                          >
                            {link.name}
                          </MenuItem>
                        )
                    )}
                  </Stack>

                  <Divider sx={{ borderStyle: "dashed" }} />

                  <MenuItem onClick={handleUserLogout}>Logout</MenuItem>
                </Popover>
              </>
            ) : (
              <Button
                variant="outlined"
                color="inherit"
                component={RouterLink}
                to="/signin"
              >
                Sign in
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
