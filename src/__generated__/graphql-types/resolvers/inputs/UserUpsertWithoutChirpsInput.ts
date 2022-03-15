import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutChirpsInput } from "../inputs/UserCreateWithoutChirpsInput";
import { UserUpdateWithoutChirpsInput } from "../inputs/UserUpdateWithoutChirpsInput";

@TypeGraphQL.InputType("UserUpsertWithoutChirpsInput", {
  isAbstract: true
})
export class UserUpsertWithoutChirpsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutChirpsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutChirpsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutChirpsInput, {
    nullable: false
  })
  create!: UserCreateWithoutChirpsInput;
}
