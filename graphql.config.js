module.exports = {
  schema: ["__generated__/schema.gql"],
  documents: ["frontend/src/**/*.gql"],
  extensions: {
    endpoints: {
      default: {
        url: "http://localhost:5000/graphql",
      },
    },
  },
};
