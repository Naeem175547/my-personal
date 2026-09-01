import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  Put,
  Patch,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUserDto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserById(id);
  }

  @Post()
  addUser(@Body() userData: CreateUserDto) {
    return this.userService.createUser(userData);
  }
  @Put(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() userData: CreateUserDto,
  ) {
    return this.userService.updateUser(id, userData);
  }
  @Patch(':id')
  patchUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() userData: CreateUserDto,
  ) {
    return this.userService.patchUser(id, userData);
  }
  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteUser(id);
  }
}
