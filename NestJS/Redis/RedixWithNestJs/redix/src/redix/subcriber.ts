import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Redis } from 'ioredis';

@Injectable()
export class RedisSubscriber implements OnModuleInit {
    private redis: Redis;

    constructor(private configService: ConfigService) {
        this.redis = new Redis(
            configService.get<string>(
                'REDIS_URL',
                'redis://localhost:6379',
            ),
        );

        this.redis.on('error', (error) => {
            console.error('Redis Subscriber Error:', error);
        });
    }

    async onModuleInit() {
        await this.redis.subscribe('user.created');

        console.log('Subscribed to user.created');

        this.redis.on('message', (channel, message) => {
            console.log('Channel:', channel);
            console.log('Message:', message);
        });
    }
}