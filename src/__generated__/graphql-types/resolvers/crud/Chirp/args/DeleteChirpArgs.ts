import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChirpWhereUniqueInput } from "../../../inputs/ChirpWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteChirpArgs {
  @TypeGraphQL.Field(_type => ChirpWhereUniqueInput, {
    nullable: false
  })
  where!: ChirpWhereUniqueInput;
}
