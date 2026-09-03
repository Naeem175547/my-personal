import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver.js';
import { AuthService } from './auth.service.js';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module.js';

@Module({
  imports: [JwtModule.register({
    secret: process.env.JWT_SECRET || 'default_secret_key',
    signOptions: { expiresIn: '1h' },
  }),UserModule],
  providers: [AuthResolver, AuthService],  
})
export class AuthModule {}
