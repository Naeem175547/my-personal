import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  username: string;

  @Field()
  email: string;

  @Field(() => Int)
  id: number;

  @Field()
  avatar: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
