import React from 'react';
import PropTypes from 'prop-types';
import Layout from './components/Layout';

const PageWrapper = ({ language, children }) => (
  <Layout language={language}>{children}</Layout>
);

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.string.isRequired,
};

export default PageWrapper;
