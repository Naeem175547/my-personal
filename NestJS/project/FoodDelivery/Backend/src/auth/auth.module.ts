import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDate } from 'src/user/entity/userDate.entity';

@Module({
  imports:[TypeOrmModule.forFeature([UserDate])],
  providers: [AuthService, AuthResolver]
})
export class AuthModule {}
