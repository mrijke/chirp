import * as TypeGraphQL from "type-graphql";

export enum ChirpScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  title = "title",
  content = "content",
  deleted = "deleted",
  authorId = "authorId"
}
TypeGraphQL.registerEnumType(ChirpScalarFieldEnum, {
  name: "ChirpScalarFieldEnum",
  description: undefined,
});
