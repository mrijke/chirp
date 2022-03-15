import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChirpOrderByWithAggregationInput } from "../../../inputs/ChirpOrderByWithAggregationInput";
import { ChirpScalarWhereWithAggregatesInput } from "../../../inputs/ChirpScalarWhereWithAggregatesInput";
import { ChirpWhereInput } from "../../../inputs/ChirpWhereInput";
import { ChirpScalarFieldEnum } from "../../../../enums/ChirpScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByChirpArgs {
  @TypeGraphQL.Field(_type => ChirpWhereInput, {
    nullable: true
  })
  where?: ChirpWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ChirpOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ChirpOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChirpScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "title" | "content" | "deleted" | "authorId">;

  @TypeGraphQL.Field(_type => ChirpScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ChirpScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
