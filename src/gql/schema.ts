import { resolvers } from "@generated/type-graphql";
import { buildSchemaSync } from "type-graphql";

export const schema = buildSchemaSync({
  resolvers,
  validate: false,
});
