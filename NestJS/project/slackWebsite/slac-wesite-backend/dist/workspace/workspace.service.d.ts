import { WorkspaceEntity } from './entity/workspace.entity.js';
import { CreateWorkspaceInput } from './dto/create.workspace.input.js';
import { WorkRepository } from './workspace.repository.js';
export declare class WorkspaceService {
    private readonly workspaceRepository;
    constructor(workspaceRepository: WorkRepository);
    createWorkspaceService(createWorkspaceDto: CreateWorkspaceInput & {
        ownerId: number;
    }): Promise<WorkspaceEntity>;
}
