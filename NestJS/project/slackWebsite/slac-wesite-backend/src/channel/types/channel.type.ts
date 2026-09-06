import { Field, ObjectType } from '@nestjs/graphql';

import { Message } from '../../message/types/message.type.js';

@ObjectType()
export class Channel {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field(() => [Message], { nullable: true })
  messages?: Message[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
