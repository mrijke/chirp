import * as TypeGraphQL from "type-graphql";
import { Chirp } from "../../../models/Chirp";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Chirp)
export class ChirpRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async author(@TypeGraphQL.Root() chirp: Chirp, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).chirp.findUnique({
      where: {
        id: chirp.id,
      },
    }).author({});
  }
}
