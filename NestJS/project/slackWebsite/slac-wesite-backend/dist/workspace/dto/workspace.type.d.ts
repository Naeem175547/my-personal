export declare class Workspace {
    id: number;
    name: string;
    description?: string;
    joinCode?: string;
}
export declare class WorkspacesResponse {
    success: boolean;
    message: string;
    data?: Workspace;
}
