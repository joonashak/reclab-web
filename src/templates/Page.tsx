import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const Page = ({ pageContext }: InferProps<typeof Page.propTypes>) => {
  const { t, i18n } = useTranslation();
  i18n.changeLanguage(pageContext.data.language);

  return (
    <>
      <p>
        {t('test')}
      </p>
      <p>
        Language={i18n.language}
      </p>
      <Typography variant="h3">{pageContext.data.title}</Typography>
      <Typography>{pageContext.data.content}</Typography>
    </>
  );
};

Page.propTypes = {
  pageContext: PropTypes.shape({
    data: PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Page;
