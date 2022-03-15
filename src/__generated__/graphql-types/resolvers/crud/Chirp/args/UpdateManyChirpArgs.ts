import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChirpUpdateManyMutationInput } from "../../../inputs/ChirpUpdateManyMutationInput";
import { ChirpWhereInput } from "../../../inputs/ChirpWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyChirpArgs {
  @TypeGraphQL.Field(_type => ChirpUpdateManyMutationInput, {
    nullable: false
  })
  data!: ChirpUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ChirpWhereInput, {
    nullable: true
  })
  where?: ChirpWhereInput | undefined;
}
