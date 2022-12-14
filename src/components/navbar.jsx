import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Link } from 'react-router-dom';

import './navbar.css';
import Search from '../components/search';
import SlideHorizontal from "../components/SlideHorizontal";
import movies from '../assets/json/movies.json';

const pages = ['Inicio', 'Lançamentos', 'Favoritos'];
const settings = ['Conta', 'Idioma', 'Sair'];


function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function NavBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#202023d9',
    border: '2px solid #ffffff92',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
    width: '70%',
    height: '60%',
  };

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar position="fixed" className="gradient">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'Kodchasan',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: '#50F127',
                  textDecoration: 'none',
                }}
                className="hover-primary"
              >
                BRFLIX
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  <MenuItem key={'Inicio'} href="/" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Inicio</Typography>
                  </MenuItem>

                  <MenuItem key={'Lancamentos'} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Lançamentos</Typography>
                  </MenuItem>

                  <MenuItem key={'Favoritos'} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Favoritos</Typography>
                  </MenuItem>

                </Menu>
              </Box>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'Kodchasan',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: '#50F127',
                  textDecoration: 'none',
                }}
                className="hover-primary"
              >
                BRFLIX
              </Typography>
              <Button onClick={handleOpen}>
                <Search info={'Search...'} />
              </Button>

              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title " variant="h6" component="h2">
                    <Search info={'Digite aqui...'} />
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <Box className="row mt-3">
                      <SlideHorizontal {...{ data: movies, height: 200, label: "fs-4 text" }} />
                    </Box>
                  </Typography>
                </Box>
                {/* <Button onClick={handleClose}>Close Child Modal</Button> */}
              </Modal>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button
                  key={'Inicio'}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  href="/"
                  className="hover-primary"
                >
                  Inicio
                </Button>

                <Button
                  key={'Lancamentos'}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  href="#"
                  className="hover-primary"
                >
                  Lançamentos
                </Button>
                <Button
                  key={'Favoritos'}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  href="#"
                  className="hover-primary"
                >
                  Favoritos
                </Button>
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Abrir configurações">
                  <Button onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Usuario" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkLRdCp3bUaqAhT7-otWvM-znHZJx4qckvcGx7WGIgHbGXMYHPNdEEpMvttQwt--dvOyI&usqp=CAU" />
                    <span className="px-2">
                      Igor R...
                    </span>
                  </Button>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Link
                        to={setting === 'Conta' ? `/account` : '#'}
                        className="text-decoration-none text-light">
                        {setting}
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
export default NavBar;
