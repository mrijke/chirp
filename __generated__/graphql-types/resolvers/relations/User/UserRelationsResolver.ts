import * as TypeGraphQL from "type-graphql";
import { Chirp } from "../../../models/Chirp";
import { User } from "../../../models/User";
import { UserChirpsArgs } from "./args/UserChirpsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Chirp], {
    nullable: false
  })
  async chirps(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserChirpsArgs): Promise<Chirp[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).chirps(args);
  }
}
