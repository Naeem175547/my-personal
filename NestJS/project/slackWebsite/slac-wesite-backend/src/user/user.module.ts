import { Module } from '@nestjs/common';
import { UserService } from './user.service.js';
import { UserResolver } from './user.resolver.js';
import { UserRepository } from './user.repository.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity.js';

@Module({
  imports:[TypeOrmModule.forFeature([UserEntity])],
  providers: [UserResolver, UserService,UserRepository],
})
export class UserModule {}
