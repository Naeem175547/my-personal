import { User } from '../../user/types/user.type.js';
export declare class WorkspaceMember {
    id: number;
    user: User;
    role: 'admin' | 'member';
    createdAt: Date;
    updatedAt: Date;
}
