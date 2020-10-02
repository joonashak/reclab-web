import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

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

const Menu = ({ language }) => (
  <StaticQuery
    query={query}
  >
    {(data) => (
      <div>
        {`menu has language ${language}`}
        {data.allMenu.nodes.map((menuItem) => (
          <span key={menuItem.id}>{menuItem.title}</span>
        ))}
      </div>
    )}
  </StaticQuery>
);

Menu.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Menu;
