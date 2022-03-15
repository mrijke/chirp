import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChirpScalarWhereInput } from "../inputs/ChirpScalarWhereInput";
import { ChirpUpdateManyMutationInput } from "../inputs/ChirpUpdateManyMutationInput";

@TypeGraphQL.InputType("ChirpUpdateManyWithWhereWithoutAuthorInput", {
  isAbstract: true
})
export class ChirpUpdateManyWithWhereWithoutAuthorInput {
  @TypeGraphQL.Field(_type => ChirpScalarWhereInput, {
    nullable: false
  })
  where!: ChirpScalarWhereInput;

  @TypeGraphQL.Field(_type => ChirpUpdateManyMutationInput, {
    nullable: false
  })
  data!: ChirpUpdateManyMutationInput;
}
