import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChirpAvgAggregate } from "../outputs/ChirpAvgAggregate";
import { ChirpCountAggregate } from "../outputs/ChirpCountAggregate";
import { ChirpMaxAggregate } from "../outputs/ChirpMaxAggregate";
import { ChirpMinAggregate } from "../outputs/ChirpMinAggregate";
import { ChirpSumAggregate } from "../outputs/ChirpSumAggregate";

@TypeGraphQL.ObjectType("ChirpGroupBy", {
  isAbstract: true
})
export class ChirpGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  deleted!: boolean;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  authorId!: number;

  @TypeGraphQL.Field(_type => ChirpCountAggregate, {
    nullable: true
  })
  _count!: ChirpCountAggregate | null;

  @TypeGraphQL.Field(_type => ChirpAvgAggregate, {
    nullable: true
  })
  _avg!: ChirpAvgAggregate | null;

  @TypeGraphQL.Field(_type => ChirpSumAggregate, {
    nullable: true
  })
  _sum!: ChirpSumAggregate | null;

  @TypeGraphQL.Field(_type => ChirpMinAggregate, {
    nullable: true
  })
  _min!: ChirpMinAggregate | null;

  @TypeGraphQL.Field(_type => ChirpMaxAggregate, {
    nullable: true
  })
  _max!: ChirpMaxAggregate | null;
}
