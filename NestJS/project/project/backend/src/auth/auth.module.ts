import { Global, Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';


@Global()
@Module({
    imports: [
        UserModule,
        ConfigModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                secret: configService.get<string>('Secret_Key'),
                signOptions: {
                    expiresIn: '1h',
                },
            }),
        }),
    ],
    providers: [
        AuthService,
        AuthResolver,

    ],
    exports: [JwtModule],
})
export class AuthModule { }


