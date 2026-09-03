import { Module } from '@nestjs/common';
import { WorkspaceService } from './workspace.service.js';
import { WorkspaceResolver } from './workspace.resolver.js';

@Module({
  providers: [WorkspaceService, WorkspaceResolver]
})
export class WorkspaceModule {}
