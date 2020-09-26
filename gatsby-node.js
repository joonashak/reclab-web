const path = require('path');

exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type language {
      alternative_id: ID!
      code: String!
      name: String!
    }

    type route {
      alternative_id: ID!
      path: String!
    }

    type page implements Node @dontInfer {
      alternative_id: ID!
      title: String!
      content: String!
      updatedAt: Date
      isPublic: Boolean!
      language: language!
    }

    type menu implements Node {
      alternative_id: ID!
      title: String!
      order: Int!
      path: String
      language: language!
      alternative_parent: menu
      route: route
    }
  `);
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allPage(filter: { id: { ne: "dummy" } }) {
        nodes {
          title
          content
          id: alternative_id
          language {
            id: alternative_id
            code
            name
          }
        }
      }
    }
  `);

  result.data.allPage.nodes.forEach((page) => {
    createPage({
      path: page.id,
      component: path.resolve('./src/templates/Cms.jsx'),
    });
  });
};
