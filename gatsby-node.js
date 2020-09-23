exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type language {
      alternative_id: ID
      code: String
      name: String
    }

    type page implements Node @dontInfer {
      alternative_id: ID
      title: String
      content: String
      updatedAt: Date
      isPublic: Boolean
      language: language
    }
  `);
};
