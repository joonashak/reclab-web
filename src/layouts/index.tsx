import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar/index';

const Layout = ({ children }) => (
  <div>
    <NavBar>{children}</NavBar>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
