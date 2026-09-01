import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Controller()
export class AppController implements OnModuleInit {
  constructor(
    @Inject('NOTIFICATION_SERVICE')
    private readonly kafkaClient: ClientProxy,
  ) {}

  async onModuleInit() {
    await this.kafkaClient.connect();
  }

  @Get('create-user')
  async createUser() {
    const user = {
      id: 1,
      name: 'FarzeenALi',
    };

    await lastValueFrom(this.kafkaClient.emit('user_created', user));

    return {
      message: 'User-created event published!',
      user,
    };
  }
}
