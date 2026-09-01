import { Args, Resolver, Mutation, Query, Int, ObjectType } from '@nestjs/graphql';
import { User } from './types/user.type';
import { UserRole } from './types/user.enum';
import { UserCreateInput } from './types/user.create.input';
import { UserService } from './user.service';
import { UserUpdateInput } from './types/user.update.input';
import { FileUrlResponse } from './types/fileUrlResponse';
import { UseGuards } from '@nestjs/common';
import { JwtGuard } from '../common/guards/auth.guard';


@Resolver(() => User)
export class UserResolver {
    constructor(private userService: UserService) { }
     @Query(() => [User])
    users() {
        return this.userService.getAllUsers()
    }

     @UseGuards(JwtGuard)
    @Query(() => User, { nullable: true })
    userById(@Args('id') id: number) {
        return this.userService.getUserById(id)
    }

     @UseGuards(JwtGuard)
    @Query(() => User, { nullable: true })
    userByUserName(@Args('username') username: string) {
        return this.userService.getUserByUserName(username)
    }



    @Mutation(() => Boolean)
    registerUser(
        @Args('input', { type: () => UserCreateInput })
        userInput: UserCreateInput,
    ) {
        return this.userService.signUp(userInput);

    }

     @UseGuards(JwtGuard)
    @Mutation(() => Boolean)
    updateUser(@Args('id', { type: () => Int }) id: number,
        @Args('input', { type: () => UserUpdateInput })
        userInput: UserUpdateInput,
    ) {
        return this.userService.update(id, userInput);


    }

    @UseGuards(JwtGuard)
    @Mutation(() => Boolean)
    deleteUser(@Args('id', { type: () => Int }) id: number) {
        return this.userService.delete(id)
    }



}
