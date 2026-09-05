import { Repository } from 'typeorm';
import { WorkspaceEntity } from './entity/workspace.entity.js';
import { CreateWorkspaceInput } from './dto/create.workspace.input.js';
import { UserService } from '../user/user.service.js';
import { WorkspaceMemberEntity } from './entity/workspace-member.entity.js';
export declare class WorkRepository {
    private workSpaceRepo;
    private userService;
    private workspaceMemberRepository;
    constructor(workSpaceRepo: Repository<WorkspaceEntity>, userService: UserService, workspaceMemberRepository: Repository<WorkspaceMemberEntity>);
    create(createWorkspaceDto: CreateWorkspaceInput): Promise<WorkspaceEntity>;
    findAll(): Promise<WorkspaceEntity[]>;
    findById(id: number): Promise<WorkspaceEntity>;
    update(id: number, updateWorkspaceDto: Partial<CreateWorkspaceInput>): Promise<WorkspaceEntity>;
    delete(id: number): Promise<WorkspaceEntity>;
    findByName(name: string): Promise<WorkspaceEntity>;
    findByJoinCode(joinCode: string): Promise<WorkspaceEntity>;
    addMemberToWorkspace(workspaceId: number, userId: number, role: 'admin' | 'member'): Promise<void>;
    addChannelToWorkspace(workspaceId: number, channelId: number): Promise<void>;
    fetchAllWorkspacesByMemberId(memberId: number): Promise<WorkspaceEntity[]>;
}
