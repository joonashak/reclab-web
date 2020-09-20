import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMenu {
          nodes {
            order
            route {
              path
            }
            title
            alternative_id
            alternative_parent {
              route {
                path
              }
              title
              order
              alternative_id
            }
          }
        }
      }
    `}
    render={(data) => (
      <div>
        {data.allMenu.nodes.map((menuItem) => (
          <span key={menuItem.alternative_id}>{menuItem.title}</span>
        ))}
      </div>
    )}
  />
);
