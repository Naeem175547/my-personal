import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { GqlExecutionContext } from "@nestjs/graphql";
import { Role } from "../enum/Role";
@Injectable()
export class RoleGuard implements CanActivate {
    constructor(private reflector: Reflector) { }
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const requiredRoles =
            this.reflector.getAllAndOverride<Role[]>(
                'roles',
                [
                    context.getHandler(),
                    context.getClass(),
                ],
            );

        if (!requiredRoles) return true;
        const gqlContext = GqlExecutionContext.create(context);
        const user = gqlContext.getContext().req.user;
        if (!user) return false;
        return requiredRoles.includes(user.role);

    }


}