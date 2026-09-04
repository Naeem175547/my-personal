import { Module } from '@nestjs/common';
import { MessageResolver } from './message.resolver.js';
import { MessageService } from './message.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageEntity } from './entity/message.entity.js';

@Module({
  imports:[TypeOrmModule.forFeature([MessageEntity])],
  providers: [MessageResolver, MessageService]
})
export class MessageModule {}
