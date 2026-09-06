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
import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver, Query } from '@nestjs/graphql';
import { AuthGuards } from '../common/guards/auth.guard.js';
import { CreateWorkspaceInput } from './dto/create.workspace.input.js';
import { WorkspaceService } from './workspace.service.js';
import { WorkspaceResponse, WorkspacesResponse } from './dto/workspace.type.js';
let WorkspaceResolver = class WorkspaceResolver {
    workspaceService;
    constructor(workspaceService) {
        this.workspaceService = workspaceService;
    }
    createWorkspace(createWorkspaceInput, context) {
        const userId = context.req.user.id;
        return this.workspaceService.createWorkspaceService({
            ...createWorkspaceInput,
            ownerId: userId,
        });
    }
    deleteWorkspace(workspaceId, context) {
        const userId = context.req.user.id;
        return this.workspaceService.deleteWorkspaceService(workspaceId, userId);
    }
    getWorkspacesUserIsMemberOf(context) {
        const userId = context.req.user.id;
        return this.workspaceService.getWorkspacesUserIsMemberOfServic(userId);
    }
};
__decorate([
    Mutation(() => WorkspaceResponse),
    __param(0, Args('createWorkspaceInput')),
    __param(1, Context()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateWorkspaceInput, Object]),
    __metadata("design:returntype", void 0)
], WorkspaceResolver.prototype, "createWorkspace", null);
__decorate([
    Mutation(() => WorkspaceResponse),
    __param(0, Args('workspaceId')),
    __param(1, Context()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], WorkspaceResolver.prototype, "deleteWorkspace", null);
__decorate([
    Query(() => WorkspacesResponse),
    __param(0, Context()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WorkspaceResolver.prototype, "getWorkspacesUserIsMemberOf", null);
WorkspaceResolver = __decorate([
    UseGuards(AuthGuards),
    Resolver(),
    __metadata("design:paramtypes", [WorkspaceService])
], WorkspaceResolver);
export { WorkspaceResolver };
//# sourceMappingURL=workspace.resolver.js.map