import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver, Query } from '@nestjs/graphql';
import { AuthGuards } from '../common/guards/auth.guard.js';
import { CreateWorkspaceInput } from './dto/create.workspace.input.js';
import { WorkspaceService } from './workspace.service.js';
import { WorkspaceResponse, WorkspacesResponse } from './dto/workspace.type.js';
@UseGuards(AuthGuards)
@Resolver()
export class WorkspaceResolver {
  constructor(private readonly workspaceService: WorkspaceService) {}
  @Mutation(() => WorkspaceResponse)
  createWorkspace(
    @Args('createWorkspaceInput') createWorkspaceInput: CreateWorkspaceInput,
    @Context() context: any,
  ) {
    const userId = context.req.user.id;
    return this.workspaceService.createWorkspaceService({
      ...createWorkspaceInput,
      ownerId: userId,
    });
  }
  @Mutation(() => WorkspaceResponse)
  deleteWorkspace(
    @Args('workspaceId') workspaceId: number,
    @Context() context: any,
  ) {
    const userId = context.req.user.id;
    return this.workspaceService.deleteWorkspaceService(workspaceId, userId);
  }

  @Query(() => WorkspacesResponse)
  getWorkspacesUserIsMemberOf(@Context() context: any) {
    const userId = context.req.user.id;
    return this.workspaceService.getWorkspacesUserIsMemberOfServic(userId);
  }
}
