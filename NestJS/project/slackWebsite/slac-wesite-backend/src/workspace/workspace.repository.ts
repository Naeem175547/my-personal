import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GraphQLError } from 'graphql';

import { WorkspaceEntity } from './entity/workspace.entity.js';
import { CreateWorkspaceInput } from './dto/create.workspace.input.js';
import { UserService } from '../user/user.service.js';
import { WorkspaceMemberEntity } from './entity/workspace-member.entity.js';

@Injectable()
export class WorkRepository {
  constructor(
    @InjectRepository(WorkspaceEntity)
    private workSpaceRepo: Repository<WorkspaceEntity>,
    private userService: UserService,
    @InjectRepository(WorkspaceMemberEntity)
    private workspaceMemberRepository: Repository<WorkspaceMemberEntity>,
  ) {}

  // CREATE
  async create(
    createWorkspaceDto: CreateWorkspaceInput,
  ): Promise<WorkspaceEntity> {
    try {
      const workspace = this.workSpaceRepo.create(createWorkspaceDto);
      return await this.workSpaceRepo.save(workspace);
    } catch (error: any) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new GraphQLError('Workspace with this name already exists', {
          extensions: {
            code: 'DUPLICATE_WORKSPACE_NAME',
            httpStatus: 400,
          },
        });
      }

      throw new GraphQLError('Failed to create workspace', {
        extensions: {
          code: 'WORKSPACE_CREATION_FAILED',
          httpStatus: 500,
        },
      });
    }
  }

  // FIND ALL
  async findAll(): Promise<WorkspaceEntity[]> {
    try {
      return await this.workSpaceRepo.find();
    } catch {
      throw new GraphQLError('Failed to fetch workspaces', {
        extensions: {
          code: 'WORKSPACE_FETCH_FAILED',
          httpStatus: 500,
        },
      });
    }
  }

  // FIND BY ID
  async findById(id: number): Promise<WorkspaceEntity> {
    try {
      const workspace = await this.workSpaceRepo.findOne({
        where: { id },
      });

      if (!workspace) {
        throw new GraphQLError('Workspace not found', {
          extensions: {
            code: 'WORKSPACE_NOT_FOUND',
            httpStatus: 404,
          },
        });
      }

      return workspace;
    } catch (error) {
      if (error instanceof GraphQLError) {
        throw error;
      }

      throw new GraphQLError('Failed to fetch workspace', {
        extensions: {
          code: 'WORKSPACE_FETCH_FAILED',
          httpStatus: 500,
        },
      });
    }
  }

  // UPDATE
  async update(
    id: number,
    updateWorkspaceDto: Partial<CreateWorkspaceInput>,
  ): Promise<WorkspaceEntity> {
    try {
      const workspace = await this.workSpaceRepo.findOne({
        where: { id },
      });

      if (!workspace) {
        throw new GraphQLError('Workspace not found', {
          extensions: {
            code: 'WORKSPACE_NOT_FOUND',
            httpStatus: 404,
          },
        });
      }

      Object.assign(workspace, updateWorkspaceDto);

      return await this.workSpaceRepo.save(workspace);
    } catch (error: any) {
      if (error instanceof GraphQLError) {
        throw error;
      }

      if (error.code === 'ER_DUP_ENTRY') {
        throw new GraphQLError('Workspace with this name already exists', {
          extensions: {
            code: 'DUPLICATE_WORKSPACE_NAME',
            httpStatus: 400,
          },
        });
      }

      throw new GraphQLError('Failed to update workspace', {
        extensions: {
          code: 'WORKSPACE_UPDATE_FAILED',
          httpStatus: 500,
        },
      });
    }
  }

  // DELETE
  async delete(id: number): Promise<WorkspaceEntity> {
    try {
      const workspace = await this.workSpaceRepo.findOne({
        where: { id },
      });

      if (!workspace) {
        throw new GraphQLError('Workspace not found', {
          extensions: {
            code: 'WORKSPACE_NOT_FOUND',
            httpStatus: 404,
          },
        });
      }

      const result = await this.workSpaceRepo.delete(id);
      return workspace;
    } catch (error) {
      if (error instanceof GraphQLError) {
        throw error;
      }

      throw new GraphQLError('Failed to delete workspace', {
        extensions: {
          code: 'WORKSPACE_DELETE_FAILED',
          httpStatus: 500,
        },
      });
    }
  }

  // FIND BY NAME
  async findByName(name: string): Promise<WorkspaceEntity> {
    try {
      const workspace = await this.workSpaceRepo.findOne({
        where: { name },
      });

      if (!workspace) {
        throw new GraphQLError('Workspace not found', {
          extensions: {
            code: 'WORKSPACE_NOT_FOUND',
            httpStatus: 404,
          },
        });
      }

      return workspace;
    } catch (error) {
      if (error instanceof GraphQLError) {
        throw error;
      }

      throw new GraphQLError('Failed to fetch workspace', {
        extensions: {
          code: 'WORKSPACE_FETCH_FAILED',
          httpStatus: 500,
        },
      });
    }
  }

  // FIND BY JOIN CODE
  async findByJoinCode(joinCode: string): Promise<WorkspaceEntity> {
    try {
      const workspace = await this.workSpaceRepo.findOne({
        where: { joinCode },
      });

      if (!workspace) {
        throw new GraphQLError('Workspace not found', {
          extensions: {
            code: 'WORKSPACE_NOT_FOUND',
            httpStatus: 404,
          },
        });
      }

      return workspace;
    } catch (error) {
      if (error instanceof GraphQLError) {
        throw error;
      }

      throw new GraphQLError('Failed to fetch workspace', {
        extensions: {
          code: 'WORKSPACE_FETCH_FAILED',
          httpStatus: 500,
        },
      });
    }
  }

  async addMemberToWorkspace(
    workspaceId: number,
    userId: number,
    role: 'admin' | 'member',
  ): Promise<void> {
    try {
      const workspace = await this.workSpaceRepo.findOne({
        where: { id: workspaceId },
      });
      if (!workspace) {
        throw new GraphQLError('Workspace not found', {
          extensions: {
            code: 'WORKSPACE_NOT_FOUND',
            httpStatus: 404,
          },
        });
      }

      const member = await this.userService.findOne(userId);
      if (!member) {
        throw new GraphQLError('User not found', {
          extensions: {
            code: 'USER_NOT_FOUND',
            httpStatus: 404,
          },
        });
      }

      const existingMember = await this.workspaceMemberRepository.findOne({
        where: {
          workspace: { id: workspaceId },
          user: { id: userId },
        },
      });

      if (existingMember) {
        throw new GraphQLError('User is already a member of this workspace', {
          extensions: {
            code: 'ALREADY_WORKSPACE_MEMBER',
            httpStatus: 400,
          },
        });
      }

      const workspaceMember = this.workspaceMemberRepository.create({
        workspace: workspace,
        user: member,
        role,
      });
      await this.workspaceMemberRepository.save(workspaceMember);
    } catch (error) {
      if (error instanceof GraphQLError) {
        throw error;
      }

      throw new GraphQLError('Failed to add member to workspace', {
        extensions: {
          code: 'ADD_MEMBER_FAILED',
          httpStatus: 500,
        },
      });
    }
  }

  async addChannelToWorkspace(
    workspaceId: number,
    channelId: number,
  ): Promise<void> {
    // Implementation for adding a channel to a workspace
  }

  async fetchAllWorkspacesByMemberId(
    memberId: number,
  ): Promise<WorkspaceEntity[]> {
    // Implementation for fetching all workspaces by member ID
    return [];
  }
}

// import Workspace from '../schema/workspace.js';
// import crudRepository from './crudRepository.js';
// const workspaceRepository = {
//   ...crudRepository(Workspace),
//   getWorkspaceByName: async function () {},
//   getWorkspaceByJoinCode: async function () {},
//   addMemberToWorkspace: async function () {},
//   addChannelToWorkspace: async function () {},
//   fetchAllWorkspaceByMemberId: async function () {}
// };

// export default workspaceRepository;
