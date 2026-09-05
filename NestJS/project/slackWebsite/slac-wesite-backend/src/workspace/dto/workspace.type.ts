import { Field,  InputType, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class WorkspaceInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  joinCode?: string;
}