import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Channel {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  workspaceId?: [number];
}
