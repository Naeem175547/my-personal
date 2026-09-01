import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
    private redis: Redis;

    constructor(private configService: ConfigService) {
        this.redis = new Redis(
            this.configService.get<string>(
                'REDIS_URL',
                'redis://localhost:6379'//base URL
            )
        );
    }

    async onModuleInit() {
        try {
            const result = await this.redis.ping();
            console.log(`Redis connected: ${result}`);
        } catch (error) {
            console.error('Redis connection failed:', error);
        }
    }

    async set(key: string, value: string, ttl: number) {
        const result = await this.redis.set(key, value, 'EX', ttl);
        await this.redis.publish('user.created', `set key and value and result is ${result}`)
        return;
    }

    async get(key: string) {
        return await this.redis.get(key);
    }

    async ttl(key: string) {
        return await this.redis.ttl(key);
    }

    async del(key: string) {
        return await this.redis.del(key);
    }

    async expire(key: string, ttl: number) {
        return await this.redis.expire(key, ttl);
    }

    async onModuleDestroy() {
        try {
            const result = await this.redis.quit();
            console.log(`Redis connection closed: ${result}`);
        } catch (error) {
            console.error('Redis shutdown failed:', error);
        }
    }
}