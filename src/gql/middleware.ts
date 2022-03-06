import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

import type { Express } from "express";

import { schema } from "./schema";

const prisma = new PrismaClient();

const server = new ApolloServer({
  schema,
  context: () => ({ prisma }),
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
});

export async function applyApolloMiddleware(app: Express) {
  await server.start();
  server.applyMiddleware({ app });
}
