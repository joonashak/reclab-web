import React, { useContext, createContext, useState } from 'react';
import PropTypes from 'prop-types';

const defaultState = {
  type: null,
  message: null,
  autoHide: false,
};

const LanguageContext = createContext([[], () => {}]);

const LanguageProvider = ({ children }) => {
  const [state, setState] = useState('en');

  return (
    <LanguageContext.Provider value={[state, setState]}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { LanguageProvider };

export default () => {
  const [state, setState] = useContext(LanguageContext);

  return [state, setState];
};
