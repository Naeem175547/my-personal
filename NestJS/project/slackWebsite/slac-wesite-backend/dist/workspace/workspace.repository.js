var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GraphQLError } from 'graphql';
import { WorkspaceEntity } from './entity/workspace.entity.js';
import { UserService } from '../user/user.service.js';
import { WorkspaceMemberEntity } from './entity/workspace-member.entity.js';
let WorkRepository = class WorkRepository {
    workSpaceRepo;
    userService;
    workspaceMemberRepository;
    constructor(workSpaceRepo, userService, workspaceMemberRepository) {
        this.workSpaceRepo = workSpaceRepo;
        this.userService = userService;
        this.workspaceMemberRepository = workspaceMemberRepository;
    }
    async create(createWorkspaceDto) {
        try {
            const workspace = this.workSpaceRepo.create(createWorkspaceDto);
            return await this.workSpaceRepo.save(workspace);
        }
        catch (error) {
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
    async findAll() {
        try {
            return await this.workSpaceRepo.find();
        }
        catch {
            throw new GraphQLError('Failed to fetch workspaces', {
                extensions: {
                    code: 'WORKSPACE_FETCH_FAILED',
                    httpStatus: 500,
                },
            });
        }
    }
    async findById(id) {
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
        }
        catch (error) {
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
    async update(id, updateWorkspaceDto) {
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
        }
        catch (error) {
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
    async delete(id) {
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
        }
        catch (error) {
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
    async findByName(name) {
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
        }
        catch (error) {
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
    async findByJoinCode(joinCode) {
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
        }
        catch (error) {
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
    async addMemberToWorkspace(workspaceId, userId, role) {
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
        }
        catch (error) {
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
    async addChannelToWorkspace(workspaceId, channelId) {
    }
    async fetchAllWorkspacesByMemberId(memberId) {
        return [];
    }
};
WorkRepository = __decorate([
    Injectable(),
    __param(0, InjectRepository(WorkspaceEntity)),
    __param(2, InjectRepository(WorkspaceMemberEntity)),
    __metadata("design:paramtypes", [Repository,
        UserService,
        Repository])
], WorkRepository);
export { WorkRepository };
//# sourceMappingURL=workspace.repository.js.map