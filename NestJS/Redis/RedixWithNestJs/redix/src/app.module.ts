import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedixModule } from './redix/redix.module';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }),
  GraphQLModule.forRoot({
    driver: ApolloDriver,
    autoSchemaFile: true

  }),
    RedixModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
