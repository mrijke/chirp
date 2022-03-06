import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChirpCreateManyAuthorInputEnvelope } from "../inputs/ChirpCreateManyAuthorInputEnvelope";
import { ChirpCreateOrConnectWithoutAuthorInput } from "../inputs/ChirpCreateOrConnectWithoutAuthorInput";
import { ChirpCreateWithoutAuthorInput } from "../inputs/ChirpCreateWithoutAuthorInput";
import { ChirpScalarWhereInput } from "../inputs/ChirpScalarWhereInput";
import { ChirpUpdateManyWithWhereWithoutAuthorInput } from "../inputs/ChirpUpdateManyWithWhereWithoutAuthorInput";
import { ChirpUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/ChirpUpdateWithWhereUniqueWithoutAuthorInput";
import { ChirpUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/ChirpUpsertWithWhereUniqueWithoutAuthorInput";
import { ChirpWhereUniqueInput } from "../inputs/ChirpWhereUniqueInput";

@TypeGraphQL.InputType("ChirpUpdateManyWithoutAuthorInput", {
  isAbstract: true
})
export class ChirpUpdateManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [ChirpCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: ChirpCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChirpCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: ChirpCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChirpUpsertWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  upsert?: ChirpUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => ChirpCreateManyAuthorInputEnvelope, {
    nullable: true
  })
  createMany?: ChirpCreateManyAuthorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ChirpWhereUniqueInput], {
    nullable: true
  })
  set?: ChirpWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChirpWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ChirpWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChirpWhereUniqueInput], {
    nullable: true
  })
  delete?: ChirpWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChirpWhereUniqueInput], {
    nullable: true
  })
  connect?: ChirpWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChirpUpdateWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  update?: ChirpUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChirpUpdateManyWithWhereWithoutAuthorInput], {
    nullable: true
  })
  updateMany?: ChirpUpdateManyWithWhereWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChirpScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ChirpScalarWhereInput[] | undefined;
}
