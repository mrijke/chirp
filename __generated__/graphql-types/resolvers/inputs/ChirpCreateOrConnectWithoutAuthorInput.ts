import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChirpCreateWithoutAuthorInput } from "../inputs/ChirpCreateWithoutAuthorInput";
import { ChirpWhereUniqueInput } from "../inputs/ChirpWhereUniqueInput";

@TypeGraphQL.InputType("ChirpCreateOrConnectWithoutAuthorInput", {
  isAbstract: true
})
export class ChirpCreateOrConnectWithoutAuthorInput {
  @TypeGraphQL.Field(_type => ChirpWhereUniqueInput, {
    nullable: false
  })
  where!: ChirpWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChirpCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: ChirpCreateWithoutAuthorInput;
}
