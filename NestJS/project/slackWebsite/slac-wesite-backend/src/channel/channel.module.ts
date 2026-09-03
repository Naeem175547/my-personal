import { Module } from '@nestjs/common';
import { ChannelService } from './channel.service.js';
import { ChannelResolver } from './channel.resolver.js';

@Module({
  providers: [ChannelService, ChannelResolver]
})
export class ChannelModule {}
