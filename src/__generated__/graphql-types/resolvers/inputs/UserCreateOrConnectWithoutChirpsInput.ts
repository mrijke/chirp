import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutChirpsInput } from "../inputs/UserCreateWithoutChirpsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutChirpsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutChirpsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutChirpsInput, {
    nullable: false
  })
  create!: UserCreateWithoutChirpsInput;
}
