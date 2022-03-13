import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChirpCountAggregate } from "../outputs/ChirpCountAggregate";
import { ChirpMaxAggregate } from "../outputs/ChirpMaxAggregate";
import { ChirpMinAggregate } from "../outputs/ChirpMinAggregate";

@TypeGraphQL.ObjectType("AggregateChirp", {
  isAbstract: true
})
export class AggregateChirp {
  @TypeGraphQL.Field(_type => ChirpCountAggregate, {
    nullable: true
  })
  _count!: ChirpCountAggregate | null;

  @TypeGraphQL.Field(_type => ChirpMinAggregate, {
    nullable: true
  })
  _min!: ChirpMinAggregate | null;

  @TypeGraphQL.Field(_type => ChirpMaxAggregate, {
    nullable: true
  })
  _max!: ChirpMaxAggregate | null;
}
