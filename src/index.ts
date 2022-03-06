import "reflect-metadata";
import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

import { schema } from "./gql/schema";

const prisma = new PrismaClient();

export const server = new ApolloServer({
  schema,
  context: () => ({ prisma }),
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
});

const port = 4000;
server.listen({ port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
