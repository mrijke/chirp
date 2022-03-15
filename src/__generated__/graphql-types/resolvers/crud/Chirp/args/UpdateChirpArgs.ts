import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChirpUpdateInput } from "../../../inputs/ChirpUpdateInput";
import { ChirpWhereUniqueInput } from "../../../inputs/ChirpWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateChirpArgs {
  @TypeGraphQL.Field(_type => ChirpUpdateInput, {
    nullable: false
  })
  data!: ChirpUpdateInput;

  @TypeGraphQL.Field(_type => ChirpWhereUniqueInput, {
    nullable: false
  })
  where!: ChirpWhereUniqueInput;
}
