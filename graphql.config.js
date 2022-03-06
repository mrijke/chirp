module.exports = {
  schema: ["generated/schema.gql"],
  documents: ["frontend/src/**/*.gql"],
  extensions: {
    endpoints: {
      default: {
        url: "http://localhost:4000",
      },
    },
  },
};
