import "reflect-metadata";

import express from "express";
import path from "path";
import process from "process";

import { applyApolloMiddleware } from "./gql/middleware";

const app = express();

applyApolloMiddleware(app);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

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
