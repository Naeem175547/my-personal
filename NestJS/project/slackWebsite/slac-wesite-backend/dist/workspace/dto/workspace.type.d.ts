export declare class Workspace {
    id: number;
    name: string;
    description?: string;
    joinCode?: string;
}
export declare class WorkspaceResponse {
    success: boolean;
    message: string;
    data?: Workspace;
}
export declare class WorkspacesResponse {
    success: boolean;
    message: string;
    data?: Workspace[];
}
