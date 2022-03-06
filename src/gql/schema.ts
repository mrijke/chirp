import { resolvers } from "../../__generated__/graphql-types";
import { buildSchemaSync } from "type-graphql";

export const schema = buildSchemaSync({
  resolvers,
  validate: false,
});
