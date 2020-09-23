exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type page implements Node @dontInfer {
      alternative_id: ID
      title: String
      content: String
      updatedAt: Date
      isPublic: Boolean
    }
  `);
};
