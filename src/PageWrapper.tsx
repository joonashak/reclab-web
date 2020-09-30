import React from 'react';
import Layout from './components/Layout';

const PageWrapper = ({ element, props }) => {
  const { pageContext: { data: { language } } } = props;

  return (
    <Layout language={language}>{element}</Layout>
  );
};

export default PageWrapper;
