import { Controller, Post, Body } from '@nestjs/common';
import { UppercasePipe } from 'src/common/pipe/uppercase/uppercase.pipe';

@Controller('myname')
export class MynameController {
  @Post('custom')
  transformName(@Body('name', UppercasePipe) name: string) {
    return { message: `${name}` };
  }
}
