import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChirpWhereInput } from "../../../inputs/ChirpWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyChirpArgs {
  @TypeGraphQL.Field(_type => ChirpWhereInput, {
    nullable: true
  })
  where?: ChirpWhereInput | undefined;
}
