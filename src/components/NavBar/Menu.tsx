import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';

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
  console.log(i18n.language);
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
