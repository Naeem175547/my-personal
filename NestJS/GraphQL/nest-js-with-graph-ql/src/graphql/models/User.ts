import { ObjectType, Field, Int } from '@nestjs/graphql';
import { UserSetting } from './UserSetting';
import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'users' })
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ unique: true })
  @Field()
  username: string;

  @Column({ unique: true })
  @Field({ nullable: true })
  displayName?: string;

  @OneToOne(() => UserSetting, (userSetting) => userSetting.userId)
  @JoinColumn({ name: 'id', referencedColumnName: 'userId' })
  @Field(() => UserSetting, { nullable: true })
  setting?: UserSetting;
}
