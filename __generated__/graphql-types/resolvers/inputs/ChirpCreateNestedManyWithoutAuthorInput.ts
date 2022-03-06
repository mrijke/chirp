import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChirpCreateOrConnectWithoutAuthorInput } from "../inputs/ChirpCreateOrConnectWithoutAuthorInput";
import { ChirpCreateWithoutAuthorInput } from "../inputs/ChirpCreateWithoutAuthorInput";
import { ChirpWhereUniqueInput } from "../inputs/ChirpWhereUniqueInput";

@TypeGraphQL.InputType("ChirpCreateNestedManyWithoutAuthorInput", {
  isAbstract: true
})
export class ChirpCreateNestedManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [ChirpCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: ChirpCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChirpCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: ChirpCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChirpWhereUniqueInput], {
    nullable: true
  })
  connect?: ChirpWhereUniqueInput[] | undefined;
}
