import { Injectable } from '@nestjs/common';
import { GraphQLError } from 'graphql/error/index.js';
import { WorkspaceEntity } from './entity/workspace.entity.js';
import { CreateWorkspaceInput } from './dto/create.workspace.input.js';
import { WorkRepository } from './workspace.repository.js';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class WorkspaceService {
  constructor(private readonly workspaceRepository: WorkRepository) {}
  async createWorkspaceService(
    createWorkspaceDto: CreateWorkspaceInput & { ownerId: number },
  ): Promise<WorkspaceEntity> {
    try {
      const joinCode = uuidv4().substring(0, 6).toUpperCase();
      const workspaceData = {
        ...createWorkspaceDto,
        joinCode,
      };
      console.log('DTO:', createWorkspaceDto);
      console.log('WORKSPACE DATA:', workspaceData);
      const response = await this.workspaceRepository.create(workspaceData);
      await this.workspaceRepository.addMemberToWorkspace(
        response.id, //workspaceId
        createWorkspaceDto.ownerId,
        'admin',
      );
      await this.workspaceRepository.addChannelToWorkspace(
        response.id,
        'general',
      ); //default channel
      console.log('SERVICE RESPONSE:', response);
      return response;
    } catch (error: any) {
      console.log('CREATE WORKSPACE ERROR:', error);
      if (error.code === 'ER_DUP_ENTRY') {
        throw new GraphQLError('Workspace with the same name already exists', {
          extensions: {
            code: 'WORKSPACE_DUPLICATE',
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
}
