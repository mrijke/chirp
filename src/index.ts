import "reflect-metadata";

import cors from "cors";
import express from "express";
import process from "process";

import { applyApolloMiddleware } from "./gql/middleware";

const app = express();

app.use(cors());

applyApolloMiddleware(app);

const port = process.env.PORT ?? 5000;
const server = app.listen({ port }, () => {
  console.log(`🚀  Server ready!`);
});

function shutDown() {
  console.log("🔚 Going down!");
  server.close(() => {
    console.log(`💤 Goodbye!`);
  });
  process.exit(0);
}

process.on("SIGTERM", shutDown);
process.on("SIGINT", shutDown);
