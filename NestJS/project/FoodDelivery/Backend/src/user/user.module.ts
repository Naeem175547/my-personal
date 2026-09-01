import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDate } from './entity/userDate.entity';

@Module({
  imports:[TypeOrmModule.forFeature([UserDate])],
  providers: [UserService, UserResolver]
})
export class UserModule {}
