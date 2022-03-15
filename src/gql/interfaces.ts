import { PrismaClient, User } from "@prisma/client";

export interface IContext {
  prisma: PrismaClient;
  user?: User;
}
