import "reflect-metadata";

import path from "path";
import { schema } from "../src/gql/schema";
import { emitSchemaDefinitionFileSync } from "type-graphql";

emitSchemaDefinitionFileSync(
  path.join(__dirname, "..", "__generated__", "schema.gql"),
  schema
);
