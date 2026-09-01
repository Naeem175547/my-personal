import { Resolver, Mutation, Args, ObjectType, Field, Query, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { UseInterceptors, UseGuards } from '@nestjs/common';
import { BasicInterceptor } from '../common/interceptors/interceptors.interceptor';
import { User } from '../user/types/user.type';
import { JwtGuard } from '../common/guards/auth.guard';
import { UserService } from '../user/user.service';

@ObjectType()
export class LoginResponse {
    @Field()
    accessToken: string;

    @Field()
    id: number;
}

@UseInterceptors(BasicInterceptor)
@Resolver()
export class AuthResolver {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService,
    ) { }


    @Mutation(() => LoginResponse)
    login(
        @Args('username') username: string,
        @Args('password') password: string,
    ) {
        return this.authService.login(username, password);
    }






    @Query(() => User)
    @UseGuards(JwtGuard)
    me(@Context() context) {
        console.log("USER FROM JWT:", context.req.user);
        const userId = context.req.user.id;
        return this.userService.getUserById(userId);
    }




}