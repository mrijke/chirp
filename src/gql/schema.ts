import { buildSchemaSync } from "type-graphql";
import {
  FindManyChirpResolver,
  ChirpRelationsResolver,
  FindUniqueChirpResolver,
} from "../../__generated__/graphql-types";

export const schema = buildSchemaSync({
  resolvers: [
    FindManyChirpResolver,
    FindUniqueChirpResolver,
    ChirpRelationsResolver,
  ],
});
