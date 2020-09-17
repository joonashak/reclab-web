import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <div>
    <h1>hi, layout</h1>
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
