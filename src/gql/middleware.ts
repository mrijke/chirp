import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import type { Express } from "express";

import { prisma } from "../db";

import { schema } from "./schema";
import { getUserFromAuthHeader } from "./jwt";

const server = new ApolloServer({
  schema,
  context: async ({ req }) => {
    const authHeader = req.headers.authorization;
    let user;
    if (authHeader) {
      user = await getUserFromAuthHeader(authHeader);
    }
    return { prisma, user };
  },
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
});

export async function applyApolloMiddleware(app: Express) {
  await server.start();
  server.applyMiddleware({ app });
}
