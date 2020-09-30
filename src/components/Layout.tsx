import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar/index';
import useLanguage from '../hooks/useLanguage';

const Layout = ({ language, children }) => {
  const [_, setLanguage] = useLanguage();

  // TODO: try doing this in the useLanguage hook instead
  useEffect(() => {
    setLanguage(language);
  }, []);

  return (
    <div>
      <NavBar />
      {children}
      {console.log(language)}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
