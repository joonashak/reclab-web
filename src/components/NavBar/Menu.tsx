import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import useLanguage from '../../hooks/useLanguage';

const query = graphql`
query {
  allMenu {
    nodes {
      order
      title
      id: alternative_id
      parent: alternative_parent {
        title
        order
        id: alternative_id
      }
    }
  }
}
`;

export default () => {
  const { i18n } = useTranslation();
  const [language] = useLanguage();
  console.log(language);
  return (
    <StaticQuery
      query={query}
    >
      {(data) => (
        <div>
          {data.allMenu.nodes.map((menuItem) => (
            <span key={menuItem.id}>{menuItem.title}</span>
          ))}
        </div>
      )}
    </StaticQuery>
  );
};
