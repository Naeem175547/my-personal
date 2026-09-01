import { UserRole } from "../types/user.enum";

export class UserUpdateDto {
    username?: string;
    password?: string;
    role?: UserRole;
    email?: string
}