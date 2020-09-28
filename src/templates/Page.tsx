/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import { Typography } from '@material-ui/core';

export default ({ pageContext }) => (
  <>
    <Typography variant="h3">{pageContext.data.title}</Typography>
    <Typography>{pageContext.data.content}</Typography>
  </>
);
