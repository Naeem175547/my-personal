var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@nestjs/common';
import { GraphQLError } from 'graphql/error/index.js';
import { WorkRepository } from './workspace.repository.js';
import { v4 as uuidv4 } from 'uuid';
let WorkspaceService = class WorkspaceService {
    workspaceRepository;
    constructor(workspaceRepository) {
        this.workspaceRepository = workspaceRepository;
    }
    async createWorkspaceService(createWorkspaceDto) {
        try {
            const joinCode = uuidv4().substring(0, 6).toUpperCase();
            const workspaceData = {
                ...createWorkspaceDto,
                joinCode,
            };
            console.log('DTO:', createWorkspaceDto);
            console.log('WORKSPACE DATA:', workspaceData);
            const response = await this.workspaceRepository.create(workspaceData);
            await this.workspaceRepository.addMemberToWorkspace(response.id, createWorkspaceDto.ownerId, 'admin');
            await this.workspaceRepository.addChannelToWorkspace(response.id, 'general');
            console.log('SERVICE RESPONSE:', response);
            return response;
        }
        catch (error) {
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
};
WorkspaceService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [WorkRepository])
], WorkspaceService);
export { WorkspaceService };
//# sourceMappingURL=workspace.service.js.map