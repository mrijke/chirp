import "reflect-metadata";

import cors from "cors";
import express from "express";
import morgan from "morgan";
import process from "process";

import { applyApolloMiddleware } from "./gql/middleware";
import { handleAuth0PostAuth } from "./api";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("combined"));

app.post("/api/auth/hook", handleAuth0PostAuth);

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
