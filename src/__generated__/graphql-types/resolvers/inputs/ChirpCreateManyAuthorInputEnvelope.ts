import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChirpCreateManyAuthorInput } from "../inputs/ChirpCreateManyAuthorInput";

@TypeGraphQL.InputType("ChirpCreateManyAuthorInputEnvelope", {
  isAbstract: true
})
export class ChirpCreateManyAuthorInputEnvelope {
  @TypeGraphQL.Field(_type => [ChirpCreateManyAuthorInput], {
    nullable: false
  })
  data!: ChirpCreateManyAuthorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
