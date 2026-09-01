import { Injectable } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World From Rest API!';
  }

  @MessagePattern({cmd:'get'})
  getStatus(@Payload() data:any):String{
    console.log('microservices is received',data)
    return 'Microservices is Active'

  }

}
