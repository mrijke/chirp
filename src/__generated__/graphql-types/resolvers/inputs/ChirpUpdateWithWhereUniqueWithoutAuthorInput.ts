import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChirpUpdateWithoutAuthorInput } from "../inputs/ChirpUpdateWithoutAuthorInput";
import { ChirpWhereUniqueInput } from "../inputs/ChirpWhereUniqueInput";

@TypeGraphQL.InputType("ChirpUpdateWithWhereUniqueWithoutAuthorInput", {
  isAbstract: true
})
export class ChirpUpdateWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => ChirpWhereUniqueInput, {
    nullable: false
  })
  where!: ChirpWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChirpUpdateWithoutAuthorInput, {
    nullable: false
  })
  data!: ChirpUpdateWithoutAuthorInput;
}
