import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChirpWhereInput } from "../inputs/ChirpWhereInput";

@TypeGraphQL.InputType("ChirpListRelationFilter", {
  isAbstract: true
})
export class ChirpListRelationFilter {
  @TypeGraphQL.Field(_type => ChirpWhereInput, {
    nullable: true
  })
  every?: ChirpWhereInput | undefined;

  @TypeGraphQL.Field(_type => ChirpWhereInput, {
    nullable: true
  })
  some?: ChirpWhereInput | undefined;

  @TypeGraphQL.Field(_type => ChirpWhereInput, {
    nullable: true
  })
  none?: ChirpWhereInput | undefined;
}
