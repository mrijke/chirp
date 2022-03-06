// very stupid script that strips out part of the schema.prisma in order to save a few MB in the Docker image

import childprocess from "child_process";
import fs from "fs";
import path from "path";

const prismaDir = path.join(__dirname, "..", "prisma");

const prismaSchema = fs.readFileSync(path.join(prismaDir, "schema.prisma"));

const newSchema = prismaSchema
  .toString()
  .replace(
    /([\s\S]*)\/\/ START DISABLE GENERATOR PROD\n[\s\S]*\/\/ END DISABLE GENERATOR PROD\n([\s\S]*)/gm,
    "$1$2"
  );

fs.writeFileSync(path.join(prismaDir, "schema-prod.prisma"), newSchema);

const output = childprocess.execSync(
  `yarn prisma generate --schema ${path.join(prismaDir, "schema-prod.prisma")}`
);

console.log(output.toString());

fs.rmSync(path.join(prismaDir, "schema-prod.prisma"));
