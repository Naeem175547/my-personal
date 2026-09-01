import { UserRole } from "../types/user.enum";

export class UserInputDto {
    username: string;
    password: string;
    role: UserRole;
    key?: string;
    contentType?: string
}