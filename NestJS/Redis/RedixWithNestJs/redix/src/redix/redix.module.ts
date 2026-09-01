import { Module } from '@nestjs/common';
import { RedisService } from './redix.service';
import { RedixResolver } from './redix.resolver';
import { RedisSubscriber } from './subcriber';
@Module({
  providers: [RedisService, RedixResolver, RedisSubscriber]
})
export class RedixModule { }
