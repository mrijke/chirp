import "reflect-metadata";

import { schema } from "../src/gql/schema";
import { emitSchemaDefinitionFileSync } from "type-graphql";

emitSchemaDefinitionFileSync("../generated/schema.gql", schema);
