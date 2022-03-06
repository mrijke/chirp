import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChirpCreateInput } from "../../../inputs/ChirpCreateInput";

@TypeGraphQL.ArgsType()
export class CreateChirpArgs {
  @TypeGraphQL.Field(_type => ChirpCreateInput, {
    nullable: false
  })
  data!: ChirpCreateInput;
}
