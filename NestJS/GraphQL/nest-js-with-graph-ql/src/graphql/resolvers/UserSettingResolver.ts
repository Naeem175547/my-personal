import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserSetting } from '../models/UserSetting';
import { CreateUserSetting } from '../utils/CreateUserSetting';
import { mockUsersSetting } from 'src/_mocks_/mockUsersSetting';

@Resolver(() => UserSetting)
export class UserSettingResolver {
  @Mutation(() => UserSetting)
  createUserSetting(
    @Args('createUserSettingInput')
    createUserSettingInput: CreateUserSetting,
  ) {
    const newUserSetting = { ...createUserSettingInput };
    mockUsersSetting.push(newUserSetting);

    return newUserSetting;
  }
}
