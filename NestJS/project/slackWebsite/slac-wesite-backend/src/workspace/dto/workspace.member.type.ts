import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../../user/types/user.type.js';
import { Workspace, WorkspaceResponse } from './workspace.type.js';

@ObjectType()
export class WorkspaceMember {
  @Field()
  id: number;

  @Field(() => User)
  user: User;

  @Field()
  role: 'admin' | 'member';

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
