import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar/index';

const Layout = ({ children }) => (
  <div>
    <NavBar />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
