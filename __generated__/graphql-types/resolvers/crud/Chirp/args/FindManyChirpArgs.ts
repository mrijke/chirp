import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChirpOrderByWithRelationInput } from "../../../inputs/ChirpOrderByWithRelationInput";
import { ChirpWhereInput } from "../../../inputs/ChirpWhereInput";
import { ChirpWhereUniqueInput } from "../../../inputs/ChirpWhereUniqueInput";
import { ChirpScalarFieldEnum } from "../../../../enums/ChirpScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyChirpArgs {
  @TypeGraphQL.Field(_type => ChirpWhereInput, {
    nullable: true
  })
  where?: ChirpWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ChirpOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ChirpOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ChirpWhereUniqueInput, {
    nullable: true
  })
  cursor?: ChirpWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ChirpScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "title" | "content" | "deleted" | "authorId"> | undefined;
}
