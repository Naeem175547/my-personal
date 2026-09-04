import { Module } from '@nestjs/common';
import { WorkspaceService } from './workspace.service.js';
import { WorkspaceResolver } from './workspace.resolver.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkspaceEntity } from './entity/workspace.entity.js';
import { WorkspaceMemberEntity } from './entity/workspace-member.entity.js';

@Module({
  imports:[TypeOrmModule.forFeature([WorkspaceEntity, WorkspaceMemberEntity])],
  providers: [WorkspaceService, WorkspaceResolver]
})
export class WorkspaceModule {}
