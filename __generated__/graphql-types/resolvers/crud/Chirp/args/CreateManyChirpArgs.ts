import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChirpCreateManyInput } from "../../../inputs/ChirpCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyChirpArgs {
  @TypeGraphQL.Field(_type => [ChirpCreateManyInput], {
    nullable: false
  })
  data!: ChirpCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
