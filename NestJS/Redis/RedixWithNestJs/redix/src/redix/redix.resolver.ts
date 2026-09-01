import { Resolver, Query, Args, Mutation, Int } from '@nestjs/graphql';
import { RedisService } from './redix.service';

@Resolver()
export class RedixResolver {
    constructor(private readonly redisService: RedisService) { }
    @Query(() => String, { nullable: true })
    get(@Args('key') key: string) {
        return this.redisService.get(key);
    }

    @Query(() => Int, { nullable: true })
    ttl(@Args('key') key: string) {
        return this.redisService.ttl(key);
    }

    @Mutation(() => String, { nullable: true })
    del(@Args('key') key: string) {
        this.redisService.del(key);
        return true
    }

    @Mutation(() => Boolean)
    async set(
        @Args('key') key: string,
        @Args('value') value: string,
        @Args('ttl', { type: () => Int }) ttl: number,
    ) {
        await this.redisService.set(key, value, ttl);
        return true;
    }

    @Mutation(() => Boolean)
    async expire(
        @Args('key') key: string,
        @Args('ttl', { type: () => Int }) ttl: number,
    ) {
        await this.redisService.expire(key, ttl);
        return true;
    }
}