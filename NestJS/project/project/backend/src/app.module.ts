import { Global, MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { databaseConfig } from './config/database.config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PostModule } from './post/post.module';
import { AuthResolver } from './auth/auth.resolver';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { NestModule } from '@nestjs/common';
import { BasicMiddleware } from './common/middleware/middleware.middleware';
import { LikesModule } from './likes/likes.module';
import { S3Module } from './S3/s3.module';
import { JwtGuard } from './common/guards/auth.guard';



@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: databaseConfig
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql',
      subscriptions: {
        "graphql-ws": true
      },
      context: ({ req, res }) => ({
        req,
        res,
      }),
      formatError: (error) => {
        return {
          message: error.message,
          code: error.extensions?.code,
          timestamp: new Date().toISOString(),
        };
      },

    }),

    UserModule,
    PostModule,
    AuthModule,
    LikesModule,
    S3Module
  ],
  controllers: [AppController],
  providers: [AppService, AuthResolver, AuthService],
  exports: []
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(BasicMiddleware).forRoutes('*')
  }
}
