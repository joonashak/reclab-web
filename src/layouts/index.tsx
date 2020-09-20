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
import { graphql, StaticQuery } from 'gatsby';

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

const Layout = ({ children }) => {
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
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <StaticQuery
        query={graphql`
          query {
            allMenu {
              nodes {
                order
                route {
                  path
                }
                title
                alternative_id
                alternative_parent {
                  route {
                    path
                  }
                  title
                  order
                  alternative_id
                }
              }
            }
          }
        `}
        render={(data) => <div>moi{console.log(data)}</div>}
      />
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
