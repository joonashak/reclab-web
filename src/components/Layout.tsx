import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar/index';

const Layout = ({ language, children }) => (
  <div>
    <NavBar />
    {children}
    {console.log(language)}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
