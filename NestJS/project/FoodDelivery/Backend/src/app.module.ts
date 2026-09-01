import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDate } from './user/entity/userDate.entity';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [AuthModule, UserModule
    ,TypeOrmModule.forRoot({
      type:'mysql',
      host:'127.0.0.1',
      port:3306,
      username:'root',
      password:'imran',
      database:'Food_Delivery_Backend',
      entities:[UserDate],
      synchronize:false
    }),
    GraphQLModule.forRoot({
      driver:ApolloDriver,
      autoSchemaFile:true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
