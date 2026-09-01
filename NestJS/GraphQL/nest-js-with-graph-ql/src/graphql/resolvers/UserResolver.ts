import {
  Resolver,
  Query,
  Args,
  Int,
  ResolveField,
  Parent,
  Mutation,
} from '@nestjs/graphql';
import { User } from '../models/User';
import { mockUsers } from 'src/_mocks_/mockUsers';
import { UserSetting } from '../models/UserSetting';
import { mockUsersSetting } from 'src/_mocks_/mockUsersSetting';

import { CreateUserInput } from '../utils/CreateUserInput';

export let incrementalId = 3;

@Resolver(() => User)
export class UserResolver {
  // @Query(() => User)
  // getUser() {
  //   return {
  //     id: 1,
  //     username: 'imran',
  //     displayName: 'Anson The Devleoper',
  //   };
  // }

  @Query(() => [User])
  getUsers() {
    return mockUsers;
  }

  @Query(() => User, { nullable: true })
  getUserById(@Args('id', { type: () => Int }) id: number) {
    const user = mockUsers.find((user) => user.id === id);
    return user;
  }

  @ResolveField(() => UserSetting, { name: 'setting', nullable: true })
  setting(@Parent() user: User) {
    console.log(user);
    return mockUsersSetting.find((setting) => setting.userId === user.id);
  }

  // @Mutation(() => User)
  // createUser(
  //   @Args('username') username: string,
  //   @Args('displayName', { nullable: true }) displayName: string,
  // ) {
  //   const newUser = { username, displayName, id: ++incrementalId };
  //   mockUsers.push(newUser);
  //   return newUser;
  // }
  @Mutation(() => User)
  createUser(@Args('userInput') createUserInput: CreateUserInput) {
    const newUser = {
      ...createUserInput,
      displayName: createUserInput.displayName ?? '',
      id: ++incrementalId,
    };
    mockUsers.push(newUser);
    return newUser;
  }
}
