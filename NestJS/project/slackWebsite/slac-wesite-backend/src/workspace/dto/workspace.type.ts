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
