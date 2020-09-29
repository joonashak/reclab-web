const path = require('path');

exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type page implements Node @dontInfer {
      alternative_id: ID!
      title: String!
      content: String!
      createdAt: Date
      updatedAt: Date
      isPublic: Boolean!
      language: String!
      path: String
    }

    type menu implements Node {
      alternative_id: ID!
      title: String!
      order: Int!
      path: String
      language: String!
      alternative_parent: menu
      page: page
    }
  `);
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allPage(filter: { id: { ne: "dummy" } }) {
        nodes {
          id: alternative_id
          title
          content
          path
          language
        }
      }
    }
  `);

  result.data.allPage.nodes.forEach((page) => {
    createPage({
      path: page.path,
      component: path.resolve('./src/templates/Page.tsx'),
      context: {
        data: page,
      },
    });
  });
};
