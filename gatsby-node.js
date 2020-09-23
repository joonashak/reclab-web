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
