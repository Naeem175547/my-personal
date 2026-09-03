import { Module } from '@nestjs/common';
import { MessageResolver } from './message.resolver.js';
import { MessageService } from './message.service.js';

@Module({
  providers: [MessageResolver, MessageService]
})
export class MessageModule {}
