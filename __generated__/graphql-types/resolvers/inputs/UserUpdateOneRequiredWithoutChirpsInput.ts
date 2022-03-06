import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutChirpsInput } from "../inputs/UserCreateOrConnectWithoutChirpsInput";
import { UserCreateWithoutChirpsInput } from "../inputs/UserCreateWithoutChirpsInput";
import { UserUpdateWithoutChirpsInput } from "../inputs/UserUpdateWithoutChirpsInput";
import { UserUpsertWithoutChirpsInput } from "../inputs/UserUpsertWithoutChirpsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutChirpsInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutChirpsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutChirpsInput, {
    nullable: true
  })
  create?: UserCreateWithoutChirpsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutChirpsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutChirpsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutChirpsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutChirpsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutChirpsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutChirpsInput | undefined;
}
