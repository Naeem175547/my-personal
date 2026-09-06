import { CreateWorkspaceInput } from './dto/create.workspace.input.js';
import { WorkspaceService } from './workspace.service.js';
export declare class WorkspaceResolver {
    private readonly workspaceService;
    constructor(workspaceService: WorkspaceService);
    createWorkspace(createWorkspaceInput: CreateWorkspaceInput, context: any): Promise<import("./entity/workspace.entity.js").WorkspaceEntity>;
    deleteWorkspace(workspaceId: number, context: any): Promise<any>;
}
