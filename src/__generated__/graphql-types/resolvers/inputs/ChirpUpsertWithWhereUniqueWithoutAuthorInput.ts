import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChirpCreateWithoutAuthorInput } from "../inputs/ChirpCreateWithoutAuthorInput";
import { ChirpUpdateWithoutAuthorInput } from "../inputs/ChirpUpdateWithoutAuthorInput";
import { ChirpWhereUniqueInput } from "../inputs/ChirpWhereUniqueInput";

@TypeGraphQL.InputType("ChirpUpsertWithWhereUniqueWithoutAuthorInput", {
  isAbstract: true
})
export class ChirpUpsertWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => ChirpWhereUniqueInput, {
    nullable: false
  })
  where!: ChirpWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChirpUpdateWithoutAuthorInput, {
    nullable: false
  })
  update!: ChirpUpdateWithoutAuthorInput;

  @TypeGraphQL.Field(_type => ChirpCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: ChirpCreateWithoutAuthorInput;
}
