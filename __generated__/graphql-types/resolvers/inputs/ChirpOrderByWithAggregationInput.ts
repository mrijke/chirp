import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChirpAvgOrderByAggregateInput } from "../inputs/ChirpAvgOrderByAggregateInput";
import { ChirpCountOrderByAggregateInput } from "../inputs/ChirpCountOrderByAggregateInput";
import { ChirpMaxOrderByAggregateInput } from "../inputs/ChirpMaxOrderByAggregateInput";
import { ChirpMinOrderByAggregateInput } from "../inputs/ChirpMinOrderByAggregateInput";
import { ChirpSumOrderByAggregateInput } from "../inputs/ChirpSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ChirpOrderByWithAggregationInput", {
  isAbstract: true
})
export class ChirpOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  deleted?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  authorId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ChirpCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ChirpCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChirpAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ChirpAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChirpMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ChirpMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChirpMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ChirpMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChirpSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ChirpSumOrderByAggregateInput | undefined;
}
