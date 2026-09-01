import {Injectable, CanActivate, ExecutionContext, BadRequestException} from '@nestjs/common';
import { RedisService } from '../redis/redis.service';

@Injectable()
export class RateLimitGuard implements CanActivate {
  constructor(private readonly redisService: RedisService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const ip = request.ip || 'unknown';
    const key = `rate_limit:${ip}`;
    const currentRequests = await this.redisService.client.incr(key);
    
    if (currentRequests === 1) {
      await this.redisService.client.expire(key, 60);
    }
    
    if (currentRequests > 5) {
      throw new BadRequestException('Too many requests please try after some time');
    }

    return true;
  }
}