import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { Typography } from '@material-ui/core';

const Page = ({ pageContext }: InferProps<typeof Page.propTypes>) => (
  <>
    <Typography variant="h3">{pageContext.data.title}</Typography>
    <Typography>{pageContext.data.content}</Typography>
  </>
);

Page.propTypes = {
  pageContext: PropTypes.shape({
    data: PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Page;
