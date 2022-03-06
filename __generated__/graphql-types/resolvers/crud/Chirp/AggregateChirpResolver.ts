import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateChirpArgs } from "./args/AggregateChirpArgs";
import { Chirp } from "../../../models/Chirp";
import { AggregateChirp } from "../../outputs/AggregateChirp";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Chirp)
export class AggregateChirpResolver {
  @TypeGraphQL.Query(_returns => AggregateChirp, {
    nullable: false
  })
  async aggregateChirp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateChirpArgs): Promise<AggregateChirp> {
    return getPrismaFromContext(ctx).chirp.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
