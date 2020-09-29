import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from './Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Recover Laboratory
          </Typography>
          <Menu />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      {children}
    </div>
  );
};

NavBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavBar;
