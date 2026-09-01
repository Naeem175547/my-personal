import {Injectable,OnModuleInit} from '@nestjs/common';
import {RedisClientType, createClient} from 'redis';
@Injectable()
export class RedisService implements OnModuleInit {
  private client: RedisClientType;
  constructor() {
    this.client = createClient({
        url: 'redis://localhost:6379',
    });
  }

  async onModuleInit() {
    await this.client.connect();
    console.log('Redis client connected');
  }




}