import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChirpCreateInput } from "../../../inputs/ChirpCreateInput";
import { ChirpUpdateInput } from "../../../inputs/ChirpUpdateInput";
import { ChirpWhereUniqueInput } from "../../../inputs/ChirpWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertChirpArgs {
  @TypeGraphQL.Field(_type => ChirpWhereUniqueInput, {
    nullable: false
  })
  where!: ChirpWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChirpCreateInput, {
    nullable: false
  })
  create!: ChirpCreateInput;

  @TypeGraphQL.Field(_type => ChirpUpdateInput, {
    nullable: false
  })
  update!: ChirpUpdateInput;
}
