import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

export default () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={(data) => (
      <div>
        {data.allMenu.nodes.map((menuItem) => (
          <span key={menuItem.id}>{menuItem.title}</span>
        ))}
      </div>
    )}
  />
);
