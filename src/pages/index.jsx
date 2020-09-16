/* eslint-disable react/prop-types */
import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello production!</h1>
    <p>This page is deployed through github actions.</p>
    <p>Now go build something great.</p>
    {data.allPages.nodes.map((a) => <p key={a.title}>{a.title}</p>)}
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    {' '}
    <br />
    <Link to="/using-typescript/">Go to Using TypeScript</Link>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query {
    allPages(filter: {id: {ne: "dummy"}}) {
      nodes {
        title
        content
        id
      }
    }
  }
`;