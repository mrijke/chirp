import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ChirpScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ChirpScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ChirpScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ChirpScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChirpScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ChirpScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChirpScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ChirpScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  title?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  content?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  deleted?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  authorId?: StringWithAggregatesFilter | undefined;
}
