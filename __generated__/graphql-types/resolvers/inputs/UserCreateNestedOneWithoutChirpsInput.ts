import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutChirpsInput } from "../inputs/UserCreateOrConnectWithoutChirpsInput";
import { UserCreateWithoutChirpsInput } from "../inputs/UserCreateWithoutChirpsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutChirpsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutChirpsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutChirpsInput, {
    nullable: true
  })
  create?: UserCreateWithoutChirpsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutChirpsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutChirpsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
