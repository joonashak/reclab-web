import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar/index';

const Layout = ({ language, children }) => (
  <div>
    <NavBar language={language} />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.string.isRequired,
};

export default Layout;
