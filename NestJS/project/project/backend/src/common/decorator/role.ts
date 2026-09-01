import { SetMetadata } from "@nestjs/common"
import { Role } from "../enum/Role"
export const Roles = (...roles: Role[]) => {
    return SetMetadata('roles', roles)

}