import { Field,  InputType } from "@nestjs/graphql";

    
InputType()
export class CreateWorkspaceInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

    @Field({ nullable: true })
    joinCode?: string;
}