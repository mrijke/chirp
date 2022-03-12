import { buildSchemaSync } from "type-graphql";
import {
  FindManyChirpResolver,
  ChirpRelationsResolver,
} from "../../__generated__/graphql-types";

export const schema = buildSchemaSync({
  resolvers: [FindManyChirpResolver, ChirpRelationsResolver],
});
