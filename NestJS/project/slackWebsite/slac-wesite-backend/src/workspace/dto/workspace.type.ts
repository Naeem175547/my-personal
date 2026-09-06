import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Workspace {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  joinCode?: string;
}

@ObjectType()
export class WorkspaceResponse {
  @Field()
  success: boolean;

  @Field()
  message: string;

  @Field(() => Workspace, { nullable: true })
  data?: Workspace;
}

@ObjectType()
export class WorkspacesResponse {
  @Field()
  success: boolean;

  @Field()
  message: string;

  @Field(() => [Workspace], { nullable: true })
  data?: Workspace[];
}
