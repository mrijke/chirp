import { AuthenticationError } from "apollo-server-express";
import { Args, Ctx, Mutation, Resolver } from "type-graphql";
import { Chirp, CreateChirpArgs } from "../../__generated__/graphql-types";
import { IContext } from "../interfaces";

@Resolver(Chirp)
export class CreateChirpResolver {
  @Mutation((_returns) => Chirp, { nullable: false })
  async createChirp(@Ctx() context: IContext, @Args() args: CreateChirpArgs) {
    if (!context.user) {
      throw new AuthenticationError("No proper token provided!");
    }
    return await context.prisma.chirp.create({
      data: { ...args.data, authorId: context.user.id },
    });
  }
}
