import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserSetting {
  @Field()
  userId: number;

  @Field({ nullable: true, defaultValue: false })
  receiveNotifications: boolean;

  @Field({ nullable: true, defaultValue: false })
  receiveEmails: boolean;
}
