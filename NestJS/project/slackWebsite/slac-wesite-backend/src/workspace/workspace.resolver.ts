import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthGuards } from '../common/guards/auth.guard.js';
import { Workspace } from './dto/workspace.type.js';
import { CreateWorkspaceInput } from './dto/create.workspace.input.js';
import { WorkspaceService } from './workspace.service.js';
import { WorkspacesResponse } from './dto/workspace.type.js';
@UseGuards(AuthGuards)
@Resolver()
export class WorkspaceResolver {
  constructor(private readonly workspaceService: WorkspaceService) {}
  @Mutation(() => WorkspacesResponse)
  createWorkspace(
    @Args('createWorkspaceInput') createWorkspaceInput: CreateWorkspaceInput,
    @Context() context: any,
  ) {
    console.log(createWorkspaceInput);
    const userId = context.req.user.id;
    return this.workspaceService.createWorkspaceService({
      ...createWorkspaceInput,
      ownerId: userId,
    });
  }
}
