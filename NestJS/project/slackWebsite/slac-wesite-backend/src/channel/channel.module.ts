import { Module } from '@nestjs/common';
import { ChannelService } from './channel.service.js';
import { ChannelResolver } from './channel.resolver.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChannelEntity } from './entity/channel.entity.js';

@Module({
  imports:[TypeOrmModule.forFeature([ChannelEntity])],
  providers: [ChannelService, ChannelResolver]
})
export class ChannelModule {}
