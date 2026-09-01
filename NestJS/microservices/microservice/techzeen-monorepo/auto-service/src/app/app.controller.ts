import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern,Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @MessagePattern({cmd:'validate_user'})
  handleUserValidation(@Payload() data:any){
    console.log('Auth Service recieved data',data)
    if(data.userId===1){
      return {status:'success',user:{id:1,name:'Farzeen'}}
    }
    else{
      return {status:'error',user:{message:"user not found"}}
    }
  }


  
}
